import React, {
    useState,
    useEffect
} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import firebase from "../../config/firebaseconfig.js"
import styles from "./style.js"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user
                navigation.navigate("Games", { idUser: user.uid })
            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code
                var errorMessage = error.message
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                navigation.navigate("Games", { idUser: user.uid })
            }
        });
    }, [])

    return (
        <KeyboardAvoidingView
            //behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>
                GamesTec
            </Text>
            <Text style={styles.label}>
                Sign In
            </Text>
            <TextInput
                style={styles.inputText}
                type="text"
                placeholder="E-mail address"
                placeholderTextColor="#282b2db5"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.inputText}
                type="text"
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#282b2db5"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {errorLogin === true
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>
                        Invalid e-mail or password!
                    </Text>
                </View>
                :
                <View />
            }
            {email === "" || password === ""
                ?
                <TouchableOpacity
                    style={styles.buttonLogin}
                    disabled={true}
                >
                    <Text style={styles.textButtonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={loginFirebase}
                >
                    <Text style={styles.textButtonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
            }
            <Text style={styles.register}>
                Don't have an account? <Text
                    style={styles.linkRegister}
                    onPress={() => navigation.navigate("New User")}
                >
                    Sign Up
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}