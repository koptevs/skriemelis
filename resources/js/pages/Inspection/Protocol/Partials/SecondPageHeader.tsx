import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

import { sizes, borders } from '../variables';

const { secondPageTableWidth, secondPageTableHalfWidth, secondPageTableQuarterWidth, secondPageTableRowHeight, secondPageTableRowHeightX2 } = sizes;
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
    textSans: {
        fontFamily: 'Arial',
        fontSize: '3.25mm',
    },
    textSansBold: {
        fontFamily: 'ArialBold',
        fontSize: '3.25mm',
    },
});

const SecondPageHeader = ({ protocolNumber }: { protocolNumber: string }) => {
    return (
        <>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10mm',
                    marginBottom: '5mm',
                    // backgroundColor: "lime",
                }}
            >
                {' '}
                <Text
                    style={{
                        ...styles.textSansBold,
                    }}
                >
                    Lifta elektromērījumi:
                </Text>
                <Text
                    style={{
                        ...styles.textSans,
                        marginTop: '1.2mm',
                    }}
                >
                    Pielikums pārbaudes protokolam Nr. {protocolNumber}
                </Text>
            </View>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // backgroundColor: "lime",
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: secondPageTableWidth,
                        border: borderNormal,
                        // backgroundColor: "red",
                    }}
                >
                    {/* Table Header First Column */}
                    <View
                        style={{
                            width: secondPageTableHalfWidth,
                            // border: borderNormal,
                            // backgroundColor: "skyblue",
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: secondPageTableHalfWidth,
                                // height: secondPageTableRowHeightX2,
                                // border: borderNormal,
                                // backgroundColor: "#aaa",
                            }}
                        >
                            <View
                                style={{
                                    height: secondPageTableRowHeightX2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRight: borderNormal,
                                    // backgroundColor: "tomato",
                                    width: secondPageTableQuarterWidth,
                                }}
                            >
                                <Text style={styles.textSansBold}>Mēriekārta</Text>
                            </View>
                            <View
                                style={{
                                    // height: secondPageTableRowHeightX2,
                                    // border: borderNormal,
                                    // backgroundColor: "green",
                                    width: secondPageTableQuarterWidth,
                                }}
                            >
                                <View
                                    style={{
                                        height: secondPageTableRowHeight,
                                        borderRight: borderNormal,
                                        // backgroundColor: "teal",
                                        width: secondPageTableQuarterWidth,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.textSansBold,
                                            marginLeft: '3mm',
                                        }}
                                    >
                                        Nosaukums:
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: secondPageTableRowHeight,
                                        justifyContent: 'center',
                                        borderTop: borderNormal,
                                        borderRight: borderNormal,
                                        // backgroundColor: "brown",
                                        width: secondPageTableQuarterWidth,
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.textSansBold,
                                            marginLeft: '3mm',
                                        }}
                                    >
                                        Ident. Nr.
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "blue",
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                Mērījumu metodika:
                            </Text>
                        </View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // backgroundColor: "green",
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                Normatīvs
                            </Text>
                        </View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // backgroundColor: "yellow",
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                Vizuālā apskate
                            </Text>
                        </View>
                    </View>
                    {/* Table Header Second Column */}
                    <View
                        style={{
                            width: secondPageTableHalfWidth,
                            // height: "50mm",
                            // border: borderNormal,
                            // backgroundColor: "skyblue",
                        }}
                    >
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // border: borderNormal,
                                // backgroundColor: "red",
                                // borderTop: borderNormal,
                                borderRight: borderNormal,
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                ProInstall 200
                            </Text>
                        </View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // backgroundColor: "blue",
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                309482
                            </Text>
                        </View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // backgroundColor: "green",
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                LRTDEA Nr. 08.43 / 016
                            </Text>
                        </View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // backgroundColor: "yellow",
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                            }}
                        ></View>
                        <View
                            style={{
                                width: secondPageTableHalfWidth,
                                height: secondPageTableRowHeight,
                                // backgroundColor: "coral",
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                            }}
                        ></View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default SecondPageHeader;
