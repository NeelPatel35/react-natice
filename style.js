import { StyleSheet } from 'react-native'
const customStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'grey',
        color: 'White',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        color: "white",
        backgroundColor: "red"
    },
    shap: {
        height: 200,
        width: 200,
        backgroundColor: "aqua",
        borderRadius: "50px",
        border: "10px solid yellow",
        alignItems: "center",
        // justifyContent:"center",

    }
});
export {
    customStyle
};