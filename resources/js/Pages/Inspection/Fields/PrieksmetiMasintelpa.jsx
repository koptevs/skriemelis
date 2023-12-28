import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";

const PrieksmetiMasintelpa = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā ir priekšmeti, kas nav saistīti ar lifta ekspluatāciju."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            register={register}
            label={"Priekšmeti."}
        />
    );
};

export default PrieksmetiMasintelpa;
