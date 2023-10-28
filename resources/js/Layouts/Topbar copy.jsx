import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, colorTokens } from "@/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p="11px"
            backgroundColor={colors.primary[900]}
        >
            <Box
                display="flex"
                backgroundColor={colors.primary[900]}
                borderRadius="4px"
                // padding="1px"
                sx={{
                    border: `1px solid ${colors.primary[300]}`,
                }}
            >
                <InputBase
                    sx={{ ml: 1.5, flex: 1, color: colors.primary[100] }}
                    placeholder="Search"
                />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "light" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <PersonIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
