export const NavbarItem = ({ title, classProps }) => (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
)

export const SideBarItem = ({ icon, title }) => (
    <li className={`mb-6 cursor-pointer`}>
        {icon}
        <a>
            {title}
        </a>
    </li>
)
