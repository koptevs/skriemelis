import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";
import { Typography } from "@mui/material";

const NKUAizsardzibasAutomatsVA3Nolietots = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="9.0 Aizsardzības aparāts VA1 vadības skapī ir nolietots."
            nonCompliancesLevel="1"
            // imageSource={os}
            control={control}
            label={
                <Typography component="span">
                    Aizsardzības aparāts VA3 vadības skapī ir nolietots.
                </Typography>
            }
        />
    );
};

export default NKUAizsardzibasAutomatsVA3Nolietots;
