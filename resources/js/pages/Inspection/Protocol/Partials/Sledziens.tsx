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
    box: {
        height: "100%",
        width: "5mm",
        border: borderNormal,
        textAlign: "center",
        paddingTop: "0.3mm",
    },
    textSansBold: {
        fontFamily: "ArialBold",
        fontSize: "3.5mm",
    },
});

const Sledziens = () => {
    return (
        <>
            <View style={{ ...styles.wrapper, marginTop: "3mm" }}>
                <View
                    style={{
                        width: "15mm",
                        height: "100%",
                        // backgroundColor: "#00ff0030",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "ArialBold",
                            fontSize: "3.25mm",
                        }}
                    >
                        Slēdziens:
                    </Text>
                </View>
                <View
                    style={{
                        width: "32mm",
                        height: "100%",
                        // backgroundColor: "#00ff0030",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.textSans}>vajadzīgo atzīmēt</Text>
                </View>{" "}
                <View
                    style={{
                        width: "5mm",
                        height: "100%",
                        // backgroundColor: "#00ff0030",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.textSansBold}>X</Text>
                </View>
            </View>
            {/* 2nd row */}
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: "30%" }}>
                    <View style={styles.wrapper}>
                        <View style={styles.box}>
                            <Text style={styles.textSansBold}>X</Text>
                        </View>

                        <View style={{ justifyContent: "center" }}>
                            <Text
                                style={{
                                    ...styles.textSans,
                                    paddingLeft: "3mm",
                                }}
                            >
                                Lietošana atļauta
                            </Text>
                        </View>
                    </View>
                </View>{" "}
                <View style={{ width: "35%" }}>
                    <View style={styles.wrapper}>
                        <View style={styles.box}>
                            <Text style={styles.textSansBold}></Text>
                        </View>

                        <View style={{ justifyContent: "center" }}>
                            <Text
                                style={{
                                    ...styles.textSans,
                                    paddingLeft: "3mm",
                                }}
                            >
                                Lietošana pieļaujama 30 dienas
                            </Text>
                        </View>
                    </View>
                </View>{" "}
                <View style={{ width: "35%" }}>
                    <View style={styles.wrapper}>
                        <View style={styles.box}>
                            <Text style={styles.textSansBold}></Text>
                        </View>

                        <View style={{ justifyContent: "center" }}>
                            <Text
                                style={{
                                    ...styles.textSans,
                                    paddingLeft: "3mm",
                                }}
                            >
                                Lietošana nav pieļaujama
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Sledziens;
