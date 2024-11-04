function Footer() {
    const icons = [
        {
            name: "github",
            link: "https://github.com/jimmyboy722",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/james-eckman",
        },
    ];

    return (
        <footer className="flex-row px-2">
            {icons.map((icon) => 
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
                    <i className={icon.name}></i>
                </a>
            )
            )}
        </footer>
    );
}

export default Footer;