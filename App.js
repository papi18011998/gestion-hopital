import { StatusBar, View } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="default"/>
      <Routes/>
    </View>
  );
}