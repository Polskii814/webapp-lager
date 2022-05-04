import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from '../assets/warehouse.jpg';
import StockList from '../components/Stock.tsx';
import list from '../components/Stock.tsx';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={{ color: 'darkorange', fontSize: 50, marginBottom: 15 }}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 350, height: 240 }} />
        <Text style={{ color: 'darkorange', fontSize: 25,  }}>Lagerförteckning</Text>
        <StockList />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  }
});
