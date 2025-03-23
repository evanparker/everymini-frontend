import { useEffect, useState } from "react";
import { getMinis } from "../../services/mini";
import DisplayMinis from "./displayMinis";

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
        <h1 className="text-3xl text-gray-900 dark:text-white">Minis</h1>
        <DisplayMinis minis={minis}/>
      </div>
    </>
  );
};

export default Minis;
