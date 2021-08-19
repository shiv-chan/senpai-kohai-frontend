import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mypassword from '../../assets/undraw_my_password_d6kg.svg';

function ForgotPassword() {
	const [email, setEmail] = useState('');

	return (
		<div className="forgotpw">
			<article className="forgotpw-left">
				<h2>Come Back Now!</h2>
				<img src={mypassword} alt="mypassword" />
				<p>Find your guide, Support youngs</p>
			</article>
			<article className="forgotpw-right">
				<h1>Forgot password?</h1>
				<form for="" method="">
					<label for="email">Email address</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
					<button type="submit" onClick={(e) => e.preventDefault()}>
						Send
					</button>
					<Link to="/login">Back to login</Link>
				</form>
			</article>
		</div>
	);
}

export default ForgotPassword;
