
const ListItem = ({ title, text }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track visibility
  
    const toggleOpen = () => setIsOpen(!isOpen); // Toggle function
  
    return (
      <div>
        <div onClick={toggleOpen} className="flex justify-between items-center cursor-pointer">
          <h3 className="card-title">{title}</h3>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isOpen && (
          <div>
            <p className="white-bg-text">{text}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ListItem;