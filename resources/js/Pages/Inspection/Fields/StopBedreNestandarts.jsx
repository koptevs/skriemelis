import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";

const StopNestandarts = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5"
            rawName="3.9 STOP slēdzis šahtas bedrē neatbilst standartam."
            nonCompliancesLevel="1"
            // imageSource={brivkustiba}
            // control={control}
            register={register}
            label={"Stop B2 bedrē nestandarts"}
        />
    );
};

export default StopNestandarts;
