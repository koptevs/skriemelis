import React from "react";
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

const IekartaMarketa = () => {
    return (
        <>
            <View style={{ ...styles.wrapper, marginTop: "3mm" }}>
                <View
                    style={{
                        width: "65mm",
                        height: "100%",
                    }}
                >
                    <Text style={styles.textSansBold}>
                        Iekārta marķēta ar pārbaudes zīmi Nr.
                    </Text>
                </View>
                <View
                    style={{
                        width: "30mm",
                        height: "100%",
                        textAlign: "center",
                        borderBottom: borderNormal,
                    }}
                >
                    <Text style={styles.textSansBold}>2233</Text>
                </View>
                <View
                    style={{
                        width: "45mm",
                        height: "100%",
                        textAlign: "right",
                    }}
                >
                    <Text style={styles.textSansBold}>Eksperts</Text>
                </View>
                <View
                    style={{
                        width: "36mm",
                        height: "100%",
                        textAlign: "center",
                        borderBottom: borderNormal,
                        marginLeft: "3mm",
                    }}
                >
                    <Text style={styles.textSansBold}>Igors Koptevs</Text>
                </View>
            </View>
        </>
    );
};

export default IekartaMarketa;
