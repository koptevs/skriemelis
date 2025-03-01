import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { sizes, borders } from '../variables';

const { headerHeight } = sizes;
const { borderNormal } = borders;

Font.register({
    family: 'Arial',
    src: '/fonts/ArialRegular.ttf',
});
Font.register({
    family: 'ArialBold',
    src: '/fonts/ArialBold.ttf',
});

const styles = StyleSheet.create({
    wrapper: {
        marginTop: '1mm',
        display: 'flex',
        flexDirection: 'row',
        height: '5mm',
    },
    cell_1: {
        width: '25mm',
        height: '100%',
        textAlign: 'left',
        // backgroundColor: "#00ff0030",
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cell_2: {
        width: '5mm',
        textAlign: 'center',
        paddingTop: '0.3mm',
        border: borderNormal,
    },
    cell_3: {
        width: '12mm',
        height: '100%',
        alignItems: 'center',
        // backgroundColor: "#00ff0030",
    },
    cell_4: { width: '5mm', height: '100%' },
    cell_5: { width: '10mm', height: '100%' },
    cell_6: {
        width: '5mm',
        textAlign: 'center',
        border: borderNormal,
        paddingTop: '0.3mm',
    },
    cell_7: {
        width: '35mm',
        height: '100%',
        justifyContent: 'center',
        // backgroundColor: "#00ff0030",
    },
    textFirstCol: {
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
        textAlign: 'center',
    },
    text: {
        fontFamily: 'Arial',
        fontSize: '3.25mm',
        textAlign: 'center',
    },
    emptyBox: {
        width: '100%',
        fontFamily: 'ArialBold',
        fontSize: '3.5mm',
        height: '100%',
    },
    emptyBoxGray: {
        width: '100%',
        border: borderNormal,
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
        backgroundColor: '#ccc',
        height: '100%',
    },
});

const Novertejums = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cell_1}>
                <Text style={styles.textFirstCol}>Novērtējums:</Text>
            </View>
            <View style={styles.cell_2}>
                <Text style={styles.emptyBox}>X</Text>
            </View>
            <View style={styles.cell_3}>
                {' '}
                <Text style={styles.text}>vai</Text>
            </View>
            <View style={styles.cell_4}>
                <Text style={styles.emptyBoxGray}></Text>
            </View>
            <View style={styles.cell_5}></View>
            <View style={styles.cell_6}>
                <Text style={styles.emptyBox}>O</Text>
            </View>
            <View style={styles.cell_7}>
                <Text style={styles.text}>- nav nepieciešams</Text>
            </View>
        </View>
    );
};

export default Novertejums;
