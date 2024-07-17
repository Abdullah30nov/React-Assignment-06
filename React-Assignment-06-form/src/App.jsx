import { useState } from 'react'

import Frame from "./Component/Form/Form"
import Tabel from "./Component/Table/Table"

function App() {
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Org, setOrg] = useState('')
  const [Address, setAddress] = useState('')
  const [Edu, setEdu] = useState('')

  const FirstName = ((e) => { setFname(e.target.value) })
  const LastName = ((e) => { setLname(e.target.value) })
  const WorkEmail = ((e) => { setEmail(e.target.value) })
  const ConPassword = ((e) => { setPassword(e.target.value) })
  const Organization = ((e) => { setOrg(e.target.value) })
  const Addr = ((e) => { setAddress(e.target.value) })
  const Education = ((e) => { setEdu(e.target.value) })

  let [form, setForm] = useState(true);
  const toggleForm = () => {
    setForm(!form);

  }

  return (
    <>
      {form ? <Frame naam={Fname} toggleForm={toggleForm} Lnaam={Lname} mail={Email} pasword={Password} tabka={Org} rehaish={Address} taleem={Edu} FirstName={FirstName} LastName={LastName} WorkEmail={WorkEmail} ConPassword={ConPassword} Organization={Organization} Addr={Addr} Education={Education} /> :
        <Tabel toggleForm={toggleForm} naam={Fname} Lnaam={Lname} mail={Email} tabka={Org} rehaish={Address} taleem={Edu} />}
    </>
  )
}

export default App
