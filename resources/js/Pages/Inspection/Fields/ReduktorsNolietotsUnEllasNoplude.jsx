import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import mitrums from "@/img/mitrums.png";
import { Typography } from "@mui/material";

const ReduktorsNolietotsUnEllasNoplude = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.6 Lifta mašīnas reduktora nolietojums un eļļas noplūde."
            nonCompliancesLevel="1"
            imageSource={mitrums}
            control={control}
            label={
                <Typography component="span">
                    Reduktora nolietojums un eļļas noplūde.
                </Typography>
            }
        />
    );
};

export default ReduktorsNolietotsUnEllasNoplude;
