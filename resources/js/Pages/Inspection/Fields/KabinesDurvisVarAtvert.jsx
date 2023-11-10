import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const KabinesDurvisVarAtvert = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="7.1 Lifta kabīnes durvis var atvert ar rokām kabīnei neatrodoties pretīm šahtas durvīm vai atslēgšanas zonā."
            nonCompliancesLevel="3"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Kabīnes durvis var atvert ar rokām.
                </Typography>
            }
        />
    );
};

export default KabinesDurvisVarAtvert;
