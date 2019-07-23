import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Post from './components/Posts';
import PostForm from './components/PostForm';
import store from './store'



function App() {
	return (
		<Provider store={store} >
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo center" alt="logo" />
					<PostForm />
					<hr />
					<Post />
				</header>
			</div>
		</ Provider>
	);
}

export default App;
