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

export default function NewUser({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    //Não funciona pois foi feito com base em documentação antiga
    const registerFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Games", { idUser: user.uid })
            })
            .catch((error) => {
                setErrorRegister(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    useEffect(() => {

    }, [])

    return (
        //Arrastar a página para cima quando abrir o teclado
        <KeyboardAvoidingView
            //Não funciona pois foi feito com base em documentação antiga
            //behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>
                GamesTec
            </Text>
            <Text style={styles.label}>
                Sign Up
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
            {/* Mensagem de erro */}
            {errorRegister === true
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
            {/* Validação se os campos estiverem vazios */}
            {email === "" || password === ""
                //verdadeiro
                ?
                <TouchableOpacity
                    style={styles.buttonRegister}
                    disabled={true}
                >
                    <Text style={styles.textButtonRegister}>
                        Register
                    </Text>
                </TouchableOpacity>
                //falso
                :
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={registerFirebase}
                >
                    <Text style={styles.textButtonRegister}>
                        Register
                    </Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>
                Already have an account? <Text
                    style={styles.linkLogin}
                    onPress={() => navigation.navigate("Login")}
                >
                    Sign In
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}