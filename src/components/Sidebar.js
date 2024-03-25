import Link from "./Link";

function Sidebar() {
    const links= [{label: 'Dropdown', path: '/'},
    {label: 'Accordion', path: '/accordion'},
    {label: 'Buttons', path: '/buttons'}]

    const renderedLinks = links.map((link)=>{
        return <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2" className="mb-3" key={link.label} to={link.path}> {link.label} </Link>
    })

return(
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
        {renderedLinks}
    </div>
)
}

export default Sidebar;


