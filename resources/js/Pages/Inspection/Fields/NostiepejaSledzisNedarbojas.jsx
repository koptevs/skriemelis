import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NostiepejaSledzisNedarbojas = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5"
            rawName="2.1 Nedarbojas ātruma ierobežotāja nostiepēja kontroles slēdzis."
            nonCompliancesLevel="3"
            register={register}
            label={
                <>
                    Nostiepēja slēdzis (ВНУ) bedrē nedarbojas{" "}
                    <span style={{ color: "red" }}>(3)</span>
                </>
            }
        />
    );
};

export default NostiepejaSledzisNedarbojas;
