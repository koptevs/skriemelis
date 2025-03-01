import { View, Text, Image } from '@react-pdf/renderer';
import { borders, debug, sharedStyles } from '../variables';
import { Gap } from '../variables';

const Kabine = ({ isCE }: { isCE: boolean }) => {
    return (
        <>
            <View style={sharedStyles.lineWrapper}>
                <View
                    style={{
                        ...sharedStyles.col_2,
                        // backgroundColor: "tomato",
                    }}
                >
                    <Image style={sharedStyles.image} src="/assets/images/zvans.png" />

                    <View style={sharedStyles.box}></View>
                </View>
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "lime",
                    }}
                >
                    <Text style={{ ...sharedStyles.textSansBold, color: 'red' }}>STOP</Text>
                    <View style={sharedStyles.box}></View>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_3,
                        // backgroundColor: "lime",
                    }}
                >
                    <Text style={{ ...sharedStyles.textSansBold, color: 'green' }}>&lt; R &gt;</Text>
                    <View style={sharedStyles.box}></View>
                </View>
                {/* <View
                    style={{
                        ...sharedStyles.col_4,
                    }}
                ></View> */}
                <View
                    style={{
                        ...sharedStyles.col_3,
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
                        DAS&gt;10mm
                    </Text>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_5,
                        // backgroundColor: "lime",
                    }}
                >
                    <View style={sharedStyles.comboBox}>
                        <Text style={sharedStyles.textSansBold}>L</Text>
                    </View>
                    <View style={sharedStyles.comboBox2x}></View>
                    <View style={sharedStyles.comboBox}>
                        <Text
                            style={{
                                ...sharedStyles.textSansBold,
                                color: 'red',
                            }}
                        >
                            D
                        </Text>
                    </View>
                    <Gap />
                    <Gap />
                    <View style={sharedStyles.comboBox}>
                        <Text style={sharedStyles.textSansBold}>R</Text>
                    </View>
                    <View style={sharedStyles.comboBox2x}></View>
                    <View style={sharedStyles.comboBox}>
                        <Text
                            style={{
                                ...sharedStyles.textSansBold,
                                color: 'red',
                            }}
                        >
                            D
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_5,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            // color: "red",
                        }}
                    >
                        Celtspeja
                    </Text>
                </View>
            </View>
            {/* 2nd LINE */}
            <View style={sharedStyles.lineWrapper}>
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "lime",
                    }}
                >
                    {' '}
                    <Image style={sharedStyles.image} src="/assets/images/paveles.png" />
                </View>
                <View style={sharedStyles.box}></View>
                <Gap />
                <Gap />
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "lime",
                    }}
                >
                    {' '}
                    <Image style={sharedStyles.image} src="/assets/images/grida.png" />
                </View>
                <View style={sharedStyles.box}></View>
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "lime",
                    }}
                >
                    {' '}
                    <Image style={sharedStyles.image} src="/assets/images/griesti.png" />
                </View>
                <View style={sharedStyles.box}></View>
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "lime",
                    }}
                >
                    {' '}
                    <Image style={sharedStyles.image} src="/assets/images/apdare.png" />
                </View>
                <View style={sharedStyles.box}></View>
                <Gap />
                <Gap />
                <Gap />
                <View
                    style={{
                        ...sharedStyles.col_2,
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text style={sharedStyles.textSansBold}>Kab.Durv</Text>
                </View>
                <Gap />
                <View style={sharedStyles.col_1}>
                    <Text style={sharedStyles.textSansBold}>L</Text>
                </View>
                <View style={sharedStyles.col_1}>
                    <View style={sharedStyles.box}></View>
                </View>
                <View style={sharedStyles.col_1}>
                    <Text style={sharedStyles.textSansBold}>R</Text>
                </View>
                <View style={sharedStyles.col_1}>
                    <View style={sharedStyles.box}></View>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_7,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            // color: "red",
                        }}
                    >
                        MAX pasažieru, Adrese
                    </Text>
                </View>
            </View>
            {/* 3rd line */}

            <View style={sharedStyles.lineWrapper}>
                <View style={sharedStyles.col_1}>
                    {' '}
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
                            color: 'red',
                        }}
                    >
                        &gt;= 100lx
                    </Text>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "tomato",
                    }}
                >
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
                <View style={sharedStyles.col_1}>
                    {' '}
                    <Image style={sharedStyles.image} src="/assets/images/lamp_avarijas.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_2,
                        // backgroundColor: "lime",
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textSansBold,
                            color: 'red',
                        }}
                    >
                        &gt;= 5lx
                    </Text>
                </View>
                <View
                    style={{
                        ...sharedStyles.col_1,
                        // backgroundColor: "tomato",
                    }}
                >
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
                        // backgroundColor: "lime",
                        justifyContent: 'flex-end',
                    }}
                ></View>
                <View
                    style={{
                        ...sharedStyles.col_11,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            // color: "red",
                        }}
                    >
                        Ražotājs, Avārijas dienesta dati. Gads
                    </Text>
                </View>
            </View>
            {/* 4th line */}

            <View style={sharedStyles.lineWrapper}>
                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/sakari.png" />
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
                            ...sharedStyles.textBold,
                            color: 'red',
                        }}
                    >
                        Slikti dzirdams
                    </Text>
                </View>

                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/zvans_yellow.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_5,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            // color: "red",
                        }}
                    >
                        deg &nbsp;--&gt;&nbsp; <Text style={{ color: 'blue' }}>AUDIO</Text>
                        &nbsp;&nbsp;--&gt;
                    </Text>
                </View>
                <View style={sharedStyles.col_1}>
                    <Image style={sharedStyles.image} src="/assets/images/sakari_zalie.png" />
                </View>
                <View
                    style={{
                        ...sharedStyles.col_9,
                        // backgroundColor: "lime",
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            ...sharedStyles.textBold,
                            // color: "red",
                        }}
                    >
                        Lietošanas noteikumi, Model
                    </Text>
                </View>
            </View>
        </>
    );
};

export default Kabine;
