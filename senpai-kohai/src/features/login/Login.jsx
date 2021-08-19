import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import workspace from '../../assets/undraw_shared_workspace_hwky.svg';
import {
	FaGoogle,
	FaLinkedinIn,
	AiFillEyeInvisible,
	AiFillEye,
} from 'react-icons/all';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const [openEye, setOpenEye] = useState(false);

	return (
		<div className="login">
			<article className="login-left">
				<h2>Let's Get Started</h2>
				<img src={workspace} alt="workspace" />
				<p>Find your guide, Support youngs</p>
			</article>
			<article className="login-right">
				<h1>Login</h1>
				<p>
					Not registered yet? <Link to="/signup">Create an account</Link>
				</p>
				<section className="sso">
					<button>
						<FaGoogle style={{ fontSize: '1.5rem', marginRight: '1rem' }} />{' '}
						Sign in with Google
					</button>
					<button>
						<FaLinkedinIn style={{ fontSize: '1.5rem', marginRight: '1rem' }} />{' '}
						Sign in with LinkedIn
					</button>
				</section>
				<hr />
				<form for="" method="">
					<label for="email">Email address</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
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
								top: '14.5rem',
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
								top: '14.5rem',
								right: '1rem',
								cursor: 'pointer',
							}}
						/>
					)}

					<label for="remember-me">
						<input
							type="checkbox"
							name="remember-me"
							id="remember-me"
							checked={remember}
							onChange={() => setRemember(!remember)}
						/>
						Remember me <Link to="/forgot-password">Forgot password?</Link>
					</label>
					<button type="submit" onClick={(e) => e.preventDefault()}>
						Login
					</button>
				</form>
			</article>
		</div>
	);
}

export default Login;
