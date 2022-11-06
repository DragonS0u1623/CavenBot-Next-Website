import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { useSession } from 'next-auth/react'
import Guild from '../../components/guild'
import { Row, Col } from 'react-bootstrap'

export default function Guilds({ guilds  }: any) {
    useSession({ required: true })

    return (
        <div>
            <h1>Your Servers</h1>

            <Row md={4} lg={6} xs={2} className="g-3">
                {guilds.map((guild: any) => (
                    <Col><a href={'/guilds/' + guild.id}><Guild guild={guild} /></a></Col>
                ))}
            </Row>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    let guilds: any[] = []

    await fetch('https://discord.com/api/users/@me/guilds', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session?.accessToken}`
        }
    })
        .then((res) => res.json())
        .then(data => {
            data.map((guild: any) => {
                guilds.push({ id: guild.id, name: guild.name, icon: guild.icon })
            })
        })

    return {
        props: { guilds }
    }
}