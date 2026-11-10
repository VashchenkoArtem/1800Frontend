import { useGetProductsQuery } from './api/baseApi'
import './App.css'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { RegisterForm } from './components/RegisterForm'

function App() {
  const { data } = useGetProductsQuery();

  // if (!data) {
  //   return (
  //     <h1>Products are not found</h1>
  //   )
  // }
  // console.log("Hello world")
  return (
    <main> 
      <Header title="Product Catalog" description="Наш перший фронтенд на React + Typescript"/>
      <RegisterForm />
      {/* <ProductList products = {data}/> */}
    </main>
  )
}

export default App