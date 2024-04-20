import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const ListItem = ({ title, text }) => {
    const [isOpen, setIsOpen] = useState(false); 
  
    const toggleOpen = () => setIsOpen(!isOpen); 
  
    return (
      <div style={{width: "100%"}}>
        <div onClick={toggleOpen} style={{width: "100%"}}  className={`flex justify-between items-center cursor-pointer ${isOpen ? "list-item-shadow" : "list-item"}`}>
          <h3 className="card-title">{title}</h3>
          {isOpen ? <IoIosArrowUp size={28} /> : <IoIosArrowDown size={28}/>}
        </div>
        {isOpen && ( 
          <div style={{width: "100%"}} className="mt-4">
            <p className="white-bg-text">{text}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ListItem;