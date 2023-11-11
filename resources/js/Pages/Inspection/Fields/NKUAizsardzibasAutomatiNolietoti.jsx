import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const NKUAizsardzibasAutomatiNolietoti = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="9.0 Aizsardzības aparāti vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Aizsardzības aparāti vadības skapī ir nolietoti.
                </Typography>
            }
        />
    );
};

export default NKUAizsardzibasAutomatiNolietoti;
