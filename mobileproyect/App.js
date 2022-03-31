import React, { useEffect } from 'react'
import Navigation from './app/navigations/Navigation'
import { firebaseApp } from './app/utils/firebase'
import firebase from 'firebase'

export default function App() {

  useEffect(()=>{
    firebase.auth().onAuthStateChange((user)=>{
      console.log(user)
    })
  }, []) 
  return (<Navigation/>)
  
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
