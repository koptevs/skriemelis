import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const KabinesDASprauga = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="7.1 Sprauga starp kabīnes durvīm un aiļu apmalēm ir lielāka par 10 mm."
            nonCompliancesLevel="1"
            register={register}
            label={
                <>
                    <span style={{ color: "red", fontWeight: 700 }}>DAS</span>
                    prauga.
                </>
            }
        />
    );
};

export default KabinesDASprauga;
