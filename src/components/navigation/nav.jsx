


function Navigation({currentPage}) {
    const links = [ 'portfolio', 'resume', 'contact me'];
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2" ${currentPage === '/' && 'navActive'} key='about me'>
                    <a href="/">About Me</a>
                </li>
                {links.map((link) => (
                    <li className="mx-2" ${currentPage === `/${link}` && 'navActive'} key={link}>
                        <a href={`/${link}`}>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
} 

export default Navigation;