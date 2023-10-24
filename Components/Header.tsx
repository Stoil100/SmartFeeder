import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
    const credentials=useAuth();
    let newDate = new Date()
    let date = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();

  return (
    <View style={styles.container}>
       <Image source={require('./img/smartFeederLogo.png')} style={{width: 60, height: 60}} />
      <Text style={styles.headerTitle}>Welcome {credentials.credentials?.username}</Text>
      <Text style={styles.headerText}> Today is {date}/{month}/{year}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container:{
       justifyContent: 'center',
       alignItems: 'center',
    },
    header:{
        fontWeight: "700",
        fontSize: 32,
    },
        headerTitle:{
        fontWeight: "700",
        fontSize: 24,
    },
    headerText:{
        fontSize: 16,
    }
})