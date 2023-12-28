import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";

const ZvansNedarbojas = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5"
            rawName="3.7 Lifta kabīnē nedarbojas zvans."
            nonCompliancesLevel="1"
            imageSource={zvans}
            register={register}
            label={
                <>
                    <span style={{ color: "red", fontWeight: 700 }}>
                        ZVANS{" "}
                    </span>
                    nedarbojas.
                </>
            }
        />
    );
};

export default ZvansNedarbojas;
