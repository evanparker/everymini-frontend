
import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { getMinisByUsername } from '../../services/user';

const User = () => {
  const [minis, setMinis] = useState()
  const { username } = useParams();

  useEffect(()=>{
    const fetchData = async () => {
      const minisData = await getMinisByUsername(username);
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