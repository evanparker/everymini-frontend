import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMinis } from "../../services/mini";
import { Card } from "flowbite-react";
import CldImage from "../CldImage";

const Minis = () => {
  const [minis, setMinis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const minisData = await getMinis();
      setMinis(minisData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Minis</h1>
        <div className="flex flex-wrap gap-4">
          {minis.map((mini) => {
            const publicId =
              mini?.images[0] && mini?.images[0].cloudinaryPublicId;
            return (
              <Link key={mini._id} to={"/minis/" + mini._id}>
                <Card
                  className="max-w-sm overflow-hidden text-gray-900 dark:text-white"
                  renderImage={() => publicId && <CldImage publicId={publicId} />}
                >
                  {mini.name}
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Minis;
