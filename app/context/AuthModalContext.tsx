// context/AuthModalContext.tsx
"use client";

import { createContext, useContext, useState, useCallback } from 'react';
import AuthModal from '../components/Auth/AuthModal';

interface AuthModalContextType {
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export const AuthModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return (
        <AuthModalContext.Provider value={{ open, close, toggle }}>
            {children}
            <AuthModal isOpen={isOpen} onClose={close} />
        </AuthModalContext.Provider>
    );
};

export const useAuthModal = (): AuthModalContextType => {
    const ctx = useContext(AuthModalContext);
    if (!ctx) throw new Error('useAuthModal must be used inside AuthModalProvider');
    return ctx;
};