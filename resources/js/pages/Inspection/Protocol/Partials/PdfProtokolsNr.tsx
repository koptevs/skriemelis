import React from "react";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

import { sizes } from "../variables";

const { headerHeight } = sizes;
// const protokolNumber = "04.45/538-24/02";

Font.register({
    family: "Arial",
    src: "/fonts/ArialRegular.ttf",
});
Font.register({
    family: "ArialBoldItalic",
    src: "/fonts/ArialBoldItalic.ttf",
});

const styles = StyleSheet.create({
    section: {
        paddingVertical: "2.5mm",
        // backgroundColor: "green",
    },
    text: {
        fontFamily: "ArialBoldItalic",
        fontSize: "3.5mm",
        textAlign: "center",
    },
});

const PdfProtokolsNr = ({ protocolNumber }: { protocolNumber: string }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.text}>
                LIFTA TEHNISKĀS PĀRBAUDES PROTOKOLS Nr. {protocolNumber}
            </Text>
        </View>
    );
};

export default PdfProtokolsNr;
