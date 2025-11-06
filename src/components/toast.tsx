'use client';
import React, { useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiX } from 'react-icons/fi';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'warning';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const icons = {
        success: <FiCheckCircle className="text-green-500" size={24} />,
        error: <FiXCircle className="text-red-500" size={24} />,
        warning: <FiAlertCircle className="text-yellow-500" size={24} />,
    };

    const bgColors = {
        success: 'bg-green-50 dark:bg-green-900/20 border-green-500',
        error: 'bg-red-50 dark:bg-red-900/20 border-red-500',
        warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500',
    };

    return (
        <div
            className={`fixed top-4 right-4 z-50 flex items-center gap-3 p-4 border-l-4 ${bgColors[type]} rounded-lg shadow-lg animate-slide-in max-w-md`}
        >
            {icons[type]}
            <p className="flex-1 text-sm font-medium text-gray-900 dark:text-white">
                {message}
            </p>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
                <FiX size={20} />
            </button>
        </div>
    );
};

export default Toast;
