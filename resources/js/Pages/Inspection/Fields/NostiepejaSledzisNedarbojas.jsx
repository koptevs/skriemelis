import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";

const NostiepejaSledzisNedarbojas = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5"
            rawName="2.1 Nedarbojas ātruma ierobežotāja nostiepēja kontroles slēdzis."
            nonCompliancesLevel="3"
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        // variant="h6"
                        className="font-bold text-red-500"
                    >
                        Nostiepēja slēdzis{" "}
                    </Typography>
                    <Typography component="span">
                        (ВНУ) bedrē nedarbojas{" "}
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

export default NostiepejaSledzisNedarbojas;
