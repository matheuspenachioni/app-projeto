import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        color: "#325ca8",
    },
    inputText: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#325ca8",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonNewProduct: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        backgroundColor: "#325ca8",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogin: {
        width: "55%",
        marginLeft: "auto",
        marginRight: "auto",
    },
})

export default styles;