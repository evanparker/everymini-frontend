import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';
import DragAndDrop from './DragAndDrop'

const postMini = async(mini, token) => {
  return fetch(import.meta.env.VITE_API_URL + '/minis/', {
    method: 'POST',
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


const MiniNew = () => {

  const [mini, setMini] = useState({name: "", images: []});
  const [name, setName] = useState("");
  const { token } = useUserData();
  const navigate = useNavigate();

  useEffect(()=>{
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const miniData = await postMini({...mini, name}, token);
    console.log(miniData);
    navigate(`/minis/${miniData._id}`);
  }

  const addImages = async (publicIds) => {
    let images = mini.images;
    for (let publicId of publicIds) {
      const newImage = await postImage({cloudinaryPublicId: publicId}, token);
      images = [newImage, ...images];
    }
    setMini({...mini, images});
  }

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
    setMini({...mini, name})
  }

  return (
    <>
      {token &&
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name 
              <input type="text" value={name} onChange={handleNameChange}/>
            </label>
            <div><DragAndDrop addImages={addImages}/></div>
            <div>
              <button type="submit">Save</button>
            </div>
          </form>

          <DisplayMini mini={mini}/>
        </div>
      }
      {!token &&
        <Link to={`/login`}>Login?</Link>
      }
    </>
  )
}


export default MiniNew