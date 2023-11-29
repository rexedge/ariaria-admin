import { ACCOUNT_MENU_ITEMS } from '@/src/lib/data';
import React from 'react';
import SidebarMenuItem from './sidebar-menu-item';
import LogoutButton from './logout';
export default function SidebarMenuList() {
	return (
		<>
			{ACCOUNT_MENU_ITEMS.map((a, b) => (
				<SidebarMenuItem
					key={b}
					name={a.name}
					icon={a.icon}
					href={a.href}
				/>
			))}
			<LogoutButton />
		</>
	);
}
