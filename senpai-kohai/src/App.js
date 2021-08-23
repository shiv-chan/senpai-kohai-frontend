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
import ForgotPassword from './features/password/ForgotPassword';
import ResetPassword from './features/password/ResetPassword';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<Route path="/reset-password" component={ResetPassword} />
			</Switch>
		</Router>
	);
}

export default App;
