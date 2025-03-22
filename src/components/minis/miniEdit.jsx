import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useUserData from "../../useUserData";
import DisplayMini from "./displayMini";
import DragAndDrop from "./DragAndDrop";
import { getMini, putMini } from "../../services/mini";
import { postImage } from "../../services/image";
import { Button, HR, Label, TextInput } from "flowbite-react";

const MiniEdit = () => {
  const [mini, setMini] = useState();
  const { token, userId } = useUserData();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const miniData = await getMini(id);
      setMini(miniData);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const miniData = await putMini(mini._id, mini);
    setMini({ ...miniData, images: mini.images });
    navigate(`/minis/${id}`);
  };

  const addImages = async (publicIds) => {
    let images = mini.images;
    for (let publicId of publicIds) {
      const newImage = await postImage({ cloudinaryPublicId: publicId });
      images = [newImage, ...images];
    }
    setMini({ ...mini, images });
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setMini({...mini, name: e.target.value})
  }

  return (
    <>
      {mini && token && userId === mini?.userId && (
        <div>
          <form onSubmit={handleSubmit} className="max-w-lg flex flex-col gap-5">
            <div className=" mb-2 block">
              <Label htmlFor="name1" value="Name" />
              <TextInput
                id="name1"
                type="text"
                value={mini.name}
                onChange={handleNameChange}
              />
            </div>
            <DragAndDrop addImages={addImages} />

            <Button type="submit">Save</Button>
          </form>
          <HR/>
          <DisplayMini mini={mini} />
        </div>
      )}
      {mini && userId !== mini?.userId && (
        <Link to={`/minis/${id}`}>Back to mini</Link>
      )}
      {!token && <Button as={Link} to={`/login`}>Login?</Button>}
    </>
  );
};

export default MiniEdit;
