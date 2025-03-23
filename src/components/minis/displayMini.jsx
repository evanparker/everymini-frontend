import CldImage from "../CldImage";
import PropTypes from "prop-types";

const DisplayMini = ({ mini }) => {
  return (
    <div>
      <h1 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mini?.name || "Untitled Mini"}</h1>
      <div className="mt-5 flex flex-wrap gap-4">
        {mini?.images?.map((img) => (
          <div key={img._id} className="max-w-md flex rounded-lg border overflow-hidden border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <CldImage publicId={img.cloudinaryPublicId} />
          </div>
        ))}
      </div>
    </div>
  );
};

DisplayMini.propTypes = {
  mini: PropTypes.object,
};
export default DisplayMini;
