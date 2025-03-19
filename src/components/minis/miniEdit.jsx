import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';
import DragAndDrop from './DragAndDrop'


const getMini = async (id) => {
  return fetch(import.meta.env.VITE_API_URL + '/minis/' + id, {
    method: 'GET'
  })
    .then(data => data.json());
}

const putMini = async(mini, token) => {
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

const postImage = async(imageObj, token) => {
  return fetch(import.meta.env.VITE_API_URL + '/images/', {
    method: 'POST',
    headers: new Headers(
      {
        'content-type': 'application/json',
        'authorization': "Bearer " + token
      }
    ),
    body: JSON.stringify(imageObj)
  })
    .then(data => data.json());
}


const MiniEdit = () => {

  const [mini, setMini] = useState();
  const [name, setName] = useState("");
  const { token, userId } = useUserData();
  const { id } = useParams();
  const navigate = useNavigate();

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
    const miniData = await putMini({...mini, name}, token);
    setMini({...miniData, images: mini.images});
    setName(miniData.name);
    navigate(`/minis/${id}`);
  }

  const addImages = async (publicIds) => {
    let images = mini.images;
    for (let publicId of publicIds) {
      const newImage = await postImage({cloudinaryPublicId: publicId}, token);
      images = [newImage, ...images];
    }
    setMini({...mini, images});
  }

  return (
    <>
      {mini && token && userId === mini?.userId &&
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name 
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <div><DragAndDrop addImages={addImages}/></div>
            <div>
              <button type="submit">Save</button>
            </div>
          </form>

          <DisplayMini mini={mini}/>
        </div>
      }
      {mini && userId !== mini?.userId &&
        <Link to={`/minis/${id}`}>Back to mini</Link>
      }
      {!token &&
        <Link to={`/login`}>Login?</Link>
      }
    </>
  )
}


export default MiniEdit