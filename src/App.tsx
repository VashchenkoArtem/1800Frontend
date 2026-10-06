import './App.css'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { products } from './data/products'


function App() {
  
  console.log("Hello world")
  return (
    <main> 
      <Header title="Product Catalog" description="Наш перший фронтенд на React + Typescript"/>
      <ProductList products = {products}/>
    </main>
  )
}

export default App