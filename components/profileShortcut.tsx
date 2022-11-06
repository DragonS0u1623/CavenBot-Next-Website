import Image from 'next/image'

export default function ProfileShortcut({ user }: any) {
	return (
		<div style={{ display: 'inline-flex' }}>
			<Image src={user.image} alt="" width="75" height="75" className='d-inline-block align-top' />
			<p style={{ color: 'white', textAlign: 'center' }}>{user.name}</p>
		</div>
	)
}
