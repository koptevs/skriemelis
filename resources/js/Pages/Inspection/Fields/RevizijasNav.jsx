import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const RevizijasNav = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="3.4 Nav izvērtēšanas vadības ierīces uz kabīnes jumta."
            nonCompliancesLevel="3"
            register={register}
            label={"Nav izvērtēšanas vadības ierīces uz kabīnes jumta."}
        />
    );
};

export default RevizijasNav;
