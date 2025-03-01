import { View, Text, Image } from "@react-pdf/renderer";
import { debug, rowHeight, sizes, sharedStyles, borders } from "../variables";

const SectionHeader = ({ header }: { header: string }) => {
    return (
        <>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: sizes.checkListWidth,
                    // height: rowHeight,
                    borderBottom: borders.borderThin,
                    // alignItems: "center",
                    backgroundColor: "#359",
                    // height: "6mm",
                    border: "none",
                    marginTop: "0.5mm",
                    marginBottom: "0.5mm",
                }}
            >
                <Text
                    style={{
                        ...sharedStyles.textSansBold,
                        padding: "0.3mm",
                        paddingLeft: "1mm",
                        margin: 0,
                        fontSize: "2.5mm",
                        color: "#eef",
                    }}
                >
                    {header}
                </Text>
            </View>
        </>
    );
};

export default SectionHeader;
