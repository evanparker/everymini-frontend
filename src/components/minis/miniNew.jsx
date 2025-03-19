import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';
import DragAndDrop from './DragAndDrop'
import { apiClient } from '../../services/apiClient';

const MiniNew = () => {

  const [mini, setMini] = useState({name: "", images: []});
  const [name, setName] = useState("");
  const { token } = useUserData();
  const navigate = useNavigate();

  useEffect(()=>{
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const miniData = await apiClient.post(`/minis/`, {...mini, name});
    console.log(miniData);
    navigate(`/minis/${miniData._id}`);
  }

  const addImages = async (publicIds) => {
    let images = mini.images;
    for (let publicId of publicIds) {
      const newImage = await apiClient.post(`/images`, {cloudinaryPublicId: publicId});
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