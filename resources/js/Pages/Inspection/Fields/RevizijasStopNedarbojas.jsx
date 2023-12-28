import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const RevizijasStopNedarbojas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="3.4 Izvērtēšanas vadības ierīcei uz kabīnes jumta nedarbojas STOP poga."
            nonCompliancesLevel="1"
            register={register}
            label={"Izvērtēšanas vadības ierīcei nedarbojas STOP poga."}
        />
    );
};

export default RevizijasStopNedarbojas;
