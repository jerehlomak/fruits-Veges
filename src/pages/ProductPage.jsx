import { Footer, MainBanner, Navbar, Shop } from "../components"


const ProductPage = () => {
  return (
    <div>
        <Navbar />
        <MainBanner title='Products' />
        <Shop />
        <Footer />
    </div>
  )
}

export default ProductPage