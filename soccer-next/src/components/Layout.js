import styles from "../styles/Nav.module.css"
import Nav from "./Nav"
export default function Layout({children}){
return(
    <>
    <Nav/>
    <div className = {styles.container}>
    <main className={styles.main}>{children}</main>
    </div>
    </>
);

}