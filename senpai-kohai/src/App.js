import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from 'react-router-dom';
import Home from './features/Home';
import Signup from './features/signup/Signup';
import Login from './features/login/Login';
import ForgotPassword from './features/signup/ForgotPassword';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/forgot-password" component={ForgotPassword} />
			</Switch>
		</Router>
	);
}

export default App;
