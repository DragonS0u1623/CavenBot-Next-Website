import {
	Navbar as NavbarBS,
	Container,
	Nav,
	Button,
	NavDropdown
} from 'react-bootstrap'
import { useSession, signIn, signOut } from 'next-auth/react'
import ProfileShortcut from './profileShortcut'
import Image from 'next/image'

export default function Navbar() {
	const { data: session } = useSession()

	return (
		<NavbarBS sticky='top' bg='dark' variant='dark' expand='lg' className='shadow-sm mb-3'>
			<Container fluid>
				<NavbarBS.Brand href='/'>
					<Image width='75' height='75' className='d-inline-block align-top' src='/Cavenbot.png' alt='' />
				</NavbarBS.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/about'>About</Nav.Link>
					<Nav.Link href='/commands'>Commands</Nav.Link>
					<Nav.Link href='/guilds'>Servers</Nav.Link>
				</Nav>
				{session ? (
					<NavDropdown title={<ProfileShortcut user={session.user} />} id='navbarScrollingDropdown' menuVariant='dark' navbar={true}>
						<NavDropdown.Item>Coming soon...</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={() => signOut()}>
							Sign Out
						</NavDropdown.Item>
					</NavDropdown>
				) : (
					<Button onClick={() => signIn()} variant='outline-light'>
						Login
					</Button>
				)}
			</Container>
		</NavbarBS>
	)
}
