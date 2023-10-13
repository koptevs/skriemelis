import "./bootstrap";
import "../css/app.css";
import "dayjs/locale/lv";

import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import theme from "./theme";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.StrictMode>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale="lv"
                        >
                            <CssBaseline />
                            <App {...props} />
                        </LocalizationProvider>
                    </ThemeProvider>
                </StyledEngineProvider>
            </React.StrictMode>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
