import { Link } from "react-router-dom"
import ProductCart from "../components/productCart"

const Home = () => {

  const addToCartHandler = ()=> {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCart
          productId="ljkjl"
          name="Macbook"
          price={456}
          stock={56}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/41O9cWcDakL._AC_.jpg"


        />
      </main>
    </div>
  )
}

export default Home