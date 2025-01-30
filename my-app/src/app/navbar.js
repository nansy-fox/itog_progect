import styles from "../app/styles/Navbar.module.scss"

const Navbar=()=>{
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                webDew
            </div>
            <div className={styles.links}>
                <a>Home</a>
            </div>
        </nav>
    );
};
export default Navbar;