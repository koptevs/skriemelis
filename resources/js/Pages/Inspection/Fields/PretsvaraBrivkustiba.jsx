import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import brivkustiba from "@/img/brivkustiba.png";

const PretsvaraBrivkustiba = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta pretsvara brīvkustība vadotnēs."
            nonCompliancesLevel="1"
            imageSource={brivkustiba}
            register={register}
            label={
                <>
                    <span style={{ color: "red" }}>Pretsvara brīvkustība</span>
                </>
            }
        />
    );
};

export default PretsvaraBrivkustiba;
