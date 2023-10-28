import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import brivkustiba from "@/img/brivkustiba.png";

const PretsvaraBrivkustiba = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta pretsvara brīvkustība vadotnēs."
            nonCompliancesLevel="1"
            imageSource={brivkustiba}
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        className="text-red-500 font-bold"
                    >
                        Pretsvara{" "}
                    </Typography>
                    <Typography component="span">brīvkustība</Typography>
                </>
            }
        />
    );
};

export default PretsvaraBrivkustiba;
