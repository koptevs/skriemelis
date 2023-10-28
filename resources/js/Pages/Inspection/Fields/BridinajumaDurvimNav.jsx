import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const BridinajumaDurvimNav = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="1.4 Mašīntelpas durvīm nav brīdinājuma uzraksta 'Nepiederošiem ieeja aizliegta'."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    1.4 Mašīntelpas durvīm nav brīdinājuma uzraksta
                    'Nepiederošiem ieeja aizliegta'.
                </Typography>
            }
        />
    );
};

export default BridinajumaDurvimNav;
