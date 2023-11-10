import Topbar from "@/Layouts/Topbar";
import { Head } from "@inertiajs/react";

import { Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";

import loviteli from "@/img/loviteli.jpg";

export default function Dashboard({ auth }) {
    const theme = useTheme();
    return (
        <Container maxWidth={theme.settings.containerWidth}>
            <Head title="Dashboard" />
            <Topbar user={auth.user} />
            <Typography sx={{ marginTop: "100px" }} variant="h2">
                SKRIEMELIS
            </Typography>
            <img src={loviteli} alt="" width="500px" height="auto" />
        </Container>
    );
}
