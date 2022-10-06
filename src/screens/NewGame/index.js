import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import firebase from "../../config/firebaseconfig.js"
import styles from "./style.js"

export default function NewGame({ navigation, route }, props) {
    const [nome, setNome] = useState(null)
    const [marca, setMarca] = useState(null)
    const [preco, setPreco] = useState(null)
    const database = firebase.firestore()

    function addProduct() {
        database.collection("Produtos").add({
            nome: nome,
            marca: marca,
            preco: preco,
            status: false,
        })
        navigation.navigate("Games")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Marvel's Spider-Man"
                placeholderTextColor="#282b2db5" 
                onChangeText={setNome}
                value={nome}
            />
            <Text style={styles.label}>Developer</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Insomniac Games"
                placeholderTextColor="#282b2db5" 
                onChangeText={setMarca}
                value={marca}
            />
            <Text style={styles.label}>Price (BRL)</Text>
            <TextInput
                style={styles.inputText}
                placeholder="R$ 249,90"
                placeholderTextColor="#282b2db5" 
                onChangeText={setPreco}
                value={preco}
            />
            <Text style={styles.label}>Image</Text>
            <input
                type="file"
                style={styles.inputText}
            />
            <TouchableOpacity
                style={styles.buttonNewProduct}
                onPress={() => {
                    addProduct()
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