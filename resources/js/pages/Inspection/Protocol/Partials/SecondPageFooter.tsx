import React from "react";
import dayjs from "dayjs";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

import { sizes, borders } from "../variables";

const {
    secondPageTableWidth,
    secondPageTableHalfWidth,
    secondPageTableQuarterWidth,
    secondPageTableRowHeight,
    secondPageTableRowHeightX2,
    protocolWidth,
} = sizes;
const { borderNormal } = borders;

Font.register({
    family: "Arial",
    src: "/fonts/ArialRegular.ttf",
});
Font.register({
    family: "ArialBold",
    src: "/fonts/ArialBold.ttf",
});

const styles = StyleSheet.create({
    textSans: {
        fontFamily: "Arial",
        fontSize: "3.25mm",
    },
    textSansBold: {
        fontFamily: "ArialBold",
        fontSize: "3.25mm",
    },
});

const SecondPageFooter = ({
    dateStart,
    dateEnd,
}: {
    dateStart: string;
    dateEnd: string;
}) => {
    return (
        <>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: "15mm",
                    // backgroundColor: "lime",
                }}
            >
                {" "}
                <Text
                    style={{
                        ...styles.textSansBold,
                    }}
                >
                    Slēdziens:
                </Text>
                <View
                    style={{
                        marginTop: "2mm",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            ...styles.textSans,
                        }}
                    >
                        Atbilstošo atzīmēt
                    </Text>
                    <Image
                        style={{
                            width: "5.5mm",
                            height: "5mm",
                            marginTop: -1.5,
                            marginRight: 2,
                            marginLeft: 7,
                        }}
                        src="/assets/images/checkbox.png"
                    />
                </View>
                <View
                    style={{
                        marginTop: "5mm",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <View style={{ width: "37mm" }}>
                        <Text
                            style={{
                                ...styles.textSans,
                            }}
                        >
                            Izolācijas pretestība
                        </Text>
                    </View>
                    <View style={{ width: "10mm" }}>
                        <Text
                            style={{
                                ...styles.textSansBold,
                            }}
                        >
                            atbilst
                        </Text>
                    </View>
                    <View style={{ width: "9mm" }}>
                        <Image
                            style={{
                                width: "5.5mm",
                                height: "5mm",
                                marginTop: -3,
                                marginRight: 2,
                                marginLeft: 5,
                            }}
                            src="/assets/images/checkbox.png"
                        />
                    </View>{" "}
                    <View
                        style={{
                            width: "16mm",
                            justifyContent: "center",
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textSans,
                            }}
                        >
                            neatbilst
                        </Text>
                    </View>
                    <View style={{ width: "10mm" }}>
                        <Image
                            style={{
                                width: "5.5mm",
                                height: "5mm",
                                marginTop: -3,
                                marginRight: 2,
                                marginLeft: 5,
                            }}
                            src="/assets/images/empty_checkbox.png"
                        />
                    </View>
                    <Text
                        style={{
                            ...styles.textSans,
                            marginLeft: "1mm",
                        }}
                    >
                        normai,
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: "3mm",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <View style={{ width: "37mm" }}>
                        <Text
                            style={{
                                ...styles.textSans,
                            }}
                        >
                            Zemējuma pretestība
                        </Text>
                    </View>
                    <View style={{ width: "10mm" }}>
                        <Text
                            style={{
                                ...styles.textSansBold,
                            }}
                        >
                            atbilst
                        </Text>
                    </View>
                    <View style={{ width: "9mm" }}>
                        <Image
                            style={{
                                width: "5.5mm",
                                height: "5mm",
                                marginTop: -3,
                                marginRight: 2,
                                marginLeft: 5,
                            }}
                            src="/assets/images/checkbox.png"
                        />
                    </View>{" "}
                    <View
                        style={{
                            width: "16mm",
                            justifyContent: "center",
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textSans,
                            }}
                        >
                            neatbilst
                        </Text>
                    </View>
                    <View style={{ width: "10mm" }}>
                        <Image
                            style={{
                                width: "5.5mm",
                                height: "5mm",
                                marginTop: -3,
                                marginRight: 2,
                                marginLeft: 5,
                            }}
                            src="/assets/images/empty_checkbox.png"
                        />
                    </View>
                    <Text
                        style={{
                            ...styles.textSans,
                            marginLeft: "1mm",
                        }}
                    >
                        normai,
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: "3mm",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <View style={{ width: "37mm" }}>
                        <Text
                            style={{
                                ...styles.textSans,
                            }}
                        >
                            Parejas pretestība
                        </Text>
                    </View>
                    <View style={{ width: "10mm" }}>
                        <Text
                            style={{
                                ...styles.textSansBold,
                            }}
                        >
                            atbilst
                        </Text>
                    </View>
                    <View style={{ width: "9mm" }}>
                        <Image
                            style={{
                                width: "5.5mm",
                                height: "5mm",
                                marginTop: -3,
                                marginRight: 2,
                                marginLeft: 5,
                            }}
                            src="/assets/images/checkbox.png"
                        />
                    </View>{" "}
                    <View
                        style={{
                            width: "16mm",
                            justifyContent: "center",
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textSans,
                            }}
                        >
                            neatbilst
                        </Text>
                    </View>
                    <View style={{ width: "10mm" }}>
                        <Image
                            style={{
                                width: "5.5mm",
                                height: "5mm",
                                marginTop: -3,
                                marginRight: 2,
                                marginLeft: 5,
                            }}
                            src="/assets/images/empty_checkbox.png"
                        />
                    </View>
                    <Text
                        style={{
                            ...styles.textSans,
                            marginLeft: "1mm",
                        }}
                    >
                        normai.
                    </Text>
                </View>
                <View
                    style={{
                        width: protocolWidth,
                        // backgroundColor: "tomato",
                        marginTop: "6mm",
                    }}
                >
                    <Text style={styles.textSansBold}>
                        Neatbilstību apraksti (papildus norādījumi ):
                    </Text>
                </View>
                <View
                    style={{
                        width: secondPageTableWidth,
                        borderBottom: borderNormal,
                        height: secondPageTableRowHeight,
                        // backgroundColor: "tomato",
                    }}
                ></View>
                <View
                    style={{
                        width: secondPageTableWidth,
                        borderBottom: borderNormal,
                        height: secondPageTableRowHeight,
                        // backgroundColor: "tomato",
                    }}
                ></View>
                <View
                    style={{
                        width: secondPageTableWidth,
                        borderBottom: borderNormal,
                        height: secondPageTableRowHeight,
                        // backgroundColor: "tomato",
                    }}
                ></View>
                <View
                    style={{
                        marginTop: "6mm",
                        width: protocolWidth,
                        display: "flex",
                        flexDirection: "row",
                        // backgroundColor: "tomato",
                    }}
                >
                    <View
                        style={{
                            width: "35mm",
                        }}
                    >
                        <Text style={styles.textSansBold}>Eksperts</Text>
                    </View>
                    <View
                        style={{
                            width: "35mm",
                            borderBottom: borderNormal,
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textSansBold,
                                marginTop: "-1mm",
                            }}
                        >
                            Igors Koptevs
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: "6mm",
                        width: protocolWidth,
                        display: "flex",
                        flexDirection: "row",
                        // backgroundColor: "tomato",
                    }}
                >
                    <View
                        style={{
                            width: "35mm",
                        }}
                    >
                        <Text style={styles.textSansBold}>
                            Pārbaudes datums
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "35mm",
                            borderBottom: borderNormal,
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textSansBold,
                                marginTop: "-1mm",
                            }}
                        >
                            {dayjs(dateStart).diff(dayjs(dateEnd)) === 0
                                ? dayjs(dateStart).format("DD.MM.YYYY")
                                : `${dayjs(dateStart).format("DD")} - ${dayjs(dateEnd).format("DD.MM.YYYY")}`}
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    width: protocolWidth,
                    position: "absolute",
                    bottom: "10mm",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        ...styles.textSans,
                        marginTop: "-1mm",
                    }}
                >
                    Protokols parakstīts ar drošu elektronisko parakstu un satur
                    laika zīmogu.
                </Text>
            </View>
        </>
    );
};

export default SecondPageFooter;
