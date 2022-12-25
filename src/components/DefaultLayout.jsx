import React from 'react';
import { useStateContext, Navigate } from '../contexts/ContextProvider';

export default function DefaultLayout() {
    const { user, token } = useStateContext()


    if (!token) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            Default Layout
        </div>
    );
}
