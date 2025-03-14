import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CldImage from './CldImage';
import useUserData from '../useUserData';


const getMini = async (id) => {
  return fetch(import.meta.env.VITE_API_URL + '/minis/' + id, {
    method: 'GET'
  })
    .then(data => data.json());
}

const Mini = () => {

  const [mini, setMini] = useState()
  const {token} = useUserData();
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
        <h1>Mini {mini?._id}</h1>
        <ul>
          {mini?.images?.map( img => <li key={img._id}>
              <CldImage publicId={img.cloudinaryPublicId}/>
            </li>)}
        </ul>
        {token && <div>Edit</div>}
      </div>
    </>
  )
}


export default Mini