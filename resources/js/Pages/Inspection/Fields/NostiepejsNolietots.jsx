import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import nostiepejs from "@/img/nostiepejs.png";

const NostiepejsNolietots = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="3.2 Ātruma ierobežotāja stiepšanas ierīce ir nolietota."
            nonCompliancesLevel="1"
            imageSource={nostiepejs}
            control={control}
            label={
                <Typography component="span">
                    Stiepšanas ierīce ir nolietota.
                </Typography>
            }
        />
    );
};

export default NostiepejsNolietots;
