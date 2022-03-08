import './style.css'
import { ReactComponent as GitIcon } from 'assets/img/giticon.svg';
export default function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSmovie</h1>
                    <a href="https://github.com/gabrielcomassetto">
                        <div className='dsmovie-contact-container'>
                            <GitIcon />
                            <p className='dsmovie-contact-link'>/gabrielcomassetto</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
