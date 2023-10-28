import * as React from "react";

import { Link as InertiaLink } from "@inertiajs/react";
import Link from "@mui/material/Link";

import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ColorModeContext, colorTokens } from "@/theme";
import ThemeLink from "@/Shared/ThemeLink";
import ApplicationLogo from "@/Components/ApplicationLogo";

const drawerWidth = 240;
const navItems = [
    { id: 1, name: "DASHBOARD", href: "dashboard" },
    { id: 2, name: "LIFTS", href: "lifts.index" },
    { id: 3, name: "MANAGERS", href: "lift-managers.index" },
    { id: 4, name: "MECHANICS", href: "mechanics.index" },
];

function Topbar(props) {
    const { window, user } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const colorMode = React.useContext(ColorModeContext);

    const topbarBackgroundColor = theme.palette.topbarBg;
    // const topbarTextColor = colors.redAccent[100];
    const topbarTextColor = "white";
    const drawerBackgroundColor = topbarBackgroundColor;
    const drawerTextColor = topbarTextColor;

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", color: drawerTextColor }}
        >
            <Link
                component={InertiaLink}
                href={route("lifts.index")}
                sx={{ textDecoration: "none", color: "white" }}
            >
                <Typography variant="h6" sx={{ my: 2 }}>
                    {user.name}
                </Typography>
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: "center",
                                color: "inherit",
                                "&:hover": {
                                    backgroundColor: "yellow",
                                    color: "green",
                                },
                            }}
                        >
                            <ThemeLink
                                href={route(item.href)}
                                // active={route().current("lifts.index")}
                            >
                                <ListItemText primary={item.name} sx={{}} />
                            </ThemeLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    sx={{ color: "inherit" }}
                    disableRipple
                    disableFocusRipple
                >
                    {theme.palette.mode === "dark" ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton
                    sx={{ color: "inherit" }}
                    // method="post"
                    // href={route("logout")}
                    // component={InertiaLink}
                    // onClick={handleMenu}
                    disableRipple
                    disableFocusRipple
                >
                    <PersonIcon />
                </IconButton>
            </Box>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                elevation={0}
                sx={{
                    bgcolor: topbarBackgroundColor,
                    justifyContent: "center",
                }}
            >
                <Container maxWidth={theme.settings.containerWidth}>
                    <Toolbar>
                        <Link
                            component={InertiaLink}
                            to="/"
                            sx={{ mr: "auto", textDecoration: "none" }}
                        >
                            {/* <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" /> */}
                            <Typography
                                variant="h6"
                                sx={{
                                    flexGrow: 1,
                                    display: {
                                        sm: "block",
                                    },
                                    color: "white",
                                }}
                            >
                                SKRIEMELIS
                            </Typography>
                        </Link>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ ml: "auto", display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navItems.map((item) => (
                                <ThemeLink
                                    href={route(item.href)}
                                    key={item.id}
                                    sx={{
                                        mr: 3,
                                    }}
                                >
                                    {item.name}
                                </ThemeLink>
                            ))}
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                sx={{ ml: 2, color: "inherit" }}
                            >
                                {theme.palette.mode === "dark" ? (
                                    <LightModeOutlinedIcon />
                                ) : (
                                    <DarkModeOutlinedIcon />
                                )}
                            </IconButton>
                            <IconButton sx={{ color: "inherit" }}>
                                <NotificationsIcon />
                            </IconButton>
                            <IconButton
                                component={InertiaLink}
                                href={route("profile.edit")}
                                sx={{ color: "inherit" }}
                            >
                                <SettingsIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: "inherit" }}
                                onClick={handleMenu}
                                // method="post"
                                // href={route("logout")}
                                // component={InertiaLink}
                                // as="button"
                                disableRipple
                                disableFocusRipple
                            >
                                <Box fontSize={12} mr={1} component="span">
                                    {user.name}
                                </Box>
                                <PersonIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                // anchorOrigin={{
                                //     vertical: "130px",
                                //     horizontal: "right",
                                // }}
                                // keepMounted
                                // transformOrigin={{
                                //     vertical: "130px",
                                //     horizontal: "right",
                                // }}
                                open={Boolean(anchorEl)}
                                // open={false}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    // method="post"
                                    href={route("profile.edit")}
                                    component={InertiaLink}
                                >
                                    Profile
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                    method="post"
                                    component={InertiaLink}
                                    href={route("logout")}
                                >
                                    Log Out
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    anchor="right"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            bgcolor: drawerBackgroundColor,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box />
        </Box>
    );
}

export default Topbar;
