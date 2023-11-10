import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const PrieksmetiMasintelpa = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā ir priekšmeti, kas nav saistīti ar lifta ekspluatāciju."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={<Typography component="span">Priekšmeti.</Typography>}
        />
    );
};

export default PrieksmetiMasintelpa;
