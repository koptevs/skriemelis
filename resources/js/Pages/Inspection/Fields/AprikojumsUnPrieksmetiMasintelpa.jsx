import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const AprikojumsUnPrieksmetiMasintelpa = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā ir priekšmeti un aprīkojums, kas nav saistīti ar liftu."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Priekšmeti un aprīkojums.
                </Typography>
            }
        />
    );
};

export default AprikojumsUnPrieksmetiMasintelpa;
