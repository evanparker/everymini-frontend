import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';


const getMini = async (id) => {
  return fetch(import.meta.env.VITE_API_URL + '/minis/' + id, {
    method: 'GET'
  })
    .then(data => data.json());
}

const postMini = async(mini, token) => {
  return fetch(import.meta.env.VITE_API_URL + '/minis/' + mini._id, {
    method: 'PUT',
    headers: new Headers(
      {
        'content-type': 'application/json',
        'authorization': "Bearer " + token
      }
    ),
    body: JSON.stringify(mini)
  })
    .then(data => data.json());
}

const MiniEdit = () => {

  const [mini, setMini] = useState();
  const [name, setName] = useState("");
  const {token} = useUserData();
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async () => {
      const miniData = await getMini(id);
      setMini(miniData);
      setName(miniData.name);
    }
    fetchData();
  },[id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const miniData = await postMini({...mini, name}, token);
    setMini({...miniData, images: mini.images});
    setName(miniData.name);
  }

  return (
    <>
      {mini && 
        <div>
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type="submit">Submit</button>
          </form>

          <DisplayMini mini={mini}/>
        </div>
      }
    </>
  )
}


export default MiniEdit