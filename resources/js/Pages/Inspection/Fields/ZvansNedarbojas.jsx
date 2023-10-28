import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const ZvansNedarbojas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5"
            rawName="3.7 Lifta kabīnē nedarbojas zvans."
            nonCompliancesLevel="1"
            imageSource={zvans}
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        // variant="h6"
                        className="font-bold text-red-500"
                    >
                        ZVANS{" "}
                    </Typography>
                    <Typography component="span">nedarbojas.</Typography>
                </>
            }
        />
    );
};

export default ZvansNedarbojas;
