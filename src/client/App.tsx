import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/VIews/Home';
import About from './components/VIews/About';
import Footer from './components/Footer';
import WowShop from './components/VIews/Shop';
import Build from './components/VIews/Build';
import Blog1 from './components/VIews/Blog1';
import Blog2 from './components/VIews/Blog2';
import Blog3 from './components/VIews/Blog3';



const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Route exact path="/" component={Home} />

			<Route path="/shop">
				<WowShop />
			</Route>

			<Route path="/about">
				<About />
			</Route>

			<Route path="/busbuild">
				<Build />
			</Route>

			<Route path="/blog1">
				<Blog1 />
			</Route>

			<Route path="/blog2">
				<Blog2 />
			</Route>

			<Route path="/blog3">
				<Blog3 />
			</Route>
			
			<Footer />
		</BrowserRouter>
	);
};

interface AppProps { };

export default App;
