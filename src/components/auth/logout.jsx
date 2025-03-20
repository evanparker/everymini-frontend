import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { postLogout } from '../../services/auth';

const Logout = ({resetUserData}) => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLogout({});
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