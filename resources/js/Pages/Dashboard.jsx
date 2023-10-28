import Topbar from "@/Layouts/Topbar";
import { Head } from "@inertiajs/react";

import { Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";

export default function Dashboard({ auth }) {
    const theme = useTheme();
    return (
        <Container maxWidth={theme.settings.containerWidth}>
            <Head title="Dashboard" />
            <Topbar user={auth.user} />
            <Typography variant="h2">SKRIEMELIS</Typography>
        </Container>
    );
}
