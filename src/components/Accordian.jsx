import { useEffect, useState } from "react";
import services from "../api/services.json";
import { Card } from "./Card";

export const Accordian = () => {
  const [dataApi, setDataApi] = useState([]);
  const [isActiveId, setisActiveId] = useState(null); 
  const handleButton = (id) => {

    setisActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDataApi(services);
  }, []);

  return (
    <div className="main-container">
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {dataApi.map((curElem) => (
          <Card
            key={curElem.id}
            curData={curElem}
            isActive={isActiveId === curElem.id}
            onToggle={() => handleButton(curElem.id)}
          />
        ))}
      </ul>
    </div>
  );
};
