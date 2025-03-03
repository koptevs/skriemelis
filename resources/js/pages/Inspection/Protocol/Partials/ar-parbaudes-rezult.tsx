import React from 'react';
import dayjs from 'dayjs';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { sizes, borders } from '../variables';
const withArRezultatiemIepazinos = true;
// const withArRezultatiemIepazinos = false;
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
    textSans: {
        fontFamily: 'Arial',
        fontSize: '3.25mm',
        textAlign: 'center',
    },
    textSansBold: {
        fontFamily: 'ArialBold',
        fontSize: '3.5mm',
    },
});

const ArParbaudesRezult = ({ dateStart, dateEnd }: { dateStart: string; dateEnd: string }) => {
    return (
        <>
            <View style={{ ...styles.wrapper, marginTop: '3mm' }}>
                <View
                    style={{
                        width: '112mm',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '5mm',
                        // backgroundColor: "tomato",
                    }}
                >
                    {withArRezultatiemIepazinos ? (
                        <>
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    fontSize: '3.2mm',
                                }}
                            >
                                Ar pārbaudes rezultātiem iepazinos:
                            </Text>
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    fontSize: '3.2mm',
                                    marginLeft: '3mm',
                                }}
                            >
                                SIA "Rīgas namu pārvaldnieks"
                            </Text>
                        </>
                    ) : null}
                </View>
                <View
                    style={{
                        width: '33mm',
                        height: '100%',
                        textAlign: 'right',
                    }}
                >
                    <Text style={styles.textSansBold}>Pārbaudes datums</Text>
                </View>
                <View
                    style={{
                        width: '32mm',
                        height: '100%',
                        borderBottom: borderNormal,
                        marginLeft: '3mm',
                        textAlign: 'center',
                    }}
                >
                    <Text style={styles.textSansBold}>
                        {dayjs(dateStart).diff(dayjs(dateEnd)) === 0
                            ? dayjs(dateStart).format('DD.MM.YYYY')
                            : `${dayjs(dateStart).format('DD')} - ${dayjs(dateEnd).format('DD.MM.YYYY')}`}
                    </Text>
                </View>
            </View>
            <View style={{ ...styles.wrapper }}>
                <View
                    style={{
                        width: '125mm',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '4mm',
                        // backgroundColor: "tomato",
                    }}
                >
                    {withArRezultatiemIepazinos ? (
                        <>
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    fontSize: '3.2mm',
                                }}
                            >
                                Inženiertehniskās nodaļas elektrosistēmu daļas elektrotehniķis
                            </Text>{' '}
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    fontSize: '3.2mm',
                                    marginLeft: '3mm',
                                }}
                            >
                                Vitālijs Kopa
                            </Text>
                        </>
                    ) : null}
                </View>
            </View>
        </>
    );
};

export default ArParbaudesRezult;
