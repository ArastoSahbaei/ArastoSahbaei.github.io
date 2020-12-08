import React, { useState } from 'react'
import './MobileNavigation.css'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { BackDrop } from '../../backdrop/BackDrop'

export const MobileNavigation = () => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)

	const displaySideBar = () => {
		return <div>
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
			<BackDrop drawerHandler={setOpenDrawer} />
		</div>
	}

	return (
		<div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			{openDrawer ? displaySideBar() : null}
		</div>
	)
}
