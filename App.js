import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, SafeAreaView } from 'react-native';
import CalculatorView from './src/views/CalculatorView';

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <CalculatorView/>
    </SafeAreaView>
    
  );
}



const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25:0
  }
});