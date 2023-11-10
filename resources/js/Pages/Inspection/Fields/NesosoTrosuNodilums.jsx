import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const NesosoTrosuNodilums = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="2.2 Nesošo trošu nodilums."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">Nesošo trošu nodilums.</Typography>
            }
        />
    );
};

export default NesosoTrosuNodilums;
