import Head from 'next/head'
import { title } from '../utils/statics'
import commands from '../data/commands.json'
import Group from '../components/group'

export default function Commands() {
	return (
		<div>
			<Head>
				<title>{title + 'Commands'}</title>
				<meta
					name='description'
					content='Website for CavenBot by Teddy Bear Inc™#1525'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<>
				<h1>Commands</h1>
				<p>
					All of these commands are discord Slash Commands, and as
					such have auto-complete and templating for the arguments
					that you can input.
					<br />
					Commands with arguments are formatted as following: <br />
					<code>&lt;arg&gt;</code> - These are optional arguments
					<br />
					<code>[arg]</code> - These are required arguments
				</p>

                <div>
                    {commands.groups.map(group => (<Group group={group} key={group.name} />))}
                </div>
			</>
		</div>
	)
}