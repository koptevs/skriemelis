import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
// import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const RevizijasNav = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.4 Nav izvērtēšanas vadības ierīces uz kabīnes jumta."
            nonCompliancesLevel="3"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Nav izvērtēšanas vadības ierīces uz kabīnes jumta.
                </Typography>
            }
        />
    );
};

export default RevizijasNav;
