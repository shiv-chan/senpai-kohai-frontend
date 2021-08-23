import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mypassword from '../../assets/undraw_my_password_d6kg.svg';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/all';

function ResetPassword() {
	const [password, setPassword] = useState('');
	const [openEye, setOpenEye] = useState(false);

	return (
		<div className="forgotpw">
			<article className="forgotpw-left">
				<h2>Come Back Now!</h2>
				<img src={mypassword} alt="mypassword" />
				<p>Find your guide, Support youngs</p>
			</article>
			<article className="forgotpw-right">
				<section className="display">
					<h1>Create a new password</h1>
					<form for="" method="">
						<label for="password">Password</label>
						<input
							type={openEye ? 'text' : 'password'}
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
						{openEye ? (
							<AiFillEye
								onClick={() => setOpenEye(false)}
								style={{
									fontSize: '2.5rem',
									color: '#424874',
									position: 'absolute',
									top: '4.5rem',
									right: '1rem',
									cursor: 'pointer',
								}}
							/>
						) : (
							<AiFillEyeInvisible
								onClick={() => setOpenEye(true)}
								style={{
									fontSize: '2.5rem',
									color: '#424874',
									position: 'absolute',
									top: '4.5rem',
									right: '1rem',
									cursor: 'pointer',
								}}
							/>
						)}
						<button type="submit" onClick={(e) => e.preventDefault()}>
							Create
						</button>
						<Link to="/login">Back to login</Link>
					</form>
				</section>
			</article>
		</div>
	);
}

export default ResetPassword;
