import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import kovriki from "@/img/kovriki.png";
import { Typography } from "@mui/material";

const PaklajuPieNKUNav = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.1 Nav dielektrisko paklāju pie vadības skapja."
            nonCompliancesLevel="1"
            imageSource={kovriki}
            control={control}
            label={
                <Typography component="span">
                    Nav dielektrisko paklāju pie vadības skapja.
                </Typography>
            }
        />
    );
};

export default PaklajuPieNKUNav;
