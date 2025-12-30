"use client";

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "dealer_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push('/login');
    };

    return (
        <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300 transition">
            Log Out
        </button>
    );
}
