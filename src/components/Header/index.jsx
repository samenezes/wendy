import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Wendy Dias</span>
            </Link>
            <nav>
                <p>abcdefg</p>
            </nav>
        </header>
    )    
}

export default Header
