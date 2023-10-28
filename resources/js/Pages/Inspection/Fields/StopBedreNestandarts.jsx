import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";

const StopNestandarts = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5"
            rawName="3.9 STOP slēdzis šahtas bedrē neatbilst standartam."
            nonCompliancesLevel="1"
            // imageSource={brivkustiba}
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        // variant="h6"
                        className="font-bold text-red-500"
                    >
                        STOP{" "}
                    </Typography>
                    <Typography component="span">
                        (B2) bedrē nestandarts
                    </Typography>
                </>
            }
        />
    );
};

export default StopNestandarts;
