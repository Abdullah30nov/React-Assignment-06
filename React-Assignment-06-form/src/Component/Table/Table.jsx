import Table from 'react-bootstrap/Table';
import styles from '../Form/Form.module.css'
import PropTypes from 'prop-types'
function Tabel({ naam="-ecwer", Lnaam="ewcecf", mail, tabka, rehaish, taleem, toggleForm }) {
    return (
        <div>
            <Table responsive="xl" className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Organization</th>
                        <th>Address</th>
                        <th>Education</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <tr>
                        <td>1</td>
                        <td>{naam} </td>
                        <td>{Lnaam} </td>
                        <td>{mail} </td>
                        <td>{tabka} </td>
                        <td>{rehaish} </td>
                        <td>{taleem} </td>
                    </tr>
                </tbody>
            </Table>
            <button className={styles.submit_btn} onClick={toggleForm}>Go to Form</button>

        </div>
    );
}
Tabel.propTypes={
    naam:PropTypes.string,
    Lnaam:PropTypes.string,
    mail:PropTypes.string,
    rehaish:PropTypes.string,
    taleem:PropTypes.string,
    tabka:PropTypes.string,
}

export default Tabel;