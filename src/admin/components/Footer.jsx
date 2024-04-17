import { __ } from '@wordpress/i18n';

export default function Footer() {
	return <footer className="bg-background mt-auto">
		<div className="w-full p-4 md:flex md:items-center md:justify-between">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© { new Date().getFullYear() } <a href="https://flowbite.com/" className="hover:underline">{ __( "Carbon Plugins", 'carbon-blocks' ) }</a>. { __( "All Rights Reserved", 'carbon-blocks' ) }.
		</span>
		<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
			<li className="mb-0">
				<a href="https://carbon-plugins.com/plugins/carbon-blocks/" target="_blank" className="mr-4 hover:underline md:mr-6 hover:text-blue-500 dark:hover:text-white">{ __( "Buy a license", 'carbon-blocks' ) }</a>
			</li>
			<li className="mb-0">
				<a href="https://carbon-plugins.com/support/" target="_blank" className="mr-4 hover:underline md:mr-6 hover:text-blue-500 dark:hover:text-white">{ __( "Support", 'carbon-blocks' ) }</a>
			</li>
			<li className="mb-0">
				<a href="https://carbon-plugins.com/contact/" target="_blank" className="hover:underline md:mr-6 hover:text-blue-500 dark:hover:text-white">{ __( "Contact us", 'carbon-blocks' ) }</a>
			</li>
			<li className="mb-0">
				<a href="https://wordpress.org/support/plugin/carbon-blocks/reviews/#new-post" target="_blank" className="mr-4 hover:underline hover:text-blue-500 dark:hover:text-white">{ __( "Review", 'carbon-blocks' ) }</a>
			</li>
		</ul>
		</div>
	</footer>
}
