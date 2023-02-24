import Styles from "../../styles/nav.module.scss"

export default function Nav():JSX.Element{
    return(
        <nav id={Styles.nav}>
            <div className={Styles.userOut}>
                <div className={Styles.fcon}>
                    <div className={Styles.imageOut}>

                    </div>
                    <h3 className={Styles.nameInfo}>Bruno Wotzke</h3>
                </div>
            </div>
        </nav>
    )
}