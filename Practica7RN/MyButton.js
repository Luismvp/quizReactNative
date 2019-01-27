import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
export default class MyButton extends React.Component {
render() {
return (
<TouchableHighlight onPress={this.props.onPress}>
<Text style={styles.text}>{this.props.text}</Text>
</TouchableHighlight>
)
}
}
const styles = StyleSheet.create({
text: {
backgroundColor: 'white',
color: 'black',
borderWidth: 3,
borderColor: 'black',
fontSize: 20,
textAlign: 'center'
}
})