import React from "react";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { sizes, borders } from "../../variables";

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
    sectionHeader: { fontFamily: "ArialBold", fontSize: "3.25mm" },
    wrapper: {
        // backgroundColor: "#00ff0030",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: borderNormal,
    },
    column: {
        flexGrow: 1,
        // backgroundColor: "#ff000030",
        display: "flex",
        flexDirection: "row",
    },
    columnTitle: {
        justifyContent: "center",
    },
    columnTitleText: {
        fontFamily: "Arial",
        fontSize: "2.4mm",
    },
    columnValuesWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    columnValues: {
        width: "6mm",
        alignItems: "center",
        borderLeft: borderNormal,
    },
    columnValuesLast: {
        width: "6mm",
        alignItems: "center",
        borderLeft: borderNormal,
        borderRight: borderNormal,
    },
    columnValuesText: {
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
    },
    spacer: {
        width: "5mm",
        // backgroundColor: "#00ff0030",
    },
});

const ColumnString = ({
    title,
    value = 0,
}: {
    title: string;
    value?: number;
}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.columnTitle}>
                <Text style={styles.columnTitleText}>{title}</Text>
            </View>
            <View style={styles.columnValuesWrapper}>
                <View style={styles.columnValues}>
                    <Text style={styles.columnValuesText}>
                        {value == 0 ? "X" : ""}
                    </Text>
                </View>
                <View style={styles.columnValues}>
                    <Text style={styles.columnValuesText}>
                        {value == 1 ? "X" : ""}
                    </Text>
                </View>
                <View style={styles.columnValues}>
                    <Text style={styles.columnValuesText}>
                        {value == 2 ? "X" : ""}
                    </Text>
                </View>
                <View style={styles.columnValuesLast}>
                    <Text style={styles.columnValuesText}>
                        {value == 3 ? "X" : ""}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ColumnString;
