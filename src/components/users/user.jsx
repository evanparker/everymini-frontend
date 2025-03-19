
import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

const getUserMinis = async (username) => {
  return fetch(import.meta.env.VITE_API_URL + '/users/' + username + '/minis', {
    method: 'GET'
  })
    .then(data => data.json());
}


const User = () => {
  const [minis, setMinis] = useState()
  const { username } = useParams();

  useEffect(()=>{
    const fetchData = async () => {
      const minisData = await getUserMinis(username);
      setMinis(minisData);
    }
    fetchData();
  },[username])

  return <>
    {minis && <div>
      <h1>Minis for {username}</h1>
        {minis.map( m => <li key={m._id}><Link to={'/minis/' + m._id}>{m.name || "untitled mini"}</Link></li>)}
      </div>}
  </>
}

export default User;