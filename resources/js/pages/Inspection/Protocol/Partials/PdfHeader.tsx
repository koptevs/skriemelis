import React from "react";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

import { sizes, borders, debug } from "../variables";

const { headerHeight } = sizes;
const { borderNormal, borderThick } = borders;

Font.register({
    family: "Arial",
    src: "/fonts/ArialRegular.ttf",
});
Font.register({
    family: "ArialBold",
    src: "/fonts/ArialBold.ttf",
});

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        height: headerHeight,
        // border: "0.1mm solid black",
        borderBottom: borderThick,
        // paddingBottom: "1mm",
        backgroundColor: debug ? "#ff7e7e" : "transparent",
    },
    textBlockWrapper: {
        display: "flex",
        flexDirection: "column",
    },
    firstLine: {
        display: "flex",
        width: "155mm",
        alignItems: "center",
        justifyContent: "center",
    },
    firstLineText: {
        fontFamily: "ArialBold",
        fontSize: "3.8mm",
    },
    secondLine: {
        width: "90%",
        marginLeft: "13mm",
        alignItems: "center",
        borderBottom: borderNormal,
    },
    secondLineText: {
        fontFamily: "Arial",
        fontSize: "3mm",
        paddingBottom: "1mm",
    },
    thirdLine: { alignItems: "center" },
    thirdLineText: {
        fontFamily: "Arial",
        fontSize: "2.5mm",
        paddingTop: "1mm",
        paddingBottom: "0.5mm",
    },
    fourthLine: {
        alignItems: "center",
        paddingBottom: "1mm",
    },
    fourthLineText: {
        fontFamily: "Arial",
        fontSize: "3mm",
    },
    logo: {
        flexGrow: 1,
    },
    image: {
        width: 115,
        marginTop: 10,
        marginRight: 15,
    },
});

const PdfHeader = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.textBlockWrapper}>
                <View style={styles.firstLine}>
                    <Text style={styles.firstLineText}>
                        LATVIJAS RŪPNIEKU TEHNISKĀS DROŠĪBAS EKSPERTU APVIENĪBA
                    </Text>
                </View>
                <View style={styles.secondLine}>
                    <Text style={styles.secondLineText}>
                        TUV Rheinland grupa, SIA
                    </Text>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={styles.thirdLineText}>
                        Katlakalna iela 9A, Rīga, LV-1073, Latvija, Tālr.
                        67568607, www.tuv.lv, e-pasts: tuv@tuv.lv
                    </Text>
                </View>
                <View style={styles.fourthLine}>
                    <Text style={styles.fourthLineText}>
                        DARBA AIZSARDZĪBAS UN IEKĀRTU NOVĒRTĒŠANAS INSPEKCIJA
                    </Text>
                </View>
            </View>
            <View style={styles.logo}>
                <Image style={styles.image} src="/assets/images/tuv.jpg" />
            </View>
        </View>
    );
};

export default PdfHeader;
