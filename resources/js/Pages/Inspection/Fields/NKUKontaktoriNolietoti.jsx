import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const NKUKontaktoriNolietoti = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="9.0 Elektriskie kontaktori vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Elektriskie kontaktori vadības skapī ir nolietoti.
                </Typography>
            }
        />
    );
};

export default NKUKontaktoriNolietoti;
