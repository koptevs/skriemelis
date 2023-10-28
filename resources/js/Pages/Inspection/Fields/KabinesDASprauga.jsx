import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";
import { Typography } from "@mui/material";

const KabinesDASprauga = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="7.1 Sprauga starp kabīnes durvīm un aiļu apmalēm ir lielāka par 10 mm."
            nonCompliancesLevel="1"
            // imageSource={apdare}
            control={control}
            label={
                <>
                    <Typography
                        component="span"
                        // variant="h6"
                        className="font-bold text-red-500"
                    >
                        DAS
                    </Typography>
                    <Typography component="span">prauga.</Typography>
                </>
            }
        />
    );
};

export default KabinesDASprauga;
