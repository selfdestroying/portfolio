import { MapPin } from '@phosphor-icons/react'

const Heading = () => {
	const section = {
		width: '340px',
	}
	const container = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '8px',
	}
	return (
		<div style={section}>
			<div style={container}>
				<MapPin size={21} color='var(--green-40)' weight='regular' />
				<h2>St. Petersburg, Russia</h2>
			</div>
		</div>
	)
}

export default Heading
