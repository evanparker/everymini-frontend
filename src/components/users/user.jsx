import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMinisByUsername, getUserByUsername } from "../../services/user";
import DisplayMinis from "../minis/displayMinis";
import { Avatar } from "flowbite-react";
import CldThumbnailImage from "../images/CldThumbnailImage";
import { HiOutlineUser } from "react-icons/hi";

const User = () => {
  const [minis, setMinis] = useState();
  const [user, setUser] = useState();
  const { username } = useParams();

  useEffect(() => {
    const fetchMinisData = async () => {
      const minisData = await getMinisByUsername(username);
      setMinis(minisData);
    };
    const fetchUserData = async () => {
      const userData = await getUserByUsername(username);
      setUser(userData);
    };
    fetchUserData();
    fetchMinisData();
  }, [username]);

  return (
    <>
      {minis && (
        <div>
          {user && (
            <Avatar
              rounded
              className="mb-5"
              img={(props) => (
                <>
                  {(user.avatar && (
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <CldThumbnailImage
                        publicId={user.avatar?.cloudinaryPublicId}
                        {...props}
                      />
                    </div>
                  )) || (
                    <div className="rounded-full p-2 bg-gray-200 dark:bg-gray-600 dark:text-white">
                      <HiOutlineUser />
                    </div>
                  )}
                </>
              )}
            >
              <div className="space-y-1 font-medium  dark:text-white">
                <div>{username}</div>
                {/* <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div> */}
              </div>
            </Avatar>
          )}
          <DisplayMinis minis={minis} />
        </div>
      )}
    </>
  );
};

export default User;
