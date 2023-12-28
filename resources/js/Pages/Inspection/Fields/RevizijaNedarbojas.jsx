import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const RevizijaNedarbojas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="3.4 Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas."
            nonCompliancesLevel="3"
            register={register}
            label={"Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas."}
        />
    );
};

export default RevizijaNedarbojas;
