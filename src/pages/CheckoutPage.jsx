import { CheckOut, Footer, MainBanner, Navbar } from "../components"


const CheckoutPage = () => {
  return (
    <>
        <Navbar />
        <MainBanner title='Checkout' />
        <CheckOut />
        <Footer />
    </>
  )
}

export default CheckoutPage