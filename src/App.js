import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';

function App() {
	return (
		<div className="App container">
			<header className="App-header">
				<img src={logo} className="App-logo center" alt="logo" />
				<PostForm />
				<hr />
				<Post />
			</header>
		</div>
	);
}

export default App;
