import { Col, Row, Card, ListGroup } from 'react-bootstrap'

type Subcommand = {
	name: string
	description: string
	usage: string
}

type Command = {
	name: string
	description: string
	aliases: string[] | null
	subcommands: Subcommand[] | null
	usage: string | null
}

function formatUsage(usage: string) {
	return (
		<>
			<code>/</code>{usage}
		</>
	)
}

export default function Group(props: any) {
    return (
        <div>
            <h3>{props.group.name}</h3>
            <Row md={2} lg={3} xs={1} className="g-3">
				{props.group.commands.map((command: Command) => (
					<Col>
						<Card className="shadow-lg">
							<Card.Body>
								<Card.Title style={{ color: '#EE0b0b', textAlign: 'center' }}>{command.name}</Card.Title>
								<Card.Subtitle style={{ textAlign: 'center' }} className="text-muted">Aliases: {command.aliases ? command.aliases.join(', ') : 'None'}</Card.Subtitle>
								<Card.Text>{command.description}</Card.Text>
								{command.subcommands ? <Card.Text>Subcommands</Card.Text> : null}
								{command.subcommands ? <ListGroup>{command.subcommands.map(subcommand => (
									<ListGroup.Item>{subcommand.name}<br/>{subcommand.description}<br/><code>/</code>{subcommand.usage}</ListGroup.Item>
								))}</ListGroup> : null}
							</Card.Body>
							{command.usage ? <Card.Footer style={{ textAlign: 'center' }}>{formatUsage(command.usage)}</Card.Footer> : null}
						</Card>
					</Col>
				))}
			</Row>
        </div>
    )
}