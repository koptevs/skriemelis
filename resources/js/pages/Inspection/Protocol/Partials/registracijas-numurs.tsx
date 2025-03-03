import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

import { sizes, borders } from '../variables';

const { headerHeight } = sizes;
const { borderNormal } = borders;

const colOneWidth = '100mm';
const sectionHeight = '8.5mm';
const firstLineLeftPadding = '5mm';

const valditajs = 'SIA Rīgas namu pārvaldnieks';
const adrese = 'Aleksandra Čaka iela 42, Rīga, LV-1011';
const parbaudesAdrese = 'Zentenes iela 3-II, Rīga, LV-1069';
const regNumber = [4, 0, 1, 0, 3, 3, 6, 2, 3, 2, 1];

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
        flexDirection: 'row',
        height: '5mm',
        width: colOneWidth,
        justifyContent: 'space-between',
    },
    textCell: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: firstLineLeftPadding,
    },
    numberCellWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderRight: borderNormal,
    },
    numberCell: {
        height: '100%',
        width: '7mm',
        alignItems: 'center',
        justifyContent: 'center',
        border: borderNormal,
        borderTop: 'none',
        borderRight: 'none',
    },
    text: {
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
    },
});

const RegistracijasNumurs = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.textCell}>
                <Text style={styles.text}>Reģ. Nr.:</Text>
            </View>
            <View style={styles.numberCellWrapper}>
                {regNumber.map((n, index) => (
                    <View style={styles.numberCell} key={index}>
                        <Text style={styles.text}>{n}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default RegistracijasNumurs;
