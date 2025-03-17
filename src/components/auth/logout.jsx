import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

async function LogoutUser(token) {
  return fetch(import.meta.env.VITE_API_URL + '/auth/logout',{
    method: 'POST',
    headers: new Headers(
      {
        'content-type': 'application/json',
        'authorization': "Bearer " + token
      }
    )
  })
    .then(data => data.json());
}

const Logout = ({token, resetUserData}) => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await LogoutUser(token);
    resetUserData();
    navigate('/');
}

  return (
    <>
      <div>
        <h1>Sign Out Here</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

Logout.propTypes = {
  resetUserData: PropTypes.func.isRequired,
  token: PropTypes.string
}

export default Logout