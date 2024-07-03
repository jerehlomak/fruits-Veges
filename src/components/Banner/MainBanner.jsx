import { Link } from "react-router-dom"

const MainBanner = ({title}) => {
  return (
    <div className="page-header">
        <h1 class="text-center text-white display-6">{title}</h1>
        <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
            <li class="breadcrumb-item active text-white">{title}</li>
        </ol>
    </div>
  )
}

export default MainBanner