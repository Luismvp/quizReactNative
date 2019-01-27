import React from 'react';
import { View } from 'react-native';
import MyButton from './MyButton.js';
export default class IndexScreen extends React.Component {
render() {
return (
<View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
<MyButton
onPress={() => this.props.navigation.navigate('GameScreen')}
text={"Play"}/>
</View>
)
}
}