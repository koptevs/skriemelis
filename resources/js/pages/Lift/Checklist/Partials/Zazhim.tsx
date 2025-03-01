import { View, StyleSheet } from "@react-pdf/renderer";
import { sizes as sz, debug } from "../variables";

const styles = StyleSheet.create({
    zazhim: {
        width: sz.w_full,
        height: sz.zazhimHeight,
        // backgroundColor: debug ? "#aabbff" : "transparent",
    },
});

const Zazhim = () => {
    return <View style={styles.zazhim}></View>;
};

export default Zazhim;
