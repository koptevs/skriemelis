import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import brivkustiba from "@/img/brivkustiba.png";

const KabinesUnPretsvaraBrivkustiba = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes un pretsvara brīvkustība vadotnēs."
            nonCompliancesLevel="1"
            imageSource={brivkustiba}
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        className="text-red-500 font-bold"
                    >
                        Kabīnes un pretsvara{" "}
                    </Typography>
                    <Typography component="span">brīvkustība</Typography>
                </>
            }
        />
    );
};

export default KabinesUnPretsvaraBrivkustiba;
