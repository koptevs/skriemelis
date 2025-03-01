import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

import { sizes, borders, colors } from '../variables';

const {
    secondPageTableWidth,
    secondPageTableHalfWidth,
    secondPageTableQuarterWidth,
    secondPageTableRowHeight,
    secondPageTableRowHeightX2,
    secondPageTableRowHeightX5,
    secondPageTableRowHeightX6,
    secondPageTable2Col1Width,
    secondPageTable2Col2Width,
    secondPageTable2ColRestWidth,
    secondPageTable2ColRestHalfWidth,
} = sizes;
const { borderNormal } = borders;
const { page2CellBackground } = colors;

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

const SecondPageTable = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: secondPageTableRowHeight,
                // backgroundColor: "lime",
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: secondPageTableWidth,
                    borderTop: borderNormal,
                    borderBottom: borderNormal,
                    borderLeft: borderNormal,
                    // backgroundColor: "tomato",
                }}
            >
                {/* Row 1 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>Nr.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Merījumu vieta
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Izolācijas
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Zemējuma
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Pārejas
                        </Text>
                    </View>
                </View>
                {/* Row 1 End*/}
                {/* Row 2 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            ( līnijas vai iekārtas nosaukums )
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            pretestība, MΩ
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            pretestība, Ω
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            pretestība, Ω
                        </Text>
                    </View>
                </View>
                {/* Row 2 End*/}
                {/* Row 3 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>{' '}
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            ( Pārbaudes
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>
                </View>
                {/* Row 3 End*/}
                {/* Row 4 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>{' '}
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            spriegums
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>
                </View>
                {/* Row 4 End*/}
                {/* Row 5 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>{' '}
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            500V )
                        </Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2ColRestWidth,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>
                </View>
                {/* Row 5 End*/}
                {/* Row 6 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                ≥ 1,0
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                &lt; 1,0
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                ≤ 4,0
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                &gt; 4,0
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                ≤ 0,1
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            >
                                &gt; 1,0
                            </Text>
                        </View>
                    </View>
                </View>
                {/* Row 6 End*/}
                {/* Row 7 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>1.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Barojošais kabelis
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 7 End*/}
                {/* Row 8 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>2.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Lifta elektrodzinējs
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 8 End*/}
                {/* Row 9 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>3.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Elektreomagnētiskās bremzes
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 9 End*/}
                {/* Row 10 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>4.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Pazeminošais transformators
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 10 End*/}
                {/* Row 11 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>5.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Kabīnes durvju elektrodzinējs
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 11 End*/}
                {/* Row 12 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>6.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Galaslēdžu kabelis
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 12 End*/}
                {/* Row 13 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>7.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Apgaismojuma ķēde
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 13 End*/}
                {/* Row 14 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}>8.</Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        >
                            Metālkonstrukcijas
                        </Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            >
                                X
                            </Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 14 End*/}
                {/* Row 15 Start*/}
                <View
                    style={{
                        width: secondPageTableWidth,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col1Width,
                        }}
                    >
                        <Text style={{ ...styles.textSans }}></Text>
                    </View>
                    <View
                        style={{
                            height: secondPageTableRowHeight,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderTop: borderNormal,
                            borderRight: borderNormal,
                            // backgroundColor: "tomato",
                            width: secondPageTable2Col2Width,
                        }}
                    >
                        <Text
                            wrap={true}
                            style={{
                                ...styles.textSans,
                                marginLeft: '3mm',
                            }}
                        ></Text>
                    </View>{' '}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSansBold,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: "tomato",
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                    // backgroundColor: page2CellBackground,
                                }}
                            ></Text>
                        </View>
                        <View
                            style={{
                                height: secondPageTableRowHeight,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderTop: borderNormal,
                                borderRight: borderNormal,
                                // backgroundColor: page2CellBackground,
                                width: secondPageTable2ColRestHalfWidth,
                            }}
                        >
                            <Text
                                wrap={true}
                                style={{
                                    ...styles.textSans,
                                    marginLeft: '3mm',
                                }}
                            ></Text>
                        </View>
                    </View>
                </View>
                {/* Row 15 End*/}
            </View>
        </View>
    );
};

export default SecondPageTable;
