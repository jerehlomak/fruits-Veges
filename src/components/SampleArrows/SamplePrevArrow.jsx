import { FaArrowLeftLong } from "react-icons/fa6";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="position-relative">
            <div className='position-absolute' style={{top: '-50px', right: '90px', zIndex: "10"}}>
                <button onClick={onClick} className="px-4 py-2 border border-secondary rounded-pill bg-white d-flex align-items-center justify-content-center">
                <FaArrowLeftLong size={20} color="#81c408" />
                </button>
            </div> 
        </div>
    );
  }

export default SamplePrevArrow