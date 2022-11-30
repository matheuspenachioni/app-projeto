import React, { useState } from "react"
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import firebase from "../../config/firebaseconfig.js"
import styles from "./style.js"

export default function Details({ navigation, route }) {
    const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [marcaEdit, setMarcaEdit] = useState(route.params.marca)
    const [imageEdit, setImageEdit] = useState(route.params.image)
    const [precoEdit, setPrecoEdit] = useState(route.params.preco)
    const idProduct = route.params.id
    const database = firebase.firestore()

    function editProduct(nome, marca, preco, id){
        //route.params.idUser
        database.collection("Produtos").doc(id).update({
            nome: nomeEdit,
            marca: marcaEdit,
            preco: precoEdit,
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
                onChangeText={setNomeEdit}
                value={nomeEdit}
            />
            <Text style={styles.label}>Developer</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Insomniac Games"
                placeholderTextColor="#282b2db5"
                onChangeText={setMarcaEdit}
                value={marcaEdit}
            />
            <Text style={styles.label}>Price (BRL)</Text>
            <TextInput
                style={styles.inputText}
                placeholder="R$ 249,90"
                placeholderTextColor="#282b2db5"
                onChangeText={setPrecoEdit}
                value={precoEdit}
            />
            <Text style={styles.label}>Image</Text>
            <Image source={imageEdit} style={styles.image} />
            <TouchableOpacity
                style={styles.buttonNewProduct}
                onPress={() => {
                    editProduct(nomeEdit, marcaEdit, precoEdit, idProduct)
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