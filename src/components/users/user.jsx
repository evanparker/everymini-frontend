import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMinisByUsername } from "../../services/user";
import DisplayMinis from "../minis/displayMinis";
import { Avatar } from "flowbite-react";

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
          <Avatar rounded className="mb-5">
            <div className="space-y-1 font-medium dark:text-white">
              <div>{username}</div>
              {/* <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div> */}
            </div>
          </Avatar>
          <DisplayMinis minis={minis} />
        </div>
      )}
    </>
  );
};

export default User;
