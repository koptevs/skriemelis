import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";

const AprikojumsUnPrieksmetiMasintelpa = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā ir priekšmeti un aprīkojums, kas nav saistīti ar liftu."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            register={register}
            label={" Priekšmeti un aprīkojums."}
        />
    );
};

export default AprikojumsUnPrieksmetiMasintelpa;
