import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ElevatorOutlinedIcon from "@mui/icons-material/ElevatorOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ApplicationLogo from "@/Components/ApplicationLogo";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ColorModeContext, colorTokens } from "@/theme";

import { Link as InertiaLink } from "@inertiajs/react";
import Topbar from "@/Layouts/Topbar";

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Layout({ children, auth }) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    // console.log(isSmall);
    const colorMode = React.useContext(ColorModeContext);
    const [open, setOpen] = React.useState(!isSmall);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        // setOpen(!open);
        setOpen((prev) => !prev);
    };
    const mediaSmUp = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box
            sx={{
                display: "flex",
                // backgroundColor: theme.palette.background.default,
            }}
        >
            <AppBar
                position="fixed"
                open={open}
                elevation={0}
                sx={{ backgroundColor: theme.palette.topbarBg }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{ backgroundColor: theme.palette.topbarBg }}>
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ color: "white" }}
                    >
                        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[
                        {
                            text: "Dashboard",
                            href: "/dashboard",
                            routes: ["dashboard"],
                            icon: <DashboardIcon />,
                        },
                        {
                            text: "Lifts",
                            href: "/lifts",
                            routes: ["lifts.index", "lifts.show", "lifts.edit"],
                            icon: <ElevatorOutlinedIcon />,
                        },
                        {
                            text: "Lift Managers",
                            href: "/lift-managers",
                            routes: [
                                "lift-managers.index",
                                "lift-managers.show",
                                "lift-managers.edit",
                            ],
                            icon: <ManageAccountsOutlinedIcon />,
                        },
                        {
                            text: "Mechanics",
                            href: "/mechanics",
                            routes: [
                                "mechanics.index",
                                "mechanics.show",
                                "mechanics.edit",
                            ],
                            icon: <BuildOutlinedIcon />,
                        },
                        {
                            text: "Inspections",
                            href: "/inspections",
                            routes: ["inspections.index", "inspections.show"],
                            icon: <NoteAddOutlinedIcon />,
                        },
                        {
                            text: "Create inspection",
                            href: "/inspections/create",
                            routes: ["inspections.create"],
                            icon: <NoteAddOutlinedIcon />,
                        },
                    ].map((menuItem, index) => (
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            key={menuItem.href}
                        >
                            <ListItemButton
                                component={InertiaLink}
                                href={menuItem.href}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                        color: menuItem.routes.includes(
                                            route().current()
                                        )
                                            ? theme.palette.activeLink
                                            : "",
                                    }}
                                >
                                    {menuItem.icon}
                                </ListItemIcon>

                                <ListItemText
                                    primary={
                                        menuItem.text +
                                        (menuItem.routes.includes(
                                            route().current()
                                        )
                                            ? " - " +
                                              route().current().split(".")[1]
                                            : "")
                                    }
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        "& .MuiTypography-root":
                                            menuItem.routes.includes(
                                                route().current()
                                            ) && {
                                                fontWeight: "bold",
                                                color: theme.palette.activeLink,
                                            },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Typography
                        mt={2}
                        mb={1}
                        sx={{
                            marginLeft: open ? "20px" : "18px",
                            fontWeight: "bold",
                        }}
                    >
                        Test
                    </Typography>
                    <Divider />

                    {["Inbox", "Starred"].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail"].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    sx={{ color: "inherit" }}
                >
                    {theme.palette.mode === "dark" ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
            </Drawer>
            <Box
                component="main"
                sx={{
                    marginTop: "64px", // AppBar compensation
                    padding: "16px 8px 0 8px",
                    ...(mediaSmUp && {
                        padding: "16px 16px 0 16px",
                    }),
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

// sx={{
//     marginLeft: "5px",
//     ...(mediaSmUp && {
//         marginLeft: "15px",
//     }),
// }}
