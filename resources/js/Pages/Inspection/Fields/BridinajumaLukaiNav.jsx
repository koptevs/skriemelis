import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const BridinajumaLukaiNav = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="1.4 Lūkai mašīntelpā nav brīdinājuma zīmes par nokrišanas draudiem."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Lūkai mašīntelpā nav brīdinājuma zīmes par nokrišanas
                    draudiem.
                </Typography>
            }
        />
    );
};

export default BridinajumaLukaiNav;
