import React from "react";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { sizes, borders } from "../variables";
const withArRezultatiemIepazinos = true;
// const withArRezultatiemIepazinos = false;
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
    textSansSmall: {
        fontFamily: "Arial",
        fontSize: "2.8mm",
        textAlign: "center",
    },
    textSansBold: {
        fontFamily: "ArialBold",
        fontSize: "3.5mm",
    },
    textSansBoldSmall: {
        fontFamily: "ArialBold",
        fontSize: "2.8mm",
    },
});

const Footer = () => {
    return (
        <View
            style={{
                position: "absolute",
                bottom: "5mm",
                display: "flex",
                flexDirection: "row",
            }}
        >
            <View
                style={{
                    width: "30mm",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    // backgroundColor: "tomato",
                }}
            >
                <Text
                    style={{
                        ...styles.textSansBoldSmall,
                    }}
                >
                    BIR Reg . Nr . 524607
                </Text>
                <Text
                    style={{
                        ...styles.textSansSmall,
                    }}
                >
                    04.27_015 . doc
                </Text>
                <Text
                    style={{
                        ...styles.textSansSmall,
                    }}
                >
                    09.03.2022
                </Text>
            </View>
            <View
                style={{
                    width: "150mm",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "lime",
                }}
            >
                <Text
                    style={{
                        ...styles.textSansSmall,
                    }}
                >
                    Protokols parakstīts ar drošu elektronisko parakstu un satur
                    laika zīmogu.
                </Text>
                <Text
                    style={{
                        ...styles.textSansSmall,
                    }}
                >
                    Protokols attiecas tikai uz augstākminēto iekārtu . Lūdzam
                    glabāt līdzvertīgi iekārtas pasei.
                </Text>
                <Text
                    style={{
                        ...styles.textSansSmall,
                    }}
                >
                    kās pārbaudes protokolu aizliegts pavairot nepilnā apjomā
                    bez inspicēšanas institūcijas rakstiskas atļaujas.
                </Text>
            </View>
        </View>
    );
};

export default Footer;
