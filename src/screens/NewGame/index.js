import React, { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import firebase, { storage } from "../../config/firebaseconfig.js"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import styles from "./style.js"

export default function NewGame({ navigation, route }, props) {
    const [nome, setNome] = useState(null)
    const [marca, setMarca] = useState(null)
    const [preco, setPreco] = useState(null)

    const [imageList, setImageList] = useState([])
    const [imageUpload, setImageUpload] = useState(null)
    const imageListRef = ref(storage, "images/")

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

    const uploadImage = () => {
        if(imageUpload == null) return

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=> {
                setImageList((prev) => [...prev, url])
            })
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) =>{
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

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
                onChange={(event) => {
                    setImageUpload(event.target.files[0])
                }}
            />
            <button onClick={uploadImage}>
                Upload
            </button>

                <br />
            {imageList.map((url) => {
                return <img src={url}/>
            })}

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