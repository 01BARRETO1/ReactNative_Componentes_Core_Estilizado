import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EmployeeList from './src/components/EmployeeList';
import CompanyHeader from './src/components/CompanyHeader';
export default function App() {
  return (
    
      <SafeAreaProvider>
        <StatusBar style='light'
        />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.appContainer}>
           <CompanyHeader/>
          <EmployeeList />
          </View>
          
        </SafeAreaView>
      </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea:{
    flex:1,
    backgroundColor:'#2196f3'
  },
  appContainer: {
    flex:1,
    backgroundColor: '#ffff'
  }
});
