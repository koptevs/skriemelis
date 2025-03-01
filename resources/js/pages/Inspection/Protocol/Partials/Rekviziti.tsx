import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

import { sizes, borders } from '../variables';

const { headerHeight } = sizes;
const { borderNormal } = borders;

const colOneWidth = '100mm';
const sectionHeight = '8.5mm';
const valditajs = 'SIA Rīgas namu pārvaldnieks';
const adrese = 'Aleksandra Čaka iela 42, Rīga, LV-1011';
const parbaudesAdrese = 'Zentenes iels 3-II, Rīga, LV-1069';
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
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    sectionValditajs: {
        width: colOneWidth,
        height: sectionHeight,
        // backgroundColor: "tomato",
        border: borderNormal,
        borderBottom: 'none',
    },
    sectionValditajsInnerRowOne: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: firstLineLeftPadding,
    },
    sectionValditajsInnerRowTwo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionAdrese: {
        width: colOneWidth,
        height: sectionHeight,
        border: borderNormal,
    },
    sectionAdreseInnerRowOne: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: firstLineLeftPadding,
    },
    sectionAdreseInnerRowTwo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionLigumaNr: {
        width: '85mm',
        // flexGrow: 1,
        height: sectionHeight,
        display: 'flex',
        flexDirection: 'row',
    },
    sectionLigumaNrInnerColOne: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: firstLineLeftPadding,
    },
    sectionLigumaNrInnerColTwo: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "blue",
    },
    sectionLigumaNrInnerColTwoRowOne: {
        // backgroundColor: "red",
        borderBottom: borderNormal,
        alignItems: 'center',
        width: '100%',
    },
    sectionLigumaNrInnerColTwoRowTwo: {
        width: '100%',
        alignItems: 'center',
    },

    sectionLigumaNrInnerColThree: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionParbaudesAdrese: {
        // width: "80mm",
        flexGrow: 1,
        height: sectionHeight,
        border: borderNormal,
        borderLeft: 'none',
    },
    sectionParbaudesAdreseInnerRowOne: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: firstLineLeftPadding,
    },
    sectionParbaudesAdreseInnerRowTwo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
    },
    image: {
        width: '20mm',
        height: '14mm',
        position: 'absolute',
        left: 8,
        top: -20,
    },
});

const Rekviziti = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.sectionValditajs}>
                <View style={styles.sectionValditajsInnerRowOne}>
                    <Text style={styles.text}>Valdītājs:</Text>
                </View>
                <View style={styles.sectionValditajsInnerRowTwo}>
                    <Text style={styles.text}>"{valditajs}"</Text>
                </View>
            </View>
            <View style={styles.sectionLigumaNr}>
                <View style={styles.sectionLigumaNrInnerColOne}>
                    <Text style={styles.text}>Līguma Nr.</Text>
                </View>
                <View style={styles.sectionLigumaNrInnerColTwo}>
                    <View style={styles.sectionLigumaNrInnerColTwoRowOne}>
                        <Text style={styles.text}>Nr. 223322.</Text>
                    </View>
                    <View style={styles.sectionLigumaNrInnerColTwoRowTwo}>
                        <Text style={styles.text}>#223322.</Text>
                    </View>
                </View>
                <View style={styles.sectionLigumaNrInnerColThree}>
                    {/* EMPTY */}
                    <Image style={styles.image} src="/assets/images/latak_logo.jpg" />
                </View>
            </View>
            <View style={styles.sectionAdrese}>
                <View style={styles.sectionAdreseInnerRowOne}>
                    <Text style={styles.text}>Adrese:</Text>
                </View>
                <View style={styles.sectionAdreseInnerRowTwo}>
                    <Text style={styles.text}>{adrese}</Text>
                </View>
            </View>
            <View style={styles.sectionParbaudesAdrese}>
                <View style={styles.sectionParbaudesAdreseInnerRowOne}>
                    <Text style={styles.text}>Pārbaudes adrese</Text>
                </View>
                <View style={styles.sectionParbaudesAdreseInnerRowTwo}>
                    <Text style={styles.text}>{parbaudesAdrese}</Text>
                </View>
            </View>
        </View>
    );
};

export default Rekviziti;
