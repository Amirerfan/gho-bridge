import {ConnectKitButton} from "connectkit";


export const Navbar = () => {
	return (
		<nav className='h-16 w-full bg-primary-light flex items-center justify-end px-6'>
			<ConnectKitButton/>
		</nav>
	);
}