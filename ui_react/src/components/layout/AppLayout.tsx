import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar to act as a spacer
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* Toolbar component used as a spacer for the fixed AppBar */}
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
