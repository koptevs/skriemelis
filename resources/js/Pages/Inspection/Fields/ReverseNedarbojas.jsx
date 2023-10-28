import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";
import { Typography } from "@mui/material";

const ReverseNedarbojas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="7.2 Durvju reverse mehānisms nedarbojas."
            nonCompliancesLevel="1"
            // imageSource={apdare}
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        // variant="h6"
                        className="font-bold text-green-600"
                    >
                        &laquo;&laquo;REVERSE&raquo;&raquo;
                    </Typography>
                    <Typography component="span">nedarbojas</Typography>
                </>
            }
        />
    );
};

export default ReverseNedarbojas;
