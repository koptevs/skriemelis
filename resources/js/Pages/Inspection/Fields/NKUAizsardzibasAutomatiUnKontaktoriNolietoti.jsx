import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUAizsardzibasAutomatiUnKontaktoriNolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Aizsardzības aparāti un elektriskie kontaktori vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            register={register}
            label={
                "Aizsardzības aparāti un elektriskie kontaktori vadības skapī ir nolietoti."
            }
        />
    );
};

export default NKUAizsardzibasAutomatiUnKontaktoriNolietoti;
