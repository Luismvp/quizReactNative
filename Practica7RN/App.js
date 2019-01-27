import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReduxProvider from './redux/ReduxProvider';

export default class App extends React.Component {
  

  render() {
    return (
      <View style={{flex: 1, flexDirection:'column'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}/>
        <View style={{flex: 4,flexDirection: 'row', alignItems:'center', backgroundColor: 'rgb(0, 0, 0)'}}>
          <View style={{flex: 2}}>
            <Image source={require("./quizzz.png")} style={{height:80, width:80, marginLeft:5}}/>
          </View>
          <View style={{flex:8}}>
            <Text style={{fontSize:20, textAlign:'center', color:'rgb(255, 255, 255)'}}> Práctica 7. Quiz con React Native </Text>
          </View>
        </View>
        <View style={{flex: 22, backgroundColor: 'white'}}>
          <ReduxProvider/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
