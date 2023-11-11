import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
// import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const RevizijaNedarbojas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.4 Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas."
            nonCompliancesLevel="3"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas.
                </Typography>
            }
        />
    );
};

export default RevizijaNedarbojas;
