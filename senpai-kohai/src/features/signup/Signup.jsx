import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import terms from '../../assets/undraw_Terms_re_6ak4.svg';
import {
	FaGoogle,
	FaLinkedinIn,
	AiFillEyeInvisible,
	AiFillEye,
} from 'react-icons/all';

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [agreed, setAgreed] = useState(false);
	const [openEye, setOpenEye] = useState(false);

	return (
		<div className="signup">
			<article className="signup-left">
				<h2>Let's Get Started</h2>
				<img src={terms} alt="terms" />
				<p>Find your guide, Support youngs</p>
			</article>
			<article className="signup-right">
				<section className="display">
					<h1>Create an Acount</h1>
					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>
					<section className="sso">
						<button>
							<FaGoogle style={{ fontSize: '1.5rem', marginRight: '1rem' }} />{' '}
							Sign up with Google
						</button>
						<button>
							<FaLinkedinIn
								style={{ fontSize: '1.5rem', marginRight: '1rem' }}
							/>{' '}
							Sign up with LinkedIn
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

						<label for="agreement">
							<input
								type="checkbox"
								name="agreement"
								id="agreement"
								checked={agreed}
								onChange={() => setAgreed(!agreed)}
							/>
							I agree to Senpai Kohai’s <Link>Terms of Service</Link> and{' '}
							<Link>Privacy Policy</Link>
						</label>
						<button type="submit" onClick={(e) => e.preventDefault()}>
							Sign Up
						</button>
					</form>
				</section>
			</article>
		</div>
	);
}

export default Signup;
