import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo center" alt="logo" />
				<PostForm />
				<hr />
				<Post />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
