import Head from 'next/head'
import { title } from '../../../utils/statics'
import { useSession } from 'next-auth/react'

export default function Store() {
	const { status } = useSession({ required: true })
	return (
		<div>
			<Head>
				<title>{title + 'Store'}</title>
				<meta
					name='description'
					content='Website for CavenBot by Teddy Bear Inc™#1525'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<>
                <h1>Store</h1>
				<div>
					
				</div>
			</>
		</div>
	)
}
