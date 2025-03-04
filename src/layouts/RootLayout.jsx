import React from 'react';
import Navbar from '../Navbar'; // Ensure this path is correct
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet /> {/* Renders the matched child route */}
        </>
    );
};

export default RootLayout;
