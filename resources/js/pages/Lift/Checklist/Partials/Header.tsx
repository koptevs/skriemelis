//@ts-nocheck
import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image, Rect, Svg, Polygon, Path } from '@react-pdf/renderer';

import { sizes, borders, debug } from '../variables';
import QrCode from './QrCode';

const { headerHeight, checkListWidth } = sizes;
const { borderNormal, borderThin, borderThick } = borders;

Font.register({
    family: 'Arial',
    src: '/fonts/ArialRegular.ttf',
});
Font.register({
    family: 'ArialBold',
    src: '/fonts/ArialBold.ttf',
});
Font.register({
    family: 'Georgia',
    src: '/fonts/Georgia.ttf',
});
Font.register({
    family: 'GeorgiaBold',
    src: '/fonts/GeorgiaBold.ttf',
});

const commonHeaderLineStyles = {
    height: `${20 / 3}mm`,
    alignItems: 'center',
    justifyContent: 'center',
};

const styles = StyleSheet.create({
    wrapper: {
        width: checkListWidth,
        display: 'flex',
        flexDirection: 'row',
        height: headerHeight,
        // marginBottom: "5mm",
        // border: "0.1mm solid black",
        // borderBottom: borderThick,
        // paddingBottom: "1mm",
        // backgroundColor: debug ? "#ff7e7e" : "transparent",
    },
    textBlockWrapper: {
        width: '115mm',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: debug ? "#777eee" : "transparent",
    },
    firstLine: {
        ...commonHeaderLineStyles,
        ...{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: borderThin,
        },
    },
    secondLine: {
        display: 'flex',
        flexDirection: 'row',
        height: `${20 / 3}mm`,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: borderThin,
    },
    thirdLine: {
        display: 'flex',
        flexDirection: 'row',
        height: `${20 / 3}mm`,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: borderThin,
    },
    firstLineText: {
        fontFamily: 'GeorgiaBold',
        fontSize: '5mm',
    },
    secondLineText: {
        fontFamily: 'ArialBold',
        fontSize: '4mm',
        // paddingBottom: "1mm",
    },
    thirdLineText: {
        fontFamily: 'GeorgiaBold',
        fontSize: '3.5mm',
        // paddingTop: "1mm",
        // paddingBottom: "0.5mm",
    },

    qrCode: {
        flexGrow: 1,
    },
    image: {
        width: '20mm',
        height: '20mm',
    },
    uzlime: {
        width: '30mm',
        height: `${20 / 3}mm`,
        // border: "2px solid rgba(255, 125, 125, 0.7)",
        borderBottom: '2px solid hsla(0 87% 50% / 0.48)',
        // marginBottom: "1mm",
    },
});

const Header = ({ latestProto, nextInspection, regNr, address, factoryNumber, speed, load, installationYear, floorsServiced, entryCode, birUrl }) => {
    return (
        <View
            style={{
                ...styles.wrapper,
                // backgroundColor: "tomato",
            }}
        >
            <View style={styles.textBlockWrapper}>
                <View style={styles.firstLine}>
                    <Text style={styles.firstLineText}>{regNr}</Text>

                    <View style={styles.uzlime}></View>
                    <Text style={styles.firstLineText}>{address}</Text>
                </View>
                <View style={styles.secondLine}>
                    <Text style={{ fontFamily: 'GeorgiaBold', fontSize: '3.5mm' }}>{nextInspection}</Text>
                    <Text style={{ ...styles.secondLineText, fontSize: '3mm' }}>
                        {installationYear} g. / {load}kg. / {speed} m/s / {floorsServiced} st.
                    </Text>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={{ fontFamily: 'GeorgiaBold', fontSize: '3.5mm' }}>{entryCode}</Text>
                    <Text style={styles.thirdLineText}>{latestProto}</Text>
                    <Text style={styles.thirdLineText}>{factoryNumber}</Text>
                </View>
            </View>
            <View style={styles.qrCode}>
                <QrCode url={birUrl ? birUrl : 'https://bir.lv'} />
            </View>
        </View>
    );
};

export default Header;
