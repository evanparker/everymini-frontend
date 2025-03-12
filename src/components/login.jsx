import {useState} from 'react'
import PropTypes from 'prop-types'

async function LoginUser(credentials) {
  return fetch(import.meta.env.VITE_API_URL + '/auth/login',{
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
}

const Login = ({setUserData}) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await LoginUser({
        email,
        password
    })
    
    setUserData(userData)
}

  return (
    <>
      <div>
        <h1>Sign In Here</h1>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input type="text" required placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
          <p>Password</p>
          <input type="password" required placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Submit</button>
          {/* <div>
            <p><input type="checkbox" />Remember Me</p>
          </div> */}
        </form>
      </div>
    </>
  )
}

Login.propTypes = {
  setUserData: PropTypes.func.isRequired
}

export default Login