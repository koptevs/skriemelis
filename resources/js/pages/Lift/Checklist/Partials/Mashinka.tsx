import { View, Text, Image } from '@react-pdf/renderer';
import { borders, debug, sharedStyles } from '../variables';
import { Gap } from '../variables';

const Mashinka = () => {
    return (
        <>
            <View style={sharedStyles.lineWrapper}>
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/rules.png" />
                </View>
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_2,
                        // backgroundColor: "lime",
                    }}
                >
                    <Text style={{ ...sharedStyles.textSansBold, color: 'blue' }}>LŪKA</Text>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/patveruma_zime.png" />
                </View>
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/bojats.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "lime",
                    }}
                ></View>
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/kovriki.png" />
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        ВУ
                    </Text>
                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>
                {/* <Gap /> */}
                <View
                    style={{
                        ...sharedStyles.col_4,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/kovriki.png" />
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        ШКАФ
                    </Text>
                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>
                <Gap size={5} />
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/manjetsi.png" />
                    <Image style={sharedStyles.image} src="/assets/images/skriemelis.png" />

                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>
                <Gap size={5} />
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/manjetsi_os.png" />
                    <Image style={sharedStyles.image} src="/assets/images/os.png" />

                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>

                <Gap />
                <Gap />
                <Gap />
                <Gap />
                <Gap />

                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/os.png" />

                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>
            </View>
            {/* 2nd LINE */}
            <View style={sharedStyles.lineWrapper}>
                <View
                    style={{
                        ...sharedStyles.col_3,
                        backgroundColor: 'yellow',
                        justifyContent: 'space-around',
                    }}
                >
                    <Text style={sharedStyles.textSansBold}>EĻĻA</Text>
                    <Image style={sharedStyles.image} src="/assets/images/mitrums.png" />
                </View>

                <View
                    style={{
                        ...sharedStyles.col_5,
                    }}
                >
                    <Text style={sharedStyles.textSansBold}>REDUKT. NOLIET.</Text>
                </View>
                <Gap size={45} />
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/atsperes.png" />

                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>

                <View
                    style={{
                        ...sharedStyles.col_3,
                        justifyContent: 'space-between',
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/skriemelis.png" />

                    <View
                        style={{
                            ...sharedStyles.box,
                            // backgroundColor: "tomato",
                        }}
                    ></View>
                    <Image style={sharedStyles.image} src="/assets/images/skriemelis_nevienmerigs.png" />
                </View>
            </View>
            {/* 3rd line */}

            <View style={sharedStyles.lineWrapper}>
                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/lamp.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        &gt;= 200lx
                    </Text>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_2,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            color: 'red',
                        }}
                    >
                        MAZ
                    </Text>
                </View>

                <Gap size={28} />
                <View
                    style={{
                        ...sharedStyles.col_12,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            color: 'red',
                        }}
                    >
                        APRIKOJUMS &nbsp;&nbsp;&nbsp;&nbsp;PRIEKŠMETI&nbsp;&nbsp;&nbsp;&nbsp;VECAS DETAĻAS
                    </Text>
                </View>
            </View>
            {/* 4th line */}

            <View style={sharedStyles.lineWrapper}>
                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/rules.png" />
                </View>

                <View
                    style={{
                        ...sharedStyles.col_6,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        Evak.instrukcija&nbsp;&nbsp;&nbsp;LAT
                    </Text>
                </View>
                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/rules.png" />
                </View>

                <View
                    style={{
                        ...sharedStyles.col_4,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        El. Shēma
                    </Text>
                </View>
                <Gap size={20} />
                <View
                    style={{
                        ...sharedStyles.col_10,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        El. Stacijas Aprikojums
                    </Text>{' '}
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            color: 'red',
                        }}
                    >
                        NOLIETOTS
                    </Text>
                </View>
            </View>
        </>
    );
};

export default Mashinka;
