import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import brivkustiba from "@/img/brivkustiba.png";

const KabinesUnPretsvaraBrivkustiba = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes un pretsvara brīvkustība vadotnēs."
            nonCompliancesLevel="1"
            imageSource={brivkustiba}
            register={register}
            label={
                <>
                    <span style={{ color: "red", fontWeight: 700 }}>
                        Kabīnes un pretsvara{" "}
                    </span>
                    brīvkustība
                </>
            }
        />
    );
};

export default KabinesUnPretsvaraBrivkustiba;
