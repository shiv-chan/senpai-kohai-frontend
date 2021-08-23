import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mypassword from '../../assets/undraw_my_password_d6kg.svg';

function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [isSent, setIsSent] = useState(false);

	return (
		<div className="forgotpw">
			<article className="forgotpw-left">
				<h2>Come Back Now!</h2>
				<img src={mypassword} alt="mypassword" />
				<p>Find your guide, Support youngs</p>
			</article>
			<article className="forgotpw-right">
				<section className="display">
					<h1>Forgot password?</h1>
					<form for="" method="">
						{isSent ? (
							<>
								<p>Please check your email to create a new password.</p>
								<p style={{ marginTop: '1rem' }}>Thank you!</p>
							</>
						) : (
							<>
								<label for="email">Email address</label>
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.currentTarget.value)}
								/>
								<button
									type="submit"
									onClick={(e) => {
										e.preventDefault();
										setIsSent(true);
									}}
								>
									Send
								</button>
							</>
						)}
						<Link to="/login">Back to login</Link>
					</form>
				</section>
			</article>
		</div>
	);
}

export default ForgotPassword;
