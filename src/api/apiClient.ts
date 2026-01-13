import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Flag untuk mencegah multiple refresh calls
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

// Request Interceptor: Tambahkan token ke setiap request
apiClient.interceptors.request.use(
    (config) => {
        // Ambil token dari localStorage
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Auto-refresh token jika dapat 401
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Jika error 401 dan bukan dari endpoint refresh/login
        if (error.response?.status === 401 && !originalRequest._retry) {
            // Jika dari endpoint login, jangan redirect - biarkan login page handle error
            if (originalRequest.url?.includes('/auth/login')) {
                return Promise.reject(error);
            }

            // Jika refresh token juga gagal, redirect ke login
            if (originalRequest.url?.includes('/auth/refresh')) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                document.cookie = 'token=; path=/; max-age=0';
                document.cookie = 'user=; path=/; max-age=0';
                window.location.href = '/login';
                return Promise.reject(error);
            }

            if (isRefreshing) {
                // Jika sedang refresh, queue request ini
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return apiClient(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Panggil endpoint refresh token
                const response = await apiClient.post('/auth/refresh');
                const { token, user } = response.data.data;

                // Simpan token baru
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 30}`;
                document.cookie = `user=${encodeURIComponent(JSON.stringify(user))}; path=/; max-age=${60 * 60 * 24 * 30}`;

                // Update header dengan token baru
                apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                originalRequest.headers.Authorization = `Bearer ${token}`;

                // Process queued requests
                processQueue(null, token);

                // Retry original request
                return apiClient(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);

                // Redirect ke login jika refresh gagal
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                document.cookie = 'token=; path=/; max-age=0';
                document.cookie = 'user=; path=/; max-age=0';
                window.location.href = '/login';

                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
