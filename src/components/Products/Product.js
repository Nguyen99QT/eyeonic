import ProductComparison from './ProductComparison/ProductComparison'
import Products from './Product.json'

function Product() {
  return (
    <div>
        <ProductComparison products={Products} />
    </div>
  )
}

export default Product