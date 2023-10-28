import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// export const colorTokens = (mode) => ({
//     ...(mode === "dark"
//         ? {
//               grey: {
//                   100: "#e0e0e0",
//                   200: "#c2c2c2",
//                   300: "#a3a3a3",
//                   400: "#858585",
//                   500: "#666666",
//                   600: "#525252",
//                   700: "#3d3d3d",
//                   800: "#292929",
//                   900: "#141414",
//               },
//               primary: {
//                   100: "#d0d1d5",
//                   200: "#a1a4ab",
//                   300: "#727681",
//                   400: "#1F2A40",
//                   500: "#141b2d",
//                   600: "#101624",
//                   700: "#0c101b",
//                   800: "#080b12",
//                   900: "#040509",
//               },
//               greenAccent: {
//                   100: "#dbf5ee",
//                   200: "#b7ebde",
//                   300: "#94e2cd",
//                   400: "#70d8bd",
//                   500: "#4cceac",
//                   600: "#3da58a",
//                   700: "#2e7c67",
//                   800: "#1e5245",
//                   900: "#0f2922",
//               },
//               redAccent: {
//                   100: "#f8dcdb",
//                   200: "#f1b9b7",
//                   300: "#e99592",
//                   400: "#e2726e",
//                   500: "#db4f4a",
//                   600: "#af3f3b",
//                   700: "#832f2c",
//                   800: "#58201e",
//                   900: "#2c100f",
//               },
//               blueAccent: {
//                   100: "#e1e2fe",
//                   200: "#c3c6fd",
//                   300: "#a4a9fc",
//                   400: "#868dfb",
//                   500: "#6870fa",
//                   600: "#535ac8",
//                   700: "#3e4396",
//                   800: "#2a2d64",
//                   900: "#151632",
//               },
//           }
//         : {
//               grey: {
//                   100: "#141414",
//                   200: "#292929",
//                   300: "#3d3d3d",
//                   400: "#525252",
//                   500: "#666666",
//                   600: "#858585",
//                   700: "#a3a3a3",
//                   800: "#c2c2c2",
//                   900: "#e0e0e0",
//               },
//               primary: {
//                   100: "#040509",
//                   200: "#080b12",
//                   300: "#0c101b",
//                   400: "#f2f0f0", // manually changed
//                   500: "#141b2d",
//                   600: "#1F2A40",
//                   700: "#727681",
//                   800: "#a1a4ab",
//                   900: "#d0d1d5",
//               },
//               greenAccent: {
//                   100: "#0f2922",
//                   200: "#1e5245",
//                   300: "#2e7c67",
//                   400: "#3da58a",
//                   500: "#4cceac",
//                   600: "#70d8bd",
//                   700: "#94e2cd",
//                   800: "#b7ebde",
//                   900: "#dbf5ee",
//               },
//               redAccent: {
//                   100: "#2c100f",
//                   200: "#58201e",
//                   300: "#832f2c",
//                   400: "#af3f3b",
//                   500: "#db4f4a",
//                   600: "#e2726e",
//                   700: "#e99592",
//                   800: "#f1b9b7",
//                   900: "#f8dcdb",
//               },
//               blueAccent: {
//                   100: "#151632",
//                   200: "#2a2d64",
//                   300: "#3e4396",
//                   400: "#535ac8",
//                   500: "#6870fa",
//                   600: "#868dfb",
//                   700: "#a4a9fc",
//                   800: "#c3c6fd",
//                   900: "#e1e2fe",
//               },
//           }),
// })

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}

const colorTokensDark = {
    neutral: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
    },
    primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
    },
    secondary: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
    },
    redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
    },
    blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
    },
};

const colorTokensLight = reverseTokens(colorTokensDark);

export const colorTokens = (mode) => ({
    ...(mode === "dark" ? colorTokensDark : colorTokensLight),
});

export const themeSettings = (mode) => {
    const colors = colorTokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          ...colors.blueAccent,
                          main: colors.blueAccent[500],
                      },
                      secondary: {
                          ...colors.secondary,
                          main: colors.secondary[500],
                      },
                      neutral: {
                          ...colors.neutral,
                          main: colors.neutral[500],
                      },
                      background: {
                          default: colors.primary[500],
                      },
                      topbarBg: colors.blueAccent[900],

                      activeLink: colors.redAccent[500],
                  }
                : {
                      // palette values for light mode
                      primary: {
                          ...colors.blueAccent,
                          main: colors.blueAccent[100],
                      },
                      secondary: {
                          ...colors.secondary,
                          main: colors.secondary[400],
                      },
                      neutral: {
                          ...colors.neutral,
                          main: colors.neutral[500],
                      },
                      background: {
                          default: "#fcfcfc",
                      },
                      topbarBg: colors.blueAccent[300],

                      activeLink: colors.redAccent[500],
                  }),
        },

        ...(mode === "dark" ? {} : {}),

        typography: {
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            fontSize: 11,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
                fontWeight: 600,
                color: colors.blueAccent[300],
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
                color: colors.blueAccent[300],
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
        settings: {
            containerWidth: "xl",
            topbarBackgroundColor: "tomato",
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("light");
    // const [mode, setMode] = useState("dark");
    //
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
