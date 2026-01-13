import { authService } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useLogout = () => {
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const logout = async () => {
        setIsLoggingOut(true);
        try {
            await authService.logout();
            router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    return { logout, isLoggingOut };
};
