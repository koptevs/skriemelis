import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

import { sizes, borders } from '../variables';

const { headerHeight } = sizes;
const { borderNormal } = borders;

const sectionHeight = '14mm';
const col_1_width = '23mm';
const col_2_width = '100mm';
const col_3_width = '100mm';

const firstLineLeftPadding = '5mm';

Font.register({
    family: 'Arial',
    src: '/fonts/ArialRegular.ttf',
});
Font.register({
    family: 'ArialBoldI',
    src: '/fonts/ArialBold.ttf',
});

const styles = StyleSheet.create({
    wrapper: {
        marginTop: '2mm',
        height: sectionHeight,
        flexDirection: 'row',
    },

    col_1: {
        width: col_1_width,
        height: '100%',
        // backgroundColor: "tomato",
        border: borderNormal,
        borderRight: 'none',
    },
    col_2: {
        width: col_2_width,
        height: '100%',
        // backgroundColor: "tomato",
        border: borderNormal,
        borderRight: 'none',
    },
    col_3: {
        width: col_3_width,
        height: '100%',
        // backgroundColor: "tomato",
        border: borderNormal,
    },
    row: {
        height: '25%',
        padding: '0.2mm',
        paddingLeft: '1mm',
    },
    row_border_bottom: {
        height: '25%',
        padding: '0.2mm',
        paddingLeft: '1mm',
        borderBottom: borders.borderNormal,
    },

    text: {
        fontFamily: 'Arial',
        fontSize: '2.5mm',
    },
    textBold: {
        fontFamily: 'ArialBold',
        fontSize: '2.5mm',
    },
});

const Vertejumi = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.col_1}>
                <View style={styles.row}>
                    <Text style={styles.textBold}>Vērtējumi:</Text>
                </View>
                <View style={styles.row_border_bottom}>
                    <Text style={styles.textBold}></Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textBold}></Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textBold}></Text>
                </View>
            </View>
            <View style={styles.col_2}>
                <View style={styles.row}>
                    <Text style={styles.text}>0 - neatbilstības nav konstatētas</Text>
                </View>
                <View style={styles.row_border_bottom}>
                    <Text style={styles.text}></Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>2 - konstatētas būtiskas neatbilstības, kas var radīt</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>draudus cilvēku dzīvībai, veselībai, īpašumam vai videi</Text>
                </View>
            </View>
            <View style={styles.col_3}>
                <View style={styles.row}>
                    <Text style={styles.text}>1- konstatētas maznozīmīgas neatbilstības, kas nerada būtiskus</Text>
                </View>
                <View style={styles.row_border_bottom}>
                    <Text style={styles.text}>draudus cilvēku dzīvībai, veselībai, īpašumam vai videi</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>3 - konstatētas bīstamas neatbilstības, kas rada tiešus draudus</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>cilvēku dzīvībai, veselībai, īpašumam vai videi</Text>
                </View>
            </View>
        </View>
    );
};

export default Vertejumi;
