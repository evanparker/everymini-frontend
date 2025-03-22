import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMinisByUsername } from "../../services/user";
import CldImage from "../CldImage";
import { Card } from "flowbite-react";

const User = () => {
  const [minis, setMinis] = useState();
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const minisData = await getMinisByUsername(username);
      setMinis(minisData);
    };
    fetchData();
  }, [username]);

  return (
    <>
      {minis && (
        <div>
          <h1>Minis for {username}</h1>
          <div className="flex flex-wrap gap-4">
            {minis.map((mini) => {
              const publicId =
                mini?.images[0] && mini?.images[0].cloudinaryPublicId;
              return (
                <Link key={mini._id} to={"/minis/" + mini._id}>
                  <Card
                    className="max-w-sm overflow-hidden text-gray-900 dark:text-white"
                    renderImage={() =>
                      publicId && <CldImage publicId={publicId} />
                    }
                  >
                    {mini.name}
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default User;
