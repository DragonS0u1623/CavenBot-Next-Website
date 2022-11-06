import styles from '../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
				<a href='termsandconditions'>Terms and Conditions</a>
			</footer>
        </>
    )
}