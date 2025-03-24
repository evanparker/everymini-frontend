import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';
import { deleteMini, getMini } from '../../services/mini';
import { Button } from 'flowbite-react';
import DeleteModal from '../deleteModal';

const Mini = () => {

  const navigate = useNavigate();
  const [mini, setMini] = useState()
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const {token, userId} = useUserData();
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async () => {
      const miniData = await getMini(id);
      setMini(miniData);
    }
    fetchData();
  },[id])

  const handleDeleteMini = async () => {
    const deletedMini = await deleteMini(id);
    if (deletedMini) {
      navigate('/');
    }
  }

  return (
    <>
      <div>
        <DeleteModal show={showDeleteModal} onClose={()=>setShowDeleteModal(false)} onConfirm={handleDeleteMini}/>
        {mini && <DisplayMini mini={mini}/>}
        <div className="flex gap-5">
          {token && userId === mini?.userId && <Button className="max-w-36 mt-5" as={Link} to={"/minis/" + id + "/edit"}>Edit</Button>}
          {token && userId === mini?.userId && <Button color="red" className="max-w-36 mt-5" onClick={()=>setShowDeleteModal(true)}>Delete</Button>}
        </div>
      </div>
    </>
  )
}


export default Mini