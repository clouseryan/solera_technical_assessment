import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar for spacer
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../store/store';
import { setSidebarOpen } from '../../store/slices/uiSlice';

export function Sidebar() {
    const open = useSelector((state: RootState) => state.ui.isSidebarOpen);
    const dispatch = useDispatch();

    const toggleDrawer = (newOpen: boolean) => () => {
        dispatch(setSidebarOpen(newOpen));
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <Toolbar /> {/* Spacer to push content down */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/">
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/about">
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                {/* Add more links here */}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    );
}
