import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, FlatList } from 'react-native';
export default class Pregunta extends React.Component {
	render() {
		if (this.props.question === undefined){
			return(<Image source={require("./assets/200.gif")} style={{height:200, width:200, marginLeft:5}}/>);
		}else{
			var url = this.props.question.attachment.url.toString()
			var tipis = this.props.question.tips
			return (
				<View>
					<Image style={{height:200, width:300}} source={{uri : url}}/>
					<View style={{marginTop:5}}>
						<Text style={{fontSize: 20, textAlign:'center', color:'red', marginBottom:15}}>{this.props.question.question}</Text>
						<TextInput style={{fontSize: 14, textAlign:'center'}} placeholder="Introduce tu respuesta" value={this.props.question.userAnswer || ''} onChangeText={(e)=>{
							this.props.onQuestionAnswer(e);}}/>
						<Text style={{fontSize: 20, textAlign:'center', marginTop:15}}> Pistas: </Text>
						<FlatList data={tipis}
							renderItem={({item}) =>
							<Text style={{fontSize: 14, textAlign:'center'}}>{item}</Text>}/>
					</View>
				</View>
			);
		}
		
	}
}