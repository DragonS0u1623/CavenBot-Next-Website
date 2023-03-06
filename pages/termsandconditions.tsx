import Head from 'next/head'
import { title } from '../utils/statics'

export default function TermsAndConditions() {
	return (
		<div>
			<Head>
				<title>{title + 'Terms And Conditions'}</title>
				<meta
					name='description'
					content='Website for CavenBot by Teddy Bear Inc™#1525'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<>
				<h1>Terms and Conditions</h1>
				<p>
					Honestly I&apos;m no lawyer, just please use the bot in the way
					it&apos;s intended and not to annoy, bug or harass others
				</p>
				<h1>Privacy Policy</h1>
				<p>
					CavenBot only stores minimal data for basic functions. Data
					stored are discord IDs and user-input values. CavenBot also
					doesn&apos;t collect or store any personal data, or user data.
				</p>
			</>
		</div>
	)
}
