import { FaArrowRightLong } from "react-icons/fa6";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='position-absolute' style={{top: '-50px', right: '0px', zIndex: "10"}}>
        <button onClick={onClick} className="px-4 py-2 border border-secondary rounded-pill bg-white d-flex align-items-center justify-content-center">
          <FaArrowRightLong size={20} color="#81c408" />
        </button>
      </div> 
    );
  }

export default SampleNextArrow