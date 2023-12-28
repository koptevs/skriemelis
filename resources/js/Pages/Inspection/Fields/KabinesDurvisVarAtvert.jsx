import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const KabinesDurvisVarAtvert = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="7.1 Lifta kabīnes durvis var atvert ar rokām kabīnei neatrodoties pretīm šahtas durvīm vai atslēgšanas zonā."
            nonCompliancesLevel="3"
            register={register}
            label={"Kabīnes durvis var atvert ar rokām."}
        />
    );
};

export default KabinesDurvisVarAtvert;
