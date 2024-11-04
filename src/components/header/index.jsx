import coverImage from '../../assets/cover-image.jpg';

function Header(props) {
    return (
        <header className='flex-row space-between px-2'>
            <h1>James Eckman</h1>
            <img src={coverImage} alt="cover image"></img>
            {props.children}    
        </header>
    );
}

export default Header;