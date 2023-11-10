import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import manjetsi from "@/img/manjetsi.png";
import { Typography } from "@mui/material";

const ApmalesApNesosamUnAITrosemNav = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja un nesošām trosēm."
            nonCompliancesLevel="1"
            imageSource={manjetsi}
            control={control}
            label={
                <Typography component="span">
                    Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja un
                    nesošām trosēm.
                </Typography>
            }
        />
    );
};

export default ApmalesApNesosamUnAITrosemNav;
