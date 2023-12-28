import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";

const StopNedarbojas = ({ control, register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5"
            rawName="3.9 STOP slēdzis šahtas bedrē nedarbojas."
            nonCompliancesLevel="3"
            // imageSource={brivkustiba}
            control={control}
            register={register}
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
                        (B2) bedrē nedarbojas{" "}
                    </Typography>
                    <Typography
                        component="span"
                        // variant="h6"
                        className="font-bold text-red-500"
                    >
                        (3)
                    </Typography>
                </>
            }
        />
    );
};

export default StopNedarbojas;
