
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

export const Menu = ({ links, currentPath, pageId = "", className = "" }) => {
  const currentPage = "text-primary border-primary active hover:text-primary focus:text-primary !focus:outline-transparent";
  const otherPage = "border-transparent hover:text-gray-600 focus:text-gray-600 hover:border-gray-300 hover:text-primary !focus:outline-transparent";

	return <ul className={ `flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ${className}` }>
		{
			links.map((link) => {
				return <li className="mr-2 mb-0" key={link.name} id={ link.name }>
					<NavLink to={ pageId + link.path } className={clsx(currentPath.pathname == link.path ? currentPage : otherPage, "border-b inline-flex py-6 px-4 border-b-2 group h-16 items-center")}>
						{ link.icon}
						{ link.name }
					</NavLink>
				</li>
			})
		}
	</ul>
}
