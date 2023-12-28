import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";

const NKUAizsardzibasAutomatsVA1Nolietots = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Aizsardzības aparāts VA1 vadības skapī ir nolietots."
            nonCompliancesLevel="1"
            register={register}
            label={"Aizsardzības aparāts VA1 vadības skapī ir nolietots."}
        />
    );
};

export default NKUAizsardzibasAutomatsVA1Nolietots;
