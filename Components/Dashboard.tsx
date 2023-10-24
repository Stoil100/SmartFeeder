import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View>
      <Text style={styles.statisticsTitle}>Weekly Statistics:</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    statisticsTitle:{
        fontWeight: "700",
        fontSize: 24,
    }

})