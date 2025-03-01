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
        paddingTop: "1mm",
    },
    firstCell: {
        // backgroundColor: "#ff000030",
        width: "30mm",
        // border: borderNormal,
        alignItems: "flex-start",
    },
    cell: {
        // backgroundColor: "#ff000030",
        // flexGrow: 1,
        // border: borderNormal,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "15mm",
    },
    textFirstCol: {
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
        textAlign: "center",
    },
    text: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
        textAlign: "center",
    },
    emptyBox: {
        width: "5mm",
        border: borderNormal,
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
        textAlign: "center",
        marginLeft: "2mm",
    },
});

const LiftaTips = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.firstCell}>
                <Text style={styles.textFirstCol}>Lifta tips:</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>elektriskais</Text>
                <Text style={styles.emptyBox}>X</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>hidrauliskais</Text>
                <Text style={styles.emptyBox}>X</Text>
            </View>
        </View>
    );
};

export default LiftaTips;
