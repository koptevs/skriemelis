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
        // backgroundColor: "#00ff0030",
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1mm',
    },
    firstCell: {
        // backgroundColor: "#ff000030",
        width: '30mm',
        // border: borderNormal,
        alignItems: 'flex-start',
    },
    cell: {
        // backgroundColor: "#ff000030",
        flexGrow: 1,
        // border: borderNormal,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '15mm',
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
        width: '5mm',
        border: borderNormal,
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
        textAlign: 'center',
    },
});

const ParbaudesVeids = ({ inspectionType }: { inspectionType: string }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.firstCell}>
                <Text style={styles.textFirstCol}>Pārbaudes veids</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>Pirmreizējā*</Text>
                <Text style={styles.emptyBox}>{inspectionType === 'Pirmreizējā' ? 'x' : null}</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>Kārtējā</Text>
                <Text style={styles.emptyBox}>{inspectionType === 'Kārtējā' ? 'x' : null}</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>Ārpuskārtas</Text>
                <Text style={styles.emptyBox}>{inspectionType === 'Ārpuskārtas' ? 'x' : null}</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.text}>Atkārtotā</Text>
                <Text style={styles.emptyBox}>{inspectionType === 'Atkārtotā' ? 'x' : null}</Text>
            </View>
        </View>
    );
};

export default ParbaudesVeids;
