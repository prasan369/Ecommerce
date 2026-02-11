import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const localCart = localStorage.getItem('cart');
            return localCart ? JSON.parse(localCart) : [];
        }
        return [];
    });
    const [user, setUser] = useState(null);

    // Load user
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Sync cart with Supabase if user is logged in
    useEffect(() => {
        const fetchCart = async () => {
            // In a real app, fetch from Supabase 'cart_items' table
            // const { data, error } = await supabase.from('cart_items').select('*, product:products(*)');
            // if (data) setCartItems(data);
        };

        if (user) {
            fetchCart();
        }
    }, [user]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            let newCart;
            if (existing) {
                newCart = prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                newCart = [...prev, { ...product, quantity: 1 }];
            }

            if (!user) localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => {
            const newCart = prev.filter(item => item.id !== productId);
            if (!user) localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const updateQuantity = (productId, amount) => {
        setCartItems(prev => {
            const newCart = prev.map(item =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            );
            if (!user) localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        if (!user) localStorage.removeItem('cart');
    };

    const total = cartItems.reduce((acc, item) => acc + (item.sale_price || item.price) * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, total, user }}>
            {children}
        </CartContext.Provider>
    );
};
