import React from 'react';
import { View, Text, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import Pregunta from './Pregunta.js'
import ActionBar from './ActionBar.js'
import { connect } from 'react-redux';
import {fetchState, questionAnswer, changeQuestion, changeBackwards, resetea , submitScore, carga} from './redux/actions';
import MyButton from './MyButton.js';
class GameScreen extends React.Component {
componentDidMount(){
  		this.props.dispatch(fetchState())
	}

//Mecanismos de guardado de preguntas con AsyncStorage
//Guardado de preguntas
_guardar = async (questions) => {
  try {
    await AsyncStorage.setItem('@P7_2018_IWEB:quiz', JSON.stringify(questions));
    this._showAlert('Se ha guardado este set de preguntas');
  } catch (error) {
    this._showAlert(error.toString());
  }
}
//Cargado de preguntas
_recuperar = async () => {
  try {
    const string = await AsyncStorage.getItem('@P7_2018_IWEB:quiz');
    const quiz_array = JSON.parse(string);
    console.log(quiz_array)

    if (string != null) {
		this.props.dispatch(carga(quiz_array));
    }
    else{
      this._showAlert('No hay preguntas almacenadas');
    }
   } catch (error) {
    this._showAlert(error.toString())
   }
}
//Borrado de preguntas
_borrar = async () => {
  try{
    await AsyncStorage.setItem('@P7_2018_IWEB:quiz', '')
    this._showAlert('Se han borrado las preguntas');
  } catch (error) {
    this._showAlert(error.toString());
  }
}

_showAlert = (text) => {
    Alert.alert(
      text,
      undefined,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: true }
    )
}
render(){
		console.log(this.props);
		if(this.props.finished === false){
			return (
			<View style={{flex:1, margin:10, alignItems:'center'}}>
				<View style={{flex:5}}>
					<Pregunta question={this.props.questions[this.props.currentQuestion]}
						onQuestionAnswer={(answer)=>{
							this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
							console.log(this.props)
						}}/>
				</View>
				<View style={{flex:2}}>
					<ActionBar onChangeQuestion={()=>{
							this.props.dispatch(changeQuestion(this.props.currentQuestion));	
						  }}
						  onChangeBackwards={()=>{
							this.props.dispatch(changeBackwards(this.props.currentQuestion));
						  }}
						  onResetea={()=>{
						  	this.props.dispatch(resetea(this.props.score, this.props.finished));
						  	this.props.dispatch(fetchState());
						  }}
						  onSubmitScore={()=>{
						  this.props.dispatch(submitScore(this.props.questions));
						  }}
						  guarda = {()=>{
              				this._guardar(this.props.questions);
            			  }}
            			  carga = {()=>{
              				this._recuperar();
            			  }}
            				borra = {()=>{
              				this._borrar();
            			  }}/>
					<MyButton style={{flex:1}} onPress={() => this.props.navigation.goBack()} text={"Go back"}/>
				</View>
			</View>
			);
		}else{
			return(
				<View style={{flex:1, margin:10, alignItems:'center'}}>
				<View style={{flex:1}}>
						<Text style={{fontSize: 20, textAlign:'center', color:'black', marginBottom:15}}>El número de aciertos que has tenido es:</Text>
				</View>
				<View style={{flex:3, justifyContent:'center'}}>
						<Text style={{fontSize: 30, textAlign:'center', color:'red', marginBottom:15}}>{this.props.score}</Text>
				</View>
				<View style={{flex:1}}>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    					backgroundColor: '#DDDDDD', padding: 10}} onPress={()=>{
	    							this.props.dispatch(fetchState());
									this.props.dispatch(resetea(this.props.score, this.props.finished));}}>
						<Text>
							Reset
						</Text>
					</TouchableHighlight>
				</View>
			</View>
			)
		}
	}
}




function mapStateToProps(state){
	return{
		...state
	}
}
export default connect(mapStateToProps)(GameScreen);