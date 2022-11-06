import Head from 'next/head'
import { title } from '../utils/statics'

export default function Home() {
	return (
		<div>
			<Head>
				<title>{title + 'Home'}</title>
				<meta
					name='description'
					content='Website for CavenBot by Teddy Bear Inc™#1525'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<>
				<h1>CavenBot</h1>
				<p>Another general discord bot to fit all your needs</p>
			</>
		</div>
	)
}
