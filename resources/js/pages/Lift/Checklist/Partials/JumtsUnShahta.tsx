import { View, Text, Image } from '@react-pdf/renderer';
import { borders, debug, sharedStyles } from '../variables';
import { Gap } from '../variables';

const JumtsUnShahta = ({ isCE }: { isCE: boolean }) => {
    return (
        <>
            <View style={sharedStyles.lineWrapper}>
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "lime",
                    }}
                >
                    <Text style={{ ...sharedStyles.textSansBold, color: 'red' }}>STOP</Text>
                    <View style={sharedStyles.box}></View>
                </View>
                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/sakari.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_2,
                        justifyContent: 'flex-end',
                    }}
                >
                    <Image style={{ ...sharedStyles.image, marginLeft: 7 }} src="/assets/images/patveruma_zime.png" />
                </View>
                {/* <Gap size={77} /> */}
                <Gap size={28} />
                <View
                    style={{
                        ...sharedStyles.col_4,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            justifyContent: 'flex-end',
                            // color: "red",
                        }}
                    >
                        Трос
                    </Text>
                    <Image style={{ ...sharedStyles.image, marginLeft: 0 }} src="/assets/images/skriemelis.png" />
                    <View
                        style={{
                            ...sharedStyles.box,
                            width: '5mm',
                            marginLeft: '2mm',

                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>
                <Gap size={10} />
                <View
                    style={{
                        ...sharedStyles.col_5,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            justifyContent: 'flex-end',
                            // color: "red",
                        }}
                    >
                        Kabīne
                    </Text>

                    <Image style={{ ...sharedStyles.image, marginLeft: 7 }} src="/assets/images/brivkustiba.png" />

                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        Kurpes
                    </Text>
                </View>
            </View>
            {/* 2nd LINE */}

            <View style={sharedStyles.lineWrapper}>
                <View style={sharedStyles.col_1}>
                    {' '}
                    <Image style={sharedStyles.image} src="/assets/images/lamp.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_5,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            color: 'red',
                        }}
                    >
                        &gt;= 50lx
                    </Text>
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        1m. virs jumta
                    </Text>
                </View>
                <Gap />
                <View
                    style={{
                        ...sharedStyles.box,
                        width: '5mm',

                        // backgroundColor: "tomato",
                    }}
                ></View>
                <Gap size={22} />
                <View
                    style={{
                        ...sharedStyles.col_4,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            justifyContent: 'flex-end',
                            // color: "red",
                        }}
                    >
                        Трос
                    </Text>
                    <Image style={{ ...sharedStyles.image, marginLeft: 0 }} src="/assets/images/os.png" />
                    <View
                        style={{
                            ...sharedStyles.box,
                            width: '5mm',
                            marginLeft: '2mm',

                            // backgroundColor: "tomato",
                        }}
                    ></View>
                </View>
                <Gap size={2} />
                <View
                    style={{
                        ...sharedStyles.col_2,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Image style={{ ...sharedStyles.image, marginLeft: 7 }} src="/assets/images/atsperes.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_5,
                        // backgroundColor: "lime",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            justifyContent: 'flex-end',
                            // color: "red",
                        }}
                    >
                        Pretsvars
                    </Text>

                    <Image style={{ ...sharedStyles.image, marginLeft: 7 }} src="/assets/images/brivkustiba.png" />

                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            // color: "red",
                        }}
                    >
                        Kurpes
                    </Text>
                </View>
            </View>
        </>
    );
};

export default JumtsUnShahta;
