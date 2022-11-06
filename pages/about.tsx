import Head from 'next/head'
import { title } from '../utils/statics'

export default function About() {
	return (
		<div>
			<Head>
				<title>{title + 'About'}</title>
				<meta
					name='description'
					content='Website for CavenBot by Teddy Bear Inc™#1525'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<>
				<h1>What is CavenBot?</h1>
				<p>
					CavenBot is a multi-purpose discord bot. It runs most core
					functions off of the Java Discord API (JDA), but it will
					eventually get an increase in functionality that will let it
					be integrated with many web APIs like Destiny, and Twitch
					APIs.
				</p>
				<br />
				<h3>What can it do?</h3>
				<p>
					CavenBot can post join/leave logs, set up reaction roles,
					handle basic admin commands like clear chat, kick, ban and
					unban.
				</p>
				<br />
				<h3>About the Creator</h3>
				<p>
					Hello! I'm Jordan, the creator of CavenBot and this site! I
					started this bot project as a side project while I was bored
					in my classes during college. This project was originally a
					way for me to get used to Python and as a way to get into
					multi-language projects, which then became a passion project
					as I wanted to add more functionality to it. After a while
					it became obvious for me to rewrite the bot for more
					functionality and better stability, so I rewrote it into
					Java and Python for a while, then reducing it down to Java,
					and now as I become more practiced I am once again rewriting
					the bot to function with a webserver and have a modular
					approach to commands.
				</p>
			</>
		</div>
	)
}
