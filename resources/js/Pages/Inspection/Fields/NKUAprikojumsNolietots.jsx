import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUAprikojumsNolietots = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Vadības stacijas elektriskais aprīkojums ir nolietojies."
            nonCompliancesLevel="1"
            register={register}
            label={"Vadības stacijas elektriskais aprīkojums ir nolietojies."}
        />
    );
};

export default NKUAprikojumsNolietots;
