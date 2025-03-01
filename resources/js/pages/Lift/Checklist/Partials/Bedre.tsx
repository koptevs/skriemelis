import { View, Text, Image } from "@react-pdf/renderer";
import { debug, sharedStyles } from "../variables";
import { Gap } from "../variables";
const Bedre = () => {
    return (
        <View style={sharedStyles.lineWrapper}>
            <View
                style={{
                    ...sharedStyles.col_3,
                    // backgroundColor: "lime",
                }}
            >
                <Text style={sharedStyles.textSansBold}>В2</Text>
                <View style={sharedStyles.box}></View>
                <Text style={{ ...sharedStyles.textSansBold, color: "red" }}>
                    S
                </Text>
            </View>
            <Gap />
            <View
                style={{
                    ...sharedStyles.col_2,
                    // backgroundColor: "tomato",
                }}
            >
                <Image
                    style={sharedStyles.image}
                    src="/assets/images/nostiepejs.png"
                />

                <View style={sharedStyles.box}></View>
            </View>
            <Gap />
            <View
                style={{
                    ...sharedStyles.col_3,
                    // backgroundColor: "lime",
                }}
            >
                <Text style={sharedStyles.textSansBold}>ВНУ</Text>
                <View style={sharedStyles.box}></View>
            </View>
            <Gap />
            <View style={sharedStyles.col_1}>
                <Image
                    style={{ ...sharedStyles.image, marginLeft: 0 }}
                    src="/assets/images/trepes2.png"
                />
            </View>
            <Gap />
            <View style={sharedStyles.col_1}>
                <View style={sharedStyles.box}></View>
            </View>
            <Gap />
            <View style={{ ...sharedStyles.col_1, justifyContent: "flex-end" }}>
                <Image
                    style={{ ...sharedStyles.image, marginLeft: 0 }}
                    src="/assets/images/vikl.png"
                />
            </View>
            <View
                style={{
                    ...sharedStyles.col_3,
                    justifyContent: "flex-end",
                }}
            >
                <Text
                    style={{
                        ...sharedStyles.textSansBold,
                        justifyContent: "flex-end",
                        // color: "red",
                    }}
                >
                    Pretsvars
                </Text>
                {/* <View style={sharedsharedStyles.box}></View> */}
            </View>
            <View
                style={{
                    ...sharedStyles.col_5,
                    justifyContent: "flex-end",
                }}
            >
                <Image
                    style={sharedStyles.image}
                    src="/assets/images/attalums.png"
                />
                <Text
                    style={{
                        ...sharedStyles.textSansBold,
                        color: "red",
                    }}
                >
                    NEPIET
                </Text>
                <View style={sharedStyles.box2x}></View>
            </View>
            <View
                style={{
                    ...sharedStyles.col_2,
                    justifyContent: "flex-end",
                }}
            >
                <Image
                    style={{ ...sharedStyles.image, marginLeft: 7 }}
                    src="/assets/images/patveruma_zime.png"
                />
            </View>
        </View>
    );
};

export default Bedre;
