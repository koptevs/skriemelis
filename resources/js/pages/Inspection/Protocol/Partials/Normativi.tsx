import React from "react";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { sizes, borders } from "../variables";

const { headerHeight } = sizes;
const { borderNormal } = borders;

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
        // backgroundColor: "#00ff0030",
        display: "flex",
        flexDirection: "row",
        paddingVertical: "1mm",
    },
    firstCell: {
        // backgroundColor: "#ff000030",
        // border: borderNormal,
        alignItems: "flex-start",
    },
    cell: {
        // backgroundColor: "#ff000030",
        flexGrow: 1,
        // border: borderNormal,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "3mm",
    },
    textFirstCol: {
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
    },
    text: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
    },
});

const Normativi = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.firstCell}>
                <Text style={styles.textFirstCol}>
                    Tehniskās pārbaudes normatīvi:
                </Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>
                    MK.Not.Nr.679 no 17.11.2020; LRTDEA metodika 04.11/001
                </Text>
            </View>
        </View>
    );
};

export default Normativi;
