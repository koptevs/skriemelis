import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUAizsardzibasAutomatiVA2UnVA3Nolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Aizsardzības aparāti VA2 un VA3 vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            register={register}
            label={"VA2 un VA3 nolietoti."}
        />
    );
};

export default NKUAizsardzibasAutomatiVA2UnVA3Nolietoti;
