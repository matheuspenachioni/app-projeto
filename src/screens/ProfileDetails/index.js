import React, { useState } from "react"
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import firebase from "../../config/firebaseconfig.js"
import styles from "./style.js"

export default function ProfileDetails({ navigation, route }) {
    const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [apelidoEdit, setApelidoEdit] = useState(route.params.apelido)
    const [telefoneEdit, setTelefoneEdit] = useState(route.params.telefone)
    const [enderecoEdit, setEnderecoEdit] = useState(route.params.endereco)
    const [numeroenderecoEdit, setNumeroenderecoEdit] = useState(route.params.numeroendereco)
    const [cidadeEdit, setCidadeEdit] = useState(route.params.cidade)
    const idProduct = route.params.id
    const database = firebase.firestore()

    function editProfile(nome, apelido, telefone, endereco, numeroendereco, cidade, id){
        //route.params.idUser
        database.collection("Perfis").doc(id).update({
            nome: nomeEdit,
            apelido: apelidoEdit,
            telefone: telefoneEdit,
            endereco: enderecoEdit,
            numeroendereco: numeroenderecoEdit,
            cidade: cidadeEdit
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
                onChangeText={setNomeEdit}
                value={nomeEdit}
            />
            <Text style={styles.label}>Alias</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Hayakko"
                placeholderTextColor="#282b2db5"
                onChangeText={setApelidoEdit}
                value={apelidoEdit}
            />
            <Text style={styles.label}>Phone Number (+55)</Text>
            <TextInput
                style={styles.inputText}
                placeholder="17 99662-1221"
                placeholderTextColor="#282b2db5"
                onChangeText={setTelefoneEdit}
                value={telefoneEdit}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Rua Cuca Beludo II"
                placeholderTextColor="#282b2db5"
                onChangeText={setEnderecoEdit}
                value={enderecoEdit}
            />
            <Text style={styles.label}>Address Complement</Text>
            <TextInput
                style={styles.inputText}
                placeholder="123"
                placeholderTextColor="#282b2db5"
                onChangeText={setNumeroenderecoEdit}
                value={numeroenderecoEdit}
            />
            <Text style={styles.label}>City</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Fernandópolis"
                placeholderTextColor="#282b2db5"
                onChangeText={setCidadeEdit}
                value={cidadeEdit}
            />

            <TouchableOpacity
                style={styles.buttonNewProfile}
                onPress={() => {
                    editProfile(nomeEdit, apelidoEdit, telefoneEdit, enderecoEdit, numeroenderecoEdit, cidadeEdit, idProduct)
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