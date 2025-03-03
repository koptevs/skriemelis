import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { sizes, borders } from '../../variables';
import ColumnHeader from './column-header';
import ColumnString from './column-string';

const { headerHeight } = sizes;
const { borderNormal } = borders;
const spacerWidth = '10mm';

const v_0 = [''];
const v_1 = ['', '1.1', '3.3', '5.2', '5.4'];
const v_2 = ['', '1.2', '3.2', '7.1'];
const v_3 = ['', '1.3', '3.1'];

const val_1_1 = v_3.includes('1.1') ? 3 : v_2.includes('1.1') ? 2 : v_1.includes('1.1') ? 1 : 0;
const val_1_2 = v_3.includes('1.2') ? 3 : v_2.includes('1.2') ? 2 : v_1.includes('1.2') ? 1 : 0;
const val_1_3 = v_3.includes('1.3') ? 3 : v_2.includes('1.3') ? 2 : v_1.includes('1.3') ? 1 : 0;
const val_1_4 = v_3.includes('1.4') ? 3 : v_2.includes('1.4') ? 2 : v_1.includes('1.4') ? 1 : 0;

const val_2_1 = v_3.includes('2.1') ? 3 : v_2.includes('2.1') ? 2 : v_1.includes('2.1') ? 1 : 0;
const val_2_2 = v_3.includes('2.2') ? 3 : v_2.includes('2.2') ? 2 : v_1.includes('2.2') ? 1 : 0;

const val_3_1 = v_3.includes('3.1') ? 3 : v_2.includes('3.1') ? 2 : v_1.includes('3.1') ? 1 : 0;
const val_3_2 = v_3.includes('3.2') ? 3 : v_2.includes('3.2') ? 2 : v_1.includes('3.2') ? 1 : 0;
const val_3_3 = v_3.includes('3.3') ? 3 : v_2.includes('3.3') ? 2 : v_1.includes('3.3') ? 1 : 0;
const val_3_4 = v_3.includes('3.4') ? 3 : v_2.includes('3.4') ? 2 : v_1.includes('3.4') ? 1 : 0;
const val_3_5 = v_3.includes('3.5') ? 3 : v_2.includes('3.5') ? 2 : v_1.includes('3.5') ? 1 : 0;
const val_3_6 = v_3.includes('3.6') ? 3 : v_2.includes('3.6') ? 2 : v_1.includes('3.6') ? 1 : 0;
const val_3_7 = v_3.includes('3.7') ? 3 : v_2.includes('3.7') ? 2 : v_1.includes('3.7') ? 1 : 0;
const val_3_8 = v_3.includes('3.8') ? 3 : v_2.includes('3.8') ? 2 : v_1.includes('3.8') ? 1 : 0;
const val_3_9 = v_3.includes('3.9') ? 3 : v_2.includes('3.9') ? 2 : v_1.includes('3.9') ? 1 : 0;

const val_4_1 = v_3.includes('4.1') ? 3 : v_2.includes('4.1') ? 2 : v_1.includes('4.1') ? 1 : 0;
const val_4_2 = v_3.includes('4.2') ? 3 : v_2.includes('4.2') ? 2 : v_1.includes('4.2') ? 1 : 0;
const val_4_3 = v_3.includes('4.3') ? 3 : v_2.includes('4.3') ? 2 : v_1.includes('4.3') ? 1 : 0;

const val_5_1 = v_3.includes('5.1') ? 3 : v_2.includes('5.1') ? 2 : v_1.includes('5.1') ? 1 : 0;
const val_5_2 = v_3.includes('5.2') ? 3 : v_2.includes('5.2') ? 2 : v_1.includes('5.2') ? 1 : 0;
const val_5_3 = v_3.includes('5.3') ? 3 : v_2.includes('5.3') ? 2 : v_1.includes('5.3') ? 1 : 0;
const val_5_4 = v_3.includes('5.4') ? 3 : v_2.includes('5.4') ? 2 : v_1.includes('5.4') ? 1 : 0;
const val_5_5 = v_3.includes('5.5') ? 3 : v_2.includes('5.5') ? 2 : v_1.includes('5.5') ? 1 : 0;

const val_6_1 = v_3.includes('6.1') ? 3 : v_2.includes('6.1') ? 2 : v_1.includes('6.1') ? 1 : 0;
const val_6_2 = v_3.includes('6.2') ? 3 : v_2.includes('6.2') ? 2 : v_1.includes('6.2') ? 1 : 0;

const val_7_1 = v_3.includes('7.1') ? 3 : v_2.includes('7.1') ? 2 : v_1.includes('7.1') ? 1 : 0;
const val_7_2 = v_3.includes('7.2') ? 3 : v_2.includes('7.2') ? 2 : v_1.includes('7.2') ? 1 : 0;

const val_8 = v_3.includes('8') ? 3 : v_2.includes('8') ? 2 : v_1.includes('8') ? 1 : 0;
const val_9 = v_3.includes('9') ? 3 : v_2.includes('9') ? 2 : v_1.includes('9') ? 1 : 0;

Font.register({
    family: 'Arial',
    src: '/fonts/ArialRegular.ttf',
});
Font.register({
    family: 'ArialBold',
    src: '/fonts/ArialBold.ttf',
});

const styles = StyleSheet.create({
    sectionHeader: { fontFamily: 'ArialBold', fontSize: '3.25mm' },
    wrapper: {
        // backgroundColor: "#00ff0030",
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        // flexGrow: 1,
        width: '(100%-{spacerWidth})/2',
        display: 'flex',
        flexDirection: 'column',
    },
    columnHeader: {
        fontFamily: 'Arial',
        fontSize: '3.25mm',
    },
    spacer: {
        width: spacerWidth,
    },
});
const col1 = [
    {
        row: 1,
        type: 'header',
        withNums: true,
        title: '1. Visparīgi',
        value: 0,
    },
    {
        row: 2,
        type: 'string',
        withNums: true,
        title: '1.1 Lifta atbilstības deklarācija',
        value: val_1_1,
    },
    {
        row: 3,
        type: 'string',
        withNums: true,
        title: '1.2 Lifta atbilstības sertifikāts*',
        value: val_1_2,
    },
    {
        row: 4,
        type: 'string',
        withNums: true,
        title: '1.3 Lifta lietošanas dokumentācija',
        value: val_1_3,
    },
    {
        row: 5,
        type: 'string',
        withNums: true,
        title: '1.4 Brīdinājumi, apzimējumi un informācija par lifta lietošanu',
        value: val_1_4,
    },
    {
        row: 6,
        type: 'header',
        withNums: false,
        title: '2. Troses, ķēdes, to stīprinājumi',
        value: 0,
    },
    {
        row: 7,
        type: 'string',
        withNums: true,
        title: '2.1 Trošu, siksnu nostiepuma kontrole',
        value: val_2_1,
    },
    {
        row: 8,
        type: 'string',
        withNums: true,
        title: '2.2 Lifta piekāre un tās elementi',
        value: val_2_2,
    },
    {
        row: 9,
        type: 'header',
        withNums: false,
        title: '3. Mašīntelpa un elektriskā iekārta',
        value: 0,
    },
    {
        row: 10,
        type: 'string',
        withNums: true,
        title: '3.1 Mašīntelpa un trīšu telpas',
        value: val_3_1,
    },
    {
        row: 11,
        type: 'string',
        withNums: true,
        title: '3.2 Ātruma ierobežotājs un ķērājierīce elektriskajiem liftiem',
        value: val_3_2,
    },
    {
        row: 12,
        type: 'string',
        withNums: true,
        title: '3.3 Augšupejošas kabīnes ātruma ierobežošanas ierīce',
        value: val_3_3,
    },
    {
        row: 13,
        type: 'string',
        withNums: true,
        title: '3.4 Vadības ierīces',
        value: val_3_4,
    },
    {
        row: 14,
        type: 'string',
        withNums: true,
        title: '3.5 Gala slēdži',
        value: val_3_5,
    },
    {
        row: 15,
        type: 'string',
        withNums: true,
        title: '3.6 Lifta mašīna',
        value: val_3_6,
    },
    {
        row: 16,
        type: 'string',
        withNums: true,
        title: '3.7 Trauksmes ierīce ārkārtas gadījumos',
        value: val_3_7,
    },
    {
        row: 17,
        type: 'string',
        withNums: true,
        title: '3.8 Darbināšana ārkārtas gadījumos',
        value: val_3_8,
    },
    {
        row: 18,
        type: 'string',
        withNums: true,
        title: '3.9 Lifta apstadināšanas ierīces',
        value: val_3_9,
    },
];
const col2 = [
    { row: 1, type: 'header', withNums: true, title: '4. Kabīne', value: 0 },
    {
        row: 2,
        type: 'string',
        withNums: true,
        title: '4.1 Lifta kabīne',
        value: val_4_1,
    },
    {
        row: 3,
        type: 'string',
        withNums: true,
        title: '4.2 Celtspējas kontroles ierīce',
        value: val_4_2,
    },
    {
        row: 4,
        type: 'string',
        withNums: true,
        title: '4.3 Lifta kabīnes līmeņošanas un apstāšanas precizitāte',
        value: val_4_3,
    },
    {
        row: 5,
        type: 'header',
        withNums: false,
        title: '5. Šahta',
        value: 0,
    },
    {
        row: 6,
        type: 'string',
        withNums: true,
        title: '5.1 Šahtas atbilstība',
        value: val_5_1,
    },
    {
        row: 7,
        type: 'string',
        withNums: true,
        title: '5.2 Šahtas nožogojumi',
        value: val_5_2,
    },
    {
        row: 8,
        type: 'string',
        withNums: true,
        title: '5.3 Vadotnes un metālkonstrukcija',
        value: val_5_3,
    },
    {
        row: 9,
        type: 'string',
        withNums: true,
        title: '5.4 Lifta buferi',
        value: val_5_4,
    },
    {
        row: 10,
        type: 'string',
        withNums: true,
        title: '5.5 Pretsvars un kabīnes jumts',
        value: val_5_5,
    },
    {
        row: 11,
        type: 'header',
        withNums: false,
        title: '6. Hidrauliskās iekārtas',
        value: 0,
    },
    {
        row: 12,
        type: 'string',
        withNums: true,
        title: '6.1 Hidraulisko liftu drošības ierīces',
        value: val_6_1,
    },
    {
        row: 13,
        type: 'string',
        withNums: true,
        title: '6.2 Lifta hidrauliskās sistēmas cauruļvadi',
        value: val_6_2,
    },
    {
        row: 14,
        type: 'header',
        withNums: false,
        title: '7. Šahtas durvis',
        value: 0,
    },
    {
        row: 15,
        type: 'string',
        withNums: true,
        title: '7.1 Šahtas un kabīnes durvis',
        value: val_7_1,
    },
    {
        row: 16,
        type: 'string',
        withNums: true,
        title: '7.2 Durvju slēgšanas un drošības ierīces',
        value: val_7_2,
    },
    {
        row: 17,
        type: 'string',
        withNums: true,
        title: '8. Apgaismojumi',
        value: val_8,
    },
    {
        row: 18,
        type: 'string',
        withNums: true,
        title: '9. Elektriskās iekārtas un ietaises',
        value: val_9,
    },
];

const ParbaudesRezultati = () => {
    return (
        <View style={{ marginTop: '2mm' }}>
            <Text style={styles.sectionHeader}>Pārbaudes rezultāti</Text>
            <View style={styles.wrapper}>
                <View style={styles.column}>
                    {col1.map((row, index) =>
                        row.type === 'header' ? (
                            <ColumnHeader title={row.title} withNums={row.withNums} />
                        ) : (
                            <ColumnString title={row.title} value={row.value} />
                        ),
                    )}
                </View>
                <View style={styles.spacer}></View>
                <View style={styles.column}>
                    {col2.map((row, index) =>
                        row.type === 'header' ? (
                            <ColumnHeader title={row.title} withNums={row.withNums} />
                        ) : (
                            <ColumnString title={row.title} value={row.value} />
                        ),
                    )}
                </View>
            </View>
        </View>
    );
};

export default ParbaudesRezultati;
