import SVG_back from "./SVG_voltar"

import Styles from "../../styles/nav.module.scss"
export default function Nav():JSX.Element{
    return(
        <nav id={Styles.nav}>
            <div className={Styles.userOut}>
                <div className={Styles.imageOut}></div>
            </div>
        </nav>
    )
}