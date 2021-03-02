import './BackDrop.css'

export const BackDrop = (props: { drawerHandler?: (closeDrawer: boolean) => void }): JSX.Element => {
	const { drawerHandler } = props

	return <div onClick={() => drawerHandler ? drawerHandler(false) : null} className={'BackDrop'} />
}
