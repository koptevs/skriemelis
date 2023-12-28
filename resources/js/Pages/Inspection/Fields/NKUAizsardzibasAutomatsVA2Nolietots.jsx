import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUAizsardzibasAutomatsVA2Nolietots = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Aizsardzības aparāts VA1 vadības skapī ir nolietots."
            nonCompliancesLevel="1"
            register={register}
            label={"Aizsardzības aparāts VA2 vadības skapī ir nolietots."}
        />
    );
};

export default NKUAizsardzibasAutomatsVA2Nolietots;
