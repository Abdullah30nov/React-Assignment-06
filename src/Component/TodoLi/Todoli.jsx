import styles from './Todoli.module.css'
import { RxCrossCircled } from "react-icons/rx";

const Todoli=({text})=>{
    return(
        <>
        <div className={styles.main_div}>
            <h3><RxCrossCircled/></h3>
            
        <li>{text}</li>
        </div>
        </>
    )
}
export default Todoli;