import '../styles/Header.css';
const styles = {
    headerStyle: {
        background: 'green',
    },
    headingStyle: {
        fontSize: '50px',
}
};


function Header(props) {

    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>James Eckman</h1>
        </header>
    );
}

export default Header;
