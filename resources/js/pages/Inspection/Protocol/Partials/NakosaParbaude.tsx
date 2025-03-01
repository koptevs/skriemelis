import React from "react";
import dayjs from "dayjs";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { sizes, borders } from "../variables";

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
        marginTop: "1mm",
        display: "flex",
        flexDirection: "row",
        height: "5mm",
    },
    textSans: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
        textAlign: "center",
    },
    textSansBold: {
        fontFamily: "ArialBold",
        fontSize: "3.5mm",
    },
});

const NakosaParbaude = ({
    dateStart,
    dateEnd,
}: {
    dateStart: string;
    dateEnd: string;
}) => {
    return (
        <>
            <View style={{ ...styles.wrapper, marginTop: "3mm" }}>
                <View
                    style={{
                        width: "32mm",
                        height: "100%",
                    }}
                >
                    <Text style={styles.textSansBold}>Nākošā pārbaude:</Text>
                </View>
                <View
                    style={{
                        width: "40mm",
                        height: "100%",
                        textAlign: "center",
                        borderBottom: borderNormal,
                    }}
                >
                    <Text style={styles.textSansBold}>
                        {dayjs(dateEnd).add(1, "year").format("DD.MM.YYYY")}
                    </Text>
                </View>
                <View
                    style={{
                        width: "75mm",
                        height: "100%",
                        textAlign: "right",
                    }}
                >
                    <Text style={styles.textSansBold}>
                        Pieļaujamā celtspēja
                    </Text>
                </View>
                <View
                    style={{
                        width: "35mm",
                        height: "100%",
                        textAlign: "center",
                        borderBottom: borderNormal,
                        marginLeft: "3mm",
                    }}
                >
                    <Text style={styles.textSansBold}>350</Text>
                </View>
                <View
                    style={{
                        width: "7mm",
                        height: "100%",
                        textAlign: "left",
                        // backgroundColor: "tomato",
                    }}
                >
                    <Text style={styles.textSansBold}>kg.</Text>
                </View>
            </View>
        </>
    );
};

export default NakosaParbaude;
