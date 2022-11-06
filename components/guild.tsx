import Image from 'next/image'
import Card from 'react-bootstrap/Card'

export default function Guild({ guild }: any) {
	const guildIconPNG = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
	const guildIconGIF = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.gif`
	let guildIcon = '/CavenBot.png'
	if (guild.icon != null)
		guildIcon = guild.icon.startsWith('a_') ? guildIconGIF : guildIconPNG

	return (
		<Card className='shadow-lg' style={{ margin: '0 1rem' }}>
			<Card.Img src={guildIcon} />
			<Card.Body>
				<Card.Title>{guild.name}</Card.Title>
			</Card.Body>
		</Card>
	)
}
