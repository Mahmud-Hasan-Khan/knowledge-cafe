import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1>Knowledge Cafe</h1>
            </div>
            <a href="">
                <img className='w-14 h-14' src="https://i.ibb.co/m6mkBbX/142735917.jpg" alt="profile picture" />
            </a>
        </nav>
    );
};

export default Header;