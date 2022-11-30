import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import firebase from "../../config/firebaseconfig.js"
import styles from "./style.js"

export default function NewProfile({ navigation, route }, props) {
    const [nome, setNome] = useState(null)
    const [apelido, setApelido] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [numeroendereco, setNumeroendereco] = useState(null)
    const [cidade, setCidade] = useState(null)

    const database = firebase.firestore()

    function addProfile() {
        database.collection("Perfis").add({
            nome: nome,
            apelido: apelido,
            telefone: telefone,
            endereco: endereco,
            numeroendereco: numeroendereco,
            cidade: cidade
        })
        navigation.navigate("Profiles")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Matheus Augusto Inácio Penachioni"
                placeholderTextColor="#282b2db5" 
                onChangeText={setNome}
                value={nome}
            />
            <Text style={styles.label}>Alias</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Hayakko"
                placeholderTextColor="#282b2db5" 
                onChangeText={setApelido}
                value={apelido}
            />
            <Text style={styles.label}>Phone Number (+55)</Text>
            <TextInput
                style={styles.inputText}
                placeholder="17 99662-1221"
                placeholderTextColor="#282b2db5" 
                onChangeText={setTelefone}
                value={telefone}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Rua Cuca Beludo II"
                placeholderTextColor="#282b2db5" 
                onChangeText={setEndereco}
                value={endereco}
            />
            <Text style={styles.label}>Adress Complement</Text>
            <TextInput
                style={styles.inputText}
                placeholder="123"
                placeholderTextColor="#282b2db5" 
                onChangeText={setNumeroendereco}
                value={numeroendereco}
            />
            <Text style={styles.label}>City</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Fernandópolis"
                placeholderTextColor="#282b2db5" 
                onChangeText={setCidade}
                value={cidade}
            />

            <TouchableOpacity
                style={styles.buttonNewProfile}
                onPress={() => {
                    addProfile()
                }}
            >
                <FontAwesome
                    name="save"
                    size={23}
                    color="#fff"
                >
                </FontAwesome>
            </TouchableOpacity>
        </View>
    )
}