import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const NKUAizsardzibasAutomatiVA1UnVA2Nolietoti = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="9.0 Aizsardzības aparāti VA1 un VA2 vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">VA1 un VA2 nolietoti.</Typography>
            }
        />
    );
};

export default NKUAizsardzibasAutomatiVA1UnVA2Nolietoti;
