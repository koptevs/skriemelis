import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUAizsardzibasAutomatiNolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Aizsardzības aparāti vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            register={register}
            label={"Aizsardzības aparāti vadības skapī ir nolietoti."}
        />
    );
};

export default NKUAizsardzibasAutomatiNolietoti;
