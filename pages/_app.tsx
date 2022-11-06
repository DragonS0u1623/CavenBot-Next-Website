import '../styles/base.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { SSRProvider } from 'react-bootstrap'
import { SessionProvider } from 'next-auth/react'
import Layout from '../components/layout'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
	return (
		<SessionProvider session={session}>
			<SSRProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SSRProvider>
		</SessionProvider>
	)
}
