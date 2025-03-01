//@ts-nocheck
import { StyleSheet, Font, View } from '@react-pdf/renderer';

const fullWidth = 135;
const gap = 2;
const col = 5;
export const rowHeight = '7mm';
export const debug = true;

Font.register({
    family: 'Arial',
    src: '/fonts/ArialRegular.ttf',
});
Font.register({
    family: 'ArialBold',
    src: '/fonts/ArialBold.ttf',
});

export const sizes = {
    checkListWidth: '135mm',
    checkListPaddingX: '4mm',
    zazhimHeight: '25mm',
    headerHeight: '20mm',
    col_1: `${col}mm`,
    col_2: `${col * 2 + gap}mm`,
    col_3: `${col * 3 + gap * 2}mm`,
    col_4: `${col * 4 + gap * 3}mm`,
    col_5: `${col * 5 + gap * 4}mm`,
    col_6: `${col * 6 + gap * 5}mm`,
    col_7: `${col * 7 + gap * 6}mm`,
    col_8: `${col * 8 + gap * 7}mm`,
    col_9: `${col * 9 + gap * 8}mm`,
    col_10: `${col * 10 + gap * 9}mm`,
    col_11: `${col * 11 + gap * 10}mm`,
    w_full: `${fullWidth}mm`,
};
export const borders = {
    borderThin: '0.1mm solid black',
    borderNormal: '0.2mm solid black',
    borderThick: '0.3mm solid black',
};

export const sharedStyles = StyleSheet.create({
    gap: {
        width: '2mm',
        height: rowHeight,
        // backgroundColor: "red",
    },
    box: {
        width: '4.5mm',
        height: '4.5mm',
        border: borders.borderThick,
        // marginHorizontal: "1mm",
        // backgroundColor: "red",
    },
    box2x: {
        width: '9mm',
        height: '4.5mm',
        border: borders.borderThick,
        marginHorizontal: '1mm',
        marginTop: '0.3mm',
        // backgroundColor: "red",
    },
    comboBox: {
        width: '6mm',
        height: '5mm',
        border: borders.borderThick,
        marginTop: '1mm',
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "red",
    },
    comboBox2x: {
        width: '9mm',
        height: '5mm',
        border: borders.borderThick,
        borderLeft: 'none',
        borderRight: 'none',
        marginTop: '1mm',
        // backgroundColor: "red",
    },
    lineWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.checkListWidth,
        height: rowHeight,
        borderBottom: borders.borderThin,
        alignItems: 'center',
    },
    textSans: {
        fontFamily: 'Arial',
        fontSize: '3mm',
        marginHorizontal: '1mm',
    },
    textSansBold: {
        fontFamily: 'ArialBold',
        fontSize: '3mm',
        marginHorizontal: '1mm',
        marginTop: '0.7mm',
    },
    text: {
        fontFamily: 'Georgia',
        fontSize: '3mm',
        marginHorizontal: '1mm',
    },
    textBold: {
        fontFamily: 'GeorgiaBold',
        fontSize: '3mm',
        marginHorizontal: '1mm',
    },
    col_1: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_1,
    },
    col_2: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_2,
    },
    col_3: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_3,
    },
    col_4: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_4,
    },
    col_5: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_5,
    },
    col_6: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_6,
    },
    col_7: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_7,
    },
    col_8: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_8,
    },
    col_9: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_9,
    },
    col_10: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_10,
    },
    col_11: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_11,
    },
    col_12: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_12,
    },
    col_13: {
        display: 'flex',
        flexDirection: 'row',
        width: sizes.col_13,
    },
    image: {
        width: '5mm',
        height: '5mm',
        marginTop: -1.5,
        marginRight: 2,
    },
});
export const Gap = ({ size = 2 }) => {
    if (size === 2) {
        return <View style={sharedStyles.gap}></View>;
    } else {
        return <View style={{ ...sharedStyles.gap, width: `${size}mm` }}></View>;
    }
};
