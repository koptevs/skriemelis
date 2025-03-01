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
Font.register({
    family: "TimesNewRoman",
    src: "/fonts/TimesNewRomanRegular.ttf",
});
const neatbilstibas = [
    "1.4 - Mašīntelpas durvīm nav brīdinājuma uzraksta.",
    "3.1 - Mašīntelpā ir aprīkojums, kas nav saistīts ar liftu. Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja un nesošām trosēm.",
    "3.6 - Lifta mašīnas reduktora nolietojums un eļļas noplūde.",
    "5.3 - Palielināta lifta pretsvara brīvkustība vadotnēs (nolietoti vādkurpji).",
    "8.0 - Nepietiekams apgaismojums lifta kabīnē.",
    "8.0 - Nepietiekams apgaismojums vel kautkur.",
    "9.0 - Vadības stacijas elektriskais aprīkojums ir nolietojies (izņemot kontaktorus un aizsardzības automātus).",
];
const styles = StyleSheet.create({
    wrapper: {
        marginTop: "1mm",
        display: "flex",
        flexDirection: "column",
    },
    row_title: {
        width: "100%",
        height: "5mm",
        flexDirection: "row",
        // backgroundColor: "#00ff0030",
        alignItems: "center",
    },
    row_apraksti: {
        width: "100%",
        height: "4.5mm",
        flexDirection: "row",
        // backgroundColor: "#00ff0030",
        alignItems: "center",
        borderBottom: borders.borderThin,
    },
    col_1: {
        // backgroundColor: "#ff000030",
        width: "35mm",
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
    },
    col_2: {
        // backgroundColor: "#ff000030",
        width: "47mm",
        fontFamily: "Arial",
        fontSize: "3.25mm",
    },
    col_3: {
        flex: 1,
        height: "100%",
        borderBottom: borders.borderThin,
    },
    neatb_text: {
        fontFamily: "TimesNewRoman",
        fontSize: "3.25mm",
    },
});

const NeatbilstibuApraksti = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.row_title}>
                <View style={styles.col_1}>
                    <Text>Neatbilstību apraksti</Text>
                </View>
                <View style={styles.col_2}>
                    <Text>(papildus norādijumi, piezīmes):</Text>
                </View>
                <View style={styles.col_3}></View>
            </View>
            {neatbilstibas.map((n) => (
                <View style={styles.row_apraksti} key={n}>
                    <Text style={styles.neatb_text}>{n}</Text>
                </View>
            ))}
        </View>
    );
};

export default NeatbilstibuApraksti;
