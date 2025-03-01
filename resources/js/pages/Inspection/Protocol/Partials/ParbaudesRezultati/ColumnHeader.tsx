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
    columnHeaderText: {
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
    },
    columnValuesWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    columnValues: {
        width: "6mm",
        alignItems: "center",
    },
    columnValuesText: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
    },
    spacer: {
        width: "5mm",
        // backgroundColor: "#00ff0030",
    },
});

const ColumnHeader = ({
    title,
    withNums = false,
}: {
    title: string;
    withNums?: boolean;
}) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.columnHeaderText}>{title}</Text>
            </View>
            {withNums ? (
                <View style={styles.columnValuesWrapper}>
                    <View style={styles.columnValues}>
                        <Text style={styles.columnValuesText}>0</Text>
                    </View>
                    <View style={styles.columnValues}>
                        <Text style={styles.columnValuesText}>1</Text>
                    </View>
                    <View style={styles.columnValues}>
                        <Text style={styles.columnValuesText}>2</Text>
                    </View>
                    <View style={styles.columnValues}>
                        <Text style={styles.columnValuesText}>3</Text>
                    </View>
                </View>
            ) : (
                ""
            )}
        </View>
    );
};

export default ColumnHeader;
