import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const NKUAizsardzibasAutomatiVA2UnVA3Nolietoti = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="9.0 Aizsardzības aparāti VA2 un VA3 vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">VA2 un VA3 nolietoti.</Typography>
            }
        />
    );
};

export default NKUAizsardzibasAutomatiVA2UnVA3Nolietoti;
