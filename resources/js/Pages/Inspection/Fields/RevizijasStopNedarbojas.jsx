import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
// import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const RevizijasStopNedarbojas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.4 Izvērtēšanas vadības ierīcei uz kabīnes jumta nedarbojas STOP poga."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Izvērtēšanas vadības ierīcei nedarbojas STOP poga.
                </Typography>
            }
        />
    );
};

export default RevizijasStopNedarbojas;
