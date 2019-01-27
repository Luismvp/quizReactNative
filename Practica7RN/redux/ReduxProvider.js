import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import GameScreen from '../GameScreen';
import IndexScreen from '../IndexScreen';

const AppNavigator = createStackNavigator({
	IndexScreen: {screen: IndexScreen},
	GameScreen: {screen: GameScreen}
},{
	initialRouteName: "IndexScreen",
	headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);
export default class ReduxProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = {
			score: 0,
			finished: false,
			currentQuestion: 0,
			questions: []
		};
		this.store = this.configureStore();
	}

	render() {
		
		return(
			<Provider store={ this.store }>
					<AppContainer/>
			</Provider>
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState, compose(applyMiddleware(thunk)));
	}
}
