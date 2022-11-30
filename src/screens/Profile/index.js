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
import styles from "./style.js"

export default function Profile({ navigation, route }) {
    const [profile, setProfile] = useState([])
    const database = firebase.firestore()

    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
          }).catch((error) => {
            
          });
    }

    function deleteProfile(id) {
        //route.params.idUser
        database.collection("Perfis").doc(id).delete()
    }

    useEffect(() => {
        //route.params.idUser
        database.collection("Perfis").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setProfile(list)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={profile}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Profiles}>
                            <TouchableOpacity
                                style={styles.deleteProfile}
                                onPress={() => deleteProfile(item.id)}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={23}
                                    color="#d42848"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descriptionProfile}
                                onPress={() => {
                                    navigation.navigate("Profile Details", {
                                        id: item.id,
                                        nome: item.nome,
                                        apelido: item.apelido,
                                        telefone: item.telefone,
                                        endereco: item.endereco,
                                        numeroendereco: item.numeroendereco,
                                        cidade: item.cidade
                                    })
                                }}
                            >
                                <strong>Full Name</strong> <br/>{item.nome} <br/>
                                <strong>Alias</strong> <br/>{item.apelido} <br/>
                                <strong>Phone Number</strong> <br/>{item.telefone} <br/>
                                <strong>Address</strong> <br/>{item.endereco} nº{item.numeroendereco}, {item.cidade}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewProfile}
                onPress={() => navigation.navigate("New Profile")}
            >
                <FontAwesome
                    name="plus"
                    size={20}
                    color="#fff"
                >
                </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonGames}
                onPress={() => navigation.navigate("Games")}
            >
                <FontAwesome
                    name="gamepad"
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