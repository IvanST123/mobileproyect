import React,{useRef} from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import { Divider } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import Toast from 'react-native-toast-message'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login(){
    return(
    <KeyboardAwareScrollView>
        <Image
            source={require("../../../assets/cuatro.png")}
            resizeMode="contain"
            style={styles.logo}
        />
        <View style={styles.viewContainer}> 
         <Text>Login Form</Text>
         <RegisterForm toastRef={toastRef}/>

         <CreateAccount/>

        </View>

        <Divider style={styles.divider}/>
        <Toast ref={toastRef}/>
       


    </KeyboardAwareScrollView>
 )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style = {styles.textRegister}>
         aun no tienes cuenta? {" "}
            <Text
              style = {styles.linkRegister}
              onPress={()=>navigation.navigate("register")}
            ><br/>
               Sign Up 
            </Text>
        </Text>

    )
    
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height: 150,
        marginTop:20
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,
        textAlign:"center"

    },
    divider:{
        backgroundColor:"#00a680",
        margin: 40

    },
    textRegister:{
        marginTop: 15,
        marginLeft:10,
        marginRight: 10
    },
    linkRegister:{
        color: "#00a580",
        fontWeight: "bold"

    }

})