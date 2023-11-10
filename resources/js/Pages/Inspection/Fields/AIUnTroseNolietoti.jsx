import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const AIUnTroseNolietoti = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.2 Ātruma ierobežotājs un tā trose ir nolietoti."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Ātruma ierobežotājs un tā trose ir nolietoti.
                </Typography>
            }
        />
    );
};

export default AIUnTroseNolietoti;
