import { Cart, Footer, MainBanner, Navbar } from "../components"

const CartPage = () => {
  return (
    <>
      <Navbar />
      <MainBanner title='Cart' />
      <Cart />
      <Footer />
    </>
  )
}

export default CartPage