import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import durvis from "@/img/durvis.png";

const KabinesDurvisBojatas = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="7.1 Lifta kabīnes durvis ir bojātas."
            nonCompliancesLevel="1"
            imageSource={durvis}
            register={register}
            label={"Kabīnes durvis ir bojātas."}
        />
    );
};

export default KabinesDurvisBojatas;
