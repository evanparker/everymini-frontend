import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getMinis } from '../../services/mini';

const Minis = () => {

  const [minis, setMinis] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const minisData = await getMinis();
      setMinis(minisData);
    }
    fetchData();
    
  },[])

  return (
    <>
      <div>
        <h1>Minis</h1>
        <ul>
          {minis?.map( m => <li key={m._id}><Link to={'/minis/' + m._id}>{m.name || m._id}</Link></li>)}
        </ul>
      </div>
    </>
  )
}


export default Minis