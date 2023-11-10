import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const AINolietots = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-0.5 inline-block"
            rawName="3.2 Ātruma ierobežotājs ir nolietots."
            nonCompliancesLevel="1"
            imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Ātruma ierobežotājs nolietots.
                </Typography>
            }
        />
    );
};

export default AINolietots;
