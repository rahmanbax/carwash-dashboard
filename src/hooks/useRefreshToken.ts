import { useState } from 'react';
import { authService } from '@/services/authService';

/**
 * Custom hook untuk refresh token secara manual
 * Biasanya tidak perlu dipanggil manual karena sudah ada auto-refresh di interceptor
 * Tapi bisa digunakan jika ingin refresh token sebelum expire (proactive refresh)
 */
export const useRefreshToken = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const refresh = async () => {
        setIsRefreshing(true);
        setError(null);

        try {
            await authService.refreshToken();
            return true;
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Gagal refresh token';
            setError(errorMessage);
            return false;
        } finally {
            setIsRefreshing(false);
        }
    };

    return { refresh, isRefreshing, error };
};
