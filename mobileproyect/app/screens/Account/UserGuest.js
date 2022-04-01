import React from "react"
import { StyleSheet, View, Text, ScrollView, Image } from "react-native"
import { Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
export default function UserGuest(){
    const navigation = useNavigation()
    return(
        <ScrollView style={StyleSheet.container}>

            <Image 
            
            style={styles.stretch}
            source={require("../../../assets/img/ITESCO-1-e1532924671960-1200x350-c-default.jpg")}
            />
            <Text style={styles.title}>Ingresa al ITESCO</Text> 
            <Text style={styles.description}>busca y visualiza las opciones de restaurantes en la ciudad</Text>

            <View style={styles.viewBtn}>
            <Button
            title="ver tu perfil"
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={()=>navigation.navigate("login")}
            
            />

            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10

    },
    stretch:{
        width:"100%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 40
       
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginBottom:10,
        textAlign:"center"
    },
    description:{
        marginBottom: 20,
        textAlign: "center"
    },
    viewBtn:{
        flex:1,
        alignItems:"center"
    },
    btnStyle:{
        backgroundColor:"#00a680"
    },
    btnContainer:{
        width: "70%"
    }


})