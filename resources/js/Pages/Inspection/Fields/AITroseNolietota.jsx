import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const AITroseNolietota = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.2 Ātruma ierobežotāja trose ir nodilis."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Ātruma ierobežotāja trose ir nodilis.
                </Typography>
            }
        />
    );
};

export default AITroseNolietota;
