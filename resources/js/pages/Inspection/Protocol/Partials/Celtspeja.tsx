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
        borderBottom: borderNormal,
    },
    firstCell: {
        // backgroundColor: "#ff000030",
        width: "17mm",
        // border: borderNormal,
        alignItems: "flex-start",
    },
    cell: {
        width: "10mm",
        textAlign: "left",
    },
    textFirstCol: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
        textAlign: "center",
    },
    text: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
        textAlign: "center",
    },
});

const Celtspeja = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.firstCell}>
                <Text style={styles.textFirstCol}>Celtspēja</Text>
            </View>
            <View style={styles.cell}>
                <Text
                    style={{
                        fontFamily: "ArialBold",
                        fontSize: "3.25mm",
                        textAlign: "center",
                    }}
                >
                    3200
                </Text>
            </View>
            <View style={styles.cell}>
                <Text
                    style={{
                        fontFamily: "Arial",
                        fontSize: "3.25mm",
                        textAlign: "center",
                    }}
                >
                    kg.
                </Text>
            </View>
        </View>
    );
};

export default Celtspeja;
