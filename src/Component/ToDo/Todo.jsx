import { useState } from 'react'
import styles from './Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCirclePlus } from "react-icons/fa6";
import Todoli from '../TodoLi/Todoli';

// import { IoIosAddCircle } from "react-icons/io";

const TodoApp=()=>{
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    const [Delete, setDelete] = useState([])
        const Inputval=(e)=>{
            setInput(e.target.value)
        }
        const Additem=()=>{
            setItems((olditems)=>{
                return [...olditems , input]
            })
            setInput('');
        }
    return(
        <>
        <div className={styles.main_div}>
            <div className={styles.center_div}>
                <h1 className={styles.heading}>ToDo List</h1><br />

                <input type="text" value={input} placeholder='Add a item' className={styles.input} onChange={Inputval}/>
                <button className={styles.btn} onClick={Additem}><FaCirclePlus />
                </button>
                <ul className={styles.ul}>
                    {
                        items.map((e)=>{
                            return  <Todoli text={e}/>
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default TodoApp