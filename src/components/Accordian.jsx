import { useEffect, useState } from "react";
import services from "../api/services.json";
import { Card } from "./Card";

export const Accordian = () =>{
    const [dataApi , setDataApi] = useState([]);
    const [isActiveId , setisActiveId] = useState(false);

    const handleButton =(id) =>{
        setisActiveId((prevId) => (prevId === id ? "false" : id))
    }


        useEffect(() =>{
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDataApi(services);
            console.log(services);

        },[])
    return (
        <div>
            <h1>The Accordian</h1>
            <ul className="section-accordion">
                {
                    dataApi.map((curElem) =>{
                        return (
                            <Card
                            key={curElem.id}
                            curData={curElem}
                             isActive={isActiveId === curElem.id}
                             onToggle={() => handleButton(curElem.id)}

                             />
                        )
                    })
                }
            </ul>
        </div>
    );
}
