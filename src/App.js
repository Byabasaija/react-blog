import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Articles } from './components/Articles';
import Navbar from './components/Navabr';
const App = () => {
	return (
		<>
		<Navbar/>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/articles">
					<Articles />
				</Route>
			</Switch>
		</>
	);
}

export default App;
