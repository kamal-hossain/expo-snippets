import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Audio } from 'expo-av'

export default function App() {
  const [newOrder, setNewOrder] = React.useState(false)

  React.useEffect(() => {
    let playing
    if (newOrder) {
      playing = setInterval(() => {
        console.log('Playing sound in every 2000 ms')
        play(true)
      }, 2000)
    } else {
      clearInterval(playing)
    }
    return () => clearInterval(playing)
  }, [newOrder])

  const play = async (shouldPlay) => {
    console.log('play() called')

    const soundObject = new Audio.Sound()
    await soundObject.loadAsync({
      uri: 'https://assets.mixkit.co/sfx/download/mixkit-software-interface-start-2574.wav',
    })

    await soundObject.playAsync()

    setTimeout(() => {
      soundObject.unloadAsync() // Unloading the sound object, otherwise too much object will be added and error will come up.
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <Text>Start continuous playing, or stop playing if started.</Text>
      <StatusBar style="auto" />
      <Button title={'Start sound'} onPress={() => setNewOrder(true)} color="red" />
      <Button title={'Stop sound'} onPress={() => setNewOrder(false)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
