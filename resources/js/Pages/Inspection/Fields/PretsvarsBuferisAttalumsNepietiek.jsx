import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import attalums from "@/img/attalums.png";

const PretsvarsBuferisAttalumsNepietiek = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes brīvkustība vadotnēs."
            nonCompliancesLevel="1"
            imageSource={attalums}
            control={control}
            label={
                <>
                    <Typography component="span">
                        Pretsvars - buferis{" "}
                    </Typography>
                    <Typography
                        component="span"
                        className="text-red-500 font-bold"
                    >
                        nepietiekams
                    </Typography>
                </>
            }
        />
    );
};

export default PretsvarsBuferisAttalumsNepietiek;
