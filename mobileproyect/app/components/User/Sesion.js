import React, {useState} from "react"
import { StyleSheet, View, Text } from "react-native"
import { Input, Icon, Button  } from "react-native-elements"
import { validateEmail } from "../../utils/validation"
import {useNavigation} from "@react-navigation/native"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebase from "firebase/app"
import "firebase/auth"
import { emailValidator } from '../../utils/validation'
import { passwordValidator } from '../../utils/passwordValidator'


//antes era resgisterformjs

export default function RegisterForm(props){
    const {toastRef} =props
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const navigation = useNavigation()
const user = userCredential.user
    const auth = firebase.auth()

    const LoginForm = (props) => {
        const [email, setEmail] = useState({ value: '', error: '', class: '' });
        const [password, setPassword] = useState({ value: '', error: '', class: '' });
        const [isFormValid, setisFormValid] = useState(false);
        const validateForm = () => {
            const validateEmail = emailValidator(email.value);
            const validatePassword = passwordValidator(password.value);
    
    
         if(validateForm.email.length===0||validateForm.password.length===0){
              toastRef.current.show({
                 type: 'error',
                 position: 'top',
                 text1: 'Empty',
                 text2: 'Todos los campos son requeridos',
                 visibilityTime: 3000,
              });
            } else if (!validateEmail(email.value)){
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Password',
                    text2: 'el email no es el correcto',
                    visibilityTime: 3000,
                 });
            } else if (!validatePassword(password.value)){
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Password',
                    text2: 'contraseña mal',
                    visibilityTime: 3000,
                 });
                 
            } else{
                firebase.auth()
                .signInWithEmailAndPassword(auth, email, password)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    navigation.navigate("account")
                })
                .catch((err)=>{
                    toastRef.current.show({
                        type: 'error',
                        position: 'top',
                        text1: 'Sesion',
                        text2: 'correo invalido o no registrado',
                        visibilityTime: 3000,
                     });
                     
            })

     }
 }
     
      const onChange = (e, type) => {
         // console.log(type)
         // console.log(e.nativeEvent.text)
         // setFormData({[type]: e.nativeEvent.text})
          setFormData({...formData, [type]: e.nativeEvent.text})
      }

     return(
        <View style={styles.formContainer}>
            <Input
            
                 placeholder="Correo Electronico"
                 containerStyle={styles.inputForm}
                 onChange={(e)=>onChange(e, "email")}
                 rightIcon={<Icon type="material-community" name="at" iconStyle={styles.iconRight} />} 
            />
            <Input
            
                 placeholder="Contraseña"
                 containerStyle={styles.inputForm}
                 password={true}
                 secureTextEntry={showPassword ? false : true}
                 onChange={(e)=>onChange(e, "password")}
                 rightIcon={<Icon type="material-community" 
                 name={showPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.iconRight} 
                 onPress={()=> setShowPassword(!showPassword)}
                 
                 />}
            />
             
            
             <Button
                title="inicia sesion"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister} //cambiar color de caja
                onPress={onSubmit}
             />
             
        </View>
    )
}

function defaultFormValues() {
    return{
        email: '',
        password: ''
    
    }
}


const styles = StyleSheet.create({
formContainer:{
    marginTop: 30,
    
},
inputForm:{
    width: "100%",
    marginTop: 20
},
btnContainerRegister:{
    marginTop:20,
    width:"95%"
},
btnRegister:{
backgroundColor:"#00a680"
},
iconRight:{
    color: "#c1c1c1"
}
})
  }