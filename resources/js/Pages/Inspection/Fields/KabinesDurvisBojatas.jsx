import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import durvis from "@/img/durvis.png";

const KabinesDurvisBojatas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="7.1 Lifta kabīnes durvis ir bojātas."
            nonCompliancesLevel="1"
            imageSource={durvis}
            control={control}
            label={
                <>
                    <Typography component="span">
                        Kabīnes durvis ir bojātas.
                    </Typography>
                </>
            }
        />
    );
};

export default KabinesDurvisBojatas;
