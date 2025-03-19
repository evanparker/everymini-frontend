import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';


const getMini = async (id) => {
  return fetch(import.meta.env.VITE_API_URL + '/minis/' + id, {
    method: 'GET'
  })
    .then(data => data.json());
}

const Mini = () => {

  const [mini, setMini] = useState()
  const {token, userId} = useUserData();
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async () => {
      const miniData = await getMini(id);
      setMini(miniData);
    }
    fetchData();
  },[id])

  return (
    <>
      <div>
        {mini && <DisplayMini mini={mini}/>}
        {token && userId === mini?.userId && <div><Link to={"/minis/" + id + "/edit"}>Edit</Link></div>}
      </div>
    </>
  )
}


export default Mini