import React from 'react';
import { Text, StyleSheet,TouchableHighlight, View } from 'react-native';
export default class ActionBar extends React.Component {
	render() {
		return (
			<View style={{flex:1, flexDirection:'column'}}>
				<View style={{flex:1, flexDirection:'row'}}>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    					backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.onChangeBackwards();}}>
						<Text>
							 Anterior
						</Text>
					</TouchableHighlight>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    				backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.onChangeQuestion();}}>
						<Text>
							Siguiente 
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex:1, flexDirection:'row'}}>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    					backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.onSubmitScore();}}>
						<Text>
							Comprobar
						</Text>
					</TouchableHighlight>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    					backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.onResetea();}}>
						<Text>
							Reset
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex:1, flexDirection:'row'}}>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    					backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.carga();}}>
						<Text>
							Cargar
						</Text>
					</TouchableHighlight>
					<TouchableHighlight style={{alignItems: 'center',width:150,margin:2,
	    					backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.borra();}}>
						<Text>
							Borrar
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex:1, flexDirection:'row', justifyContent: 'center',
        alignItems: 'stretch'}}>
					<TouchableHighlight style={{alignItems: 'center',width:300,margin:2,
	    					backgroundColor: '#DDDDDD'}} onPress={()=>{
									this.props.guarda();}}>
						<Text>
							Guardar
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}