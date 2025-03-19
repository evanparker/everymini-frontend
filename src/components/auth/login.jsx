import {useState} from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../services/apiClient';

const Login = ({setUserData}) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await apiClient.post(`/auth/login`, {
        email,
        password
    })
    
    setUserData(userData)
    navigate('/');
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