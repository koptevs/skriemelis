import { Link as InertiaLink } from "@inertiajs/react";

import { useTheme } from "@mui/material";
import Link from "@mui/material/Link";

import React from "react";

const ThemeLink = ({ children, href, sx, ...rest }) => {
    const theme = useTheme();

    const styles = {
        display: "inline-block",
        transition: "color 100ms linear",
        // color: theme.mainNavigationLinkColor,
        color: "inherit",
        // marginRight: "1.2rem",
        textDecoration: "none",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        [theme.breakpoints.up("lg")]: {
            letterSpacing: "0.1em",
        },
        "&::after": {
            content: '""',
            width: "calc(100% + 8px)",
            transform: "translateX(-4px)",
            height: "2px",
            margin: "0 auto",
            // backgroundColor: theme.mainNavigationLinkActiveColor,
            backgroundColor: "yellow",
            display: "block",
            // marginBottom: ".3rem",
            opacity: "0",
            transitionDuration: "200ms",
            transitionProperty: "opacity",
        },
        "&:hover": {
            // color: theme.mainNavigationLinkHoverColor,
            color: "#ffffff",
            "&::after": {
                opacity: "0.7",
            },
        },
        "&.active": {
            // color: theme.mainNavigationLinkActiveColor,
            color: "#eee",
            "&:hover": {
                cursor: "default",
                "&::after": {
                    opacity: "1",
                },
            },
            "&::after": {
                content: '""',
                width: "calc(100% + 8px)",
                transform: "translateX(-4px)",
                height: "2px",
                margin: "0 auto",
                // backgroundColor: theme.mainNavigationLinkActiveColor,
                backgroundColor: "lime",
                display: "block",
                // margin-bottom: .3rem;
                opacity: "1",
                transitionDuration: "500ms",
                transitionProperty: "opacity",
            },
        },
    };
    return (
        <Link
            component={InertiaLink}
            href={href}
            // color="inherit"
            // underline="none"
            // className={match ? "active" : ""}
            sx={{ ...styles, ...sx }}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default ThemeLink;
