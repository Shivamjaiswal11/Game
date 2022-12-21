// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import GameScreen from './src/screen/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
// ScreenOrientation.unlockAsync()
export default function App() {
  return (
    <SafeAreaView style={{flex:1}} >
      {/* <StatusBar style="auto" /> */}
      <GameScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
