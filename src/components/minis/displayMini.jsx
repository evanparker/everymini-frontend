import CldImage from "../CldImage";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";

const DisplayMini = ({ mini }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mini?.name || "Untitled Mini"}</h1>
      <div className="flex flex-wrap gap-4">
        {mini?.images?.map((img) => (
          <Card
            className="max-w-sm overflow-hidden"
            key={img._id}
            renderImage={() => <CldImage publicId={img.cloudinaryPublicId} />}
          ></Card>
        ))}
      </div>
    </div>
  );
};

DisplayMini.propTypes = {
  mini: PropTypes.object,
};
export default DisplayMini;
