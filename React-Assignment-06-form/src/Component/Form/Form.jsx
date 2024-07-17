import styles from './Form.module.css'
const Frame = ({ FirstName, LastName, WorkEmail, ConPassword, Organization, Addr, Education, toggleForm }) => {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Center_div}>
                    <h1 className={styles.Form_heading}>Registration Form</h1>
                    <form className={styles.Inputs_div}>
                    <div className={styles.name_inputs}>
                        <span>
                            <label htmlFor="Name">First Name:</label><br />
                            <input type="name" id="Name" placeholder="John" onChange={FirstName} /><br />
                        </span>
                        <span>
                            <label htmlFor="LName">Last Name:</label><br />
                            <input type="name" id="LName" placeholder="Doe" onChange={LastName} />
                        </span>
                    </div>

                    <div className={styles.Other_inputs}>
                        <span>
                            <label htmlFor="email">Work Email:</label><br />
                            <input type="email" id="email" placeholder="John@doe.com" onChange={WorkEmail} />
                        </span>
                        <span>
                            <label htmlFor="Password">Password</label><br />
                            <input type="password" id="Password" placeholder="Password" onChange={ConPassword} />
                        </span>
                        <span>
                            <label htmlFor="Organization">Organization Name:</label><br />
                            <input type="text" id="Organization" placeholder="ABC Organization" onChange={Organization} />
                        </span>
                        <span>
                            <label htmlFor="Address">Address:</label><br />
                            <input type="address" id="Address" placeholder="Address" onChange={Addr} />
                        </span>
                        <span>
                            <label htmlFor="Education">Education:</label><br />
                            <input type="text" id="Education" placeholder="Last Education" onChange={Education} />
                        </span>
                        <span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis dolores. Placeat sunt praesentium dolor officia optio nulla quaerat nam deserunt fugiat rem, dicta iure assumenda minus qui quasi aliquam.</p>
                        </span>
                        <button className={styles.submit_btn} onClick={toggleForm}>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Frame