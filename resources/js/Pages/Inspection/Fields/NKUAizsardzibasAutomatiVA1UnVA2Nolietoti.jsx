import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUAizsardzibasAutomatiVA1UnVA2Nolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Aizsardzības aparāti VA1 un VA2 vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            register={register}
            label={"VA1 un VA2 nolietoti."}
        />
    );
};

export default NKUAizsardzibasAutomatiVA1UnVA2Nolietoti;
