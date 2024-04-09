import { House } from '@phosphor-icons/react'

export default function SocialIcon() {
	const socialIcon = {
		width: 42,
		height: 42,
	}

	const socialIconContainer = {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'var(--dark-10)',
		borderRadius: 14,
	}
	const socialIconLink = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		borderRadius: 14,
	}
	const dot = {
		width: 14,
		height: 2,
		borderRadius: 6,
		backgroundColor: 'var(--purple-80)',
		opacity: 0,
	}
	return (
		<div style={socialIcon}>
			<div style={socialIconContainer}>
				<a href='#' style={{ ...socialIconLink, flexDirection: 'column' }}>
					<House size={16} color='var(--purple-80)' weight='regular' />
					<div style={dot}></div>
				</a>
			</div>
		</div>
	)
}
