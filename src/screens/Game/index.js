import React, {
    useState,
    useEffect
} from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import firebase from "../../config/firebaseconfig.js"
import Logo from "../../images/header.jpg"
import styles from "./style.js"

export default function Game({ navigation, route }) {
    const [product, setProduct] = useState([])
    const database = firebase.firestore()

    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
          }).catch((error) => {
            
          });
    }

    function deleteProduct(id) {
        //route.params.idUser
        database.collection("Produtos").doc(id).delete()
    }

    useEffect(() => {
        //route.params.idUser
        database.collection("Produtos").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setProduct(list)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={product}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Products}>
                            <TouchableOpacity
                                style={styles.deleteProduct}
                                onPress={() => deleteProduct(item.id)}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={23}
                                    color="#d42848"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descriptionProduct}
                                onPress={() => {
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        nome: item.nome,
                                        marca: item.marca,
                                        preco: item.preco
                                    })
                                }}
                            >
                                <Image source={Logo} style={styles.image} /> <br />
                                {item.nome} <br/>
                                {item.marca} <br/>
                                R$ {item.preco}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewProduct}
                onPress={() => navigation.navigate("New Game")}
            >
                <FontAwesome
                    name="plus"
                    size={20}
                    color="#fff"
                >
                </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonLogoutUser}
                onPress={()=> { logout()} }
            >
                <MaterialCommunityIcons
                    name="location-exit"
                    size={20}
                    color="#fff"
                >
                </MaterialCommunityIcons>
            </TouchableOpacity>
        </View>
    )
}