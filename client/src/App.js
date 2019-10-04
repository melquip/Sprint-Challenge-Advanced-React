import React from 'react';
import axios from 'axios';
import Player from './Player';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		}
	}
	componentDidMount() {
		axios.get('http://localhost:5000/api/players')
			.then((response) => {
				this.setState({ players: response.data });
			})
			.catch((error) => console.error(error))
	}
	render() {
		const { players } = this.state;
		return (
			<div className="App" >
				<h1>Players</h1>
				<div className="players">
					{
						players.map(player => <Player key={player.id} player={player} />)
					}
				</div>
			</div>
		);
	}
}