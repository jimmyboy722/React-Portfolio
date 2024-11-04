import '../styles/Navbar.css';

const styles = {
    navbarStyle: {
        background: 'red',
        justifyContent: 'center',
    },
    headingStyle: {
        fontSize: '50px',
}
};

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="navbar">
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </nav>
    );
}

export default Navbar;