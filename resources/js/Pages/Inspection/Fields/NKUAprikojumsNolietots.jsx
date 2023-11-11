import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const NKUAprikojumsNolietots = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="9.0 Vadības stacijas elektriskais aprīkojums ir nolietojies."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Vadības stacijas elektriskais aprīkojums ir nolietojies.
                </Typography>
            }
        />
    );
};

export default NKUAprikojumsNolietots;
