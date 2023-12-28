import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const BridinajumaLukaiNav = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="1.4 Lūkai mašīntelpā nav brīdinājuma zīmes par nokrišanas draudiem."
            nonCompliancesLevel="1"
            register={register}
            label="Lūkai nav brīdinājuma"
        />
    );
};

export default BridinajumaLukaiNav;
