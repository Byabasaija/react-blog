import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/Home';
import { About } from './components/About';
import { Articles } from './components/Articles';

const Heading = styled.h1`
  color: green;
  font-size: 50px;
`

const App = () => {
	return (
		<>
			<Heading>Server-Side Rendering Example</Heading>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/articles">Articles</Link>
				</li>
			</ul>
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
