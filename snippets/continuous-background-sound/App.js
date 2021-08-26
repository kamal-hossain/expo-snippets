import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => {
            this.webview.injectJavaScript(
              'document.getElementById("audio").play();'
            )
          }}
        >
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => {
            this.webview.injectJavaScript(
              'document.getElementById("audio").pause();'
            )
          }}
        >
          <Text>Pause</Text>
        </TouchableOpacity>
        <WebView
          ref={(ref) => (this.webview = ref)}
          originWhitelist={['*']}
          mediaPlaybackRequiresUserAction={false} // Allow autoplay
          useWebKit={true}
          source={{
            html: '<h1>hi</h1><audio id="audio" loop> <source src="https://assets.mixkit.co/sfx/download/mixkit-software-interface-start-2574.wav" type="audio/mp3" /> </audio>',
          }}
        />
      </View>
    )
  }
}
