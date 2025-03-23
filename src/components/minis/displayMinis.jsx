import CldImage from "../CldImage";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const DisplayMinis = ({ minis }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {minis.map((mini) => {
        const publicId = mini?.images[0] && mini?.images[0].cloudinaryPublicId;
        return (
          <Link key={mini._id} to={"/minis/" + mini._id}>
            <Card
              className="w-60 overflow-hidden text-gray-900 dark:text-white"
              renderImage={() => publicId && <CldImage publicId={publicId} />}
            >
              {mini.name}
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

DisplayMinis.propTypes = {
  minis: PropTypes.arrayOf(PropTypes.object),
};
export default DisplayMinis;
