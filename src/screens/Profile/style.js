import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Profiles: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 30,
    },
    deleteProfile: {
        justifyContent: 'center',
        paddingLeft: 40,
    },
    descriptionProfile: {
        width: "70%",
        height: "100%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5",
    },
    buttonNewProfile: {
        width: 60,
        height: 60,
        position: 'fixed',
        bottom: 170,
        right: 20,
        backgroundColor: "#325ca8",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGames: {
        width: 60,
        height: 60,
        position: 'fixed',
        bottom: 100,
        right: 20,
        backgroundColor: "#13bae8",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogoutUser: {
        width: 60,
        height: 60,
        position: 'fixed',
        bottom: 30,
        right: 20,
        backgroundColor: "#d40606",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
})

export default styles;