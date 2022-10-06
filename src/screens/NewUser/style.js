import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 48,
        color: "#325ca8",
        marginBottom: 10,
        fontWeight: "bold"
    },
    label: {
        width: "75%",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: "bold",
        color: "#325ca8",
    },
    inputText: {
        width: "75%",
        height: 50,
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#325ca8",
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonRegister: {
        width: "75%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#325ca8",
        borderRadius: 20,
        marginTop: 30,
    },
    textButtonRegister: {
        color: "#fff",
        fontWeight: "bold",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16
    },
    login:{
      marginTop: 20,
      color: "#4d5156",  
    },
    linkLogin: {
        color: "#1877f2",
    }
})

export default styles