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
const gads = ['1', '9', '6', '4'];

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
        flexDirection: 'column',
        height: '8mm',
        width: '100%',
        // justifyContent: "space-between",
    },
    row_1: {
        display: 'flex',
        flexDirection: 'row',
        height: '50%',
    },
    row_2: {
        display: 'flex',
        flexDirection: 'row',
        height: '50%',
    },
    col_1: {
        width: '16mm',
    },
    col_2: {
        width: '17mm',
        paddingRight: '2mm',
        // backgroundColor: "green",
        textAlign: 'right',
        fontFamily: 'Arial',
        fontSize: '3.25mm',
        borderBottom: borders.borderNormal,
    },
    col_3: {
        width: '37mm',

        textAlign: 'left',

        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
        borderBottom: borders.borderNormal,
    },
    col_4: {
        width: '27mm',

        textAlign: 'left',

        fontFamily: 'Arial',
        fontSize: '3.25mm',
        borderBottom: borders.borderNormal,
    },
    col_5: {
        flex: 1,

        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
        borderBottom: borders.borderNormal,
        // backgroundColor: "tomato",
        alignItems: 'center',
    },
    numberCellWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderRight: borderNormal,
    },
    numberCell: {
        height: '100%',
        width: '5mm',
        alignItems: 'center',
        justifyContent: 'center',
        border: borderNormal,
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: 'none',
    },
    text: {
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
    },
    cellText: {
        fontFamily: 'ArialBold',
        fontSize: '3mm',
    },
});

const ZinasParLifu = ({ regNr, factoryNr }: { regNr: string; factoryNr: string }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.row_1}>
                <View style={styles.col_1}>
                    <Text style={styles.text}>Ziņas par</Text>
                </View>
                <View style={styles.col_2}>
                    <Text>Reģ. Nr.</Text>
                </View>
                <View style={styles.col_3}>
                    <Text>{regNr}</Text>
                </View>
                <View style={styles.col_4}>
                    <Text>Uzstādītājs:</Text>
                </View>
                <View style={styles.col_5}>
                    <Text>SIA Schindler Lifts</Text>
                </View>
            </View>
            <View style={styles.row_2}>
                <View style={styles.col_1}>
                    <Text style={styles.text}>liftu:</Text>
                </View>
                <View style={styles.col_2}>
                    <Text>Rūpn. Nr.</Text>
                </View>
                <View style={styles.col_3}>
                    <Text>{factoryNr}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        borderBottom: borders.borderNormal,
                        alignItems: 'flex-end',
                        paddingRight: '3mm',
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: '3mm',
                        }}
                    >
                        Uzstādīšanas gads
                    </Text>
                </View>
                <View
                    style={{
                        marginLeft: 'auto',
                        borderBottom: borders.borderNormal,
                    }}
                >
                    <View style={styles.numberCellWrapper}>
                        {gads.map((n, index) => (
                            <View style={styles.numberCell} key={index}>
                                <Text style={styles.cellText}>{n}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ZinasParLifu;
