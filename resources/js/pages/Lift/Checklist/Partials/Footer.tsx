import { View, Text, Image } from "@react-pdf/renderer";
import { borders, debug, sharedStyles, sizes } from "../variables";
import { Gap } from "../variables";

const Footer = ({ floorsServiced }: { floorsServiced: number }) => {
    const cellWidth =
        floorsServiced >= 16 ? 6.4 : floorsServiced >= 12 ? 8.5 : 10;
    const cellHeight = 5;
    const checkListWidthRaw = 135;
    const cellWidthMm = `${cellWidth}mm`;
    const cellHeightMm = "6mm";
    const restWidth = checkListWidthRaw - cellWidth * floorsServiced;
    const restWidthMm = `${restWidth}mm`;
    const headerBg = "#359";

    return (
        <View style={{ position: "absolute", bottom: "74mm" }}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: sizes.checkListWidth,
                    // height: cellHeight,
                    // borderBottom: borders.borderThin,
                    // backgroundColor: "coral",
                    alignItems: "center",
                }}
            >
                {[...Array(floorsServiced)].map((key, index) => (
                    <View
                        key={index}
                        style={{
                            width: cellWidthMm,
                            height: cellHeightMm,
                            border: borders.borderThin,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: headerBg,
                        }}
                    >
                        <Text
                            style={{
                                ...sharedStyles.textBold,
                                color: "#eee",
                                fontSize: "3mm",
                            }}
                        >
                            {index + 1}
                        </Text>
                    </View>
                ))}
                <View
                    style={{
                        width: restWidthMm,
                        height: cellHeightMm,
                        border: borders.borderThin,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: headerBg,
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            color: "#232323",
                            fontSize: "3mm",
                        }}
                    >
                        {/* Rest */}
                    </Text>
                </View>
            </View>
            {/* ####################################################################################### */}
            {/* 2nd line */}
            {/* ####################################################################################### */}
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: sizes.checkListWidth,
                    // height: cellHeight,
                    // borderBottom: borders.borderThin,
                    // backgroundColor: "coral",
                    alignItems: "center",
                }}
            >
                {[...Array(floorsServiced)].map((key, index) => (
                    <View
                        key={index}
                        style={{
                            width: cellWidthMm,
                            height: cellHeightMm,
                            border: borders.borderThin,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                // ...sharedStyles.textSansBold,
                                color: "#232323",
                                fontSize: "3mm",
                            }}
                        >
                            {/* {index + 1} */}
                        </Text>
                    </View>
                ))}
                <View
                    style={{
                        width: restWidthMm,
                        height: cellHeightMm,
                        border: borders.borderThin,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "skyblue",
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            color: "#232323",
                            fontSize: "3mm",
                        }}
                    >
                        Pogas
                    </Text>
                </View>
            </View>{" "}
            {/* ####################################################################################### */}
            {/* 3rd line */}
            {/* ####################################################################################### */}
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: sizes.checkListWidth,
                    // height: cellHeight,
                    // borderBottom: borders.borderThin,
                    // backgroundColor: "coral",
                    alignItems: "center",
                }}
            >
                {[...Array(floorsServiced)].map((key, index) => (
                    <View
                        key={index}
                        style={{
                            width: cellWidthMm,
                            height: cellHeightMm,
                            border: borders.borderThin,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                width: "5mm",
                                height: "5mm",
                                marginTop: 2,
                            }}
                            src="/assets/images/lrt.png"
                        />
                    </View>
                ))}
                <View
                    style={{
                        width: restWidthMm,
                        height: cellHeightMm,
                        border: borders.borderThin,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "skyblue",
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            color: "#232323",
                            fontSize: "3mm",
                        }}
                    >
                        &gt;10cm
                    </Text>
                </View>
            </View>
            {/* ####################################################################################### */}
            {/* 4th line */}
            {/* ####################################################################################### */}
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: sizes.checkListWidth,
                    // height: cellHeight,
                    // borderBottom: borders.borderThin,
                    // backgroundColor: "coral",
                    alignItems: "center",
                }}
            >
                {[...Array(floorsServiced)].map((key, index) => (
                    <View
                        key={index}
                        style={{
                            width: cellWidthMm,
                            height: cellHeightMm,
                            border: borders.borderThin,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                width: "5mm",
                                height: "5mm",
                                marginTop: 2,
                            }}
                            src="/assets/images/lrt.png"
                        />
                    </View>
                ))}
                <View
                    style={{
                        width: restWidthMm,
                        height: cellHeightMm,
                        border: borders.borderThin,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "skyblue",
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            color: "#232323",
                            fontSize: "3mm",
                        }}
                    >
                        Demont
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Footer;
