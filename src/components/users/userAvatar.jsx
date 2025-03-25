import { HiOutlineUser } from "react-icons/hi";
import CldThumbnailImage from "../images/CldThumbnailImage";
import { Avatar } from "flowbite-react";
import PropTypes from "prop-types";

const UserAvater = ({ user }) => {
  return (
    <>
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
                    width={40}
                    height={40}
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
            <div>{user.username}</div>
            {/* <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div> */}
          </div>
        </Avatar>
      )}
    </>
  );
};
UserAvater.propTypes = {
  user: PropTypes.object,
};
export default UserAvater;
