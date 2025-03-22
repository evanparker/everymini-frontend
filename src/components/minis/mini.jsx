import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import useUserData from '../../useUserData';
import DisplayMini from './displayMini';
import { getMini } from '../../services/mini';
import { Button } from 'flowbite-react';

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
        {token && userId === mini?.userId && <Button className="max-w-sm" as={Link} to={"/minis/" + id + "/edit"}>Edit</Button>}
      </div>
    </>
  )
}


export default Mini