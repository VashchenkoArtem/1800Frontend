import { useGetMeQuery, useGetProductsQuery } from './api/baseApi'
import './App.css'
import { Header } from './components/Header'
import { LoginForm } from './components/LoginForm'
import { ProductList } from './components/ProductList'
import { RegisterForm } from './components/RegisterForm'

function App() {
  const { data } = useGetProductsQuery();
  const { data: user} = useGetMeQuery();
  // if (!data) {
  //   return (
  //     <h1>Products are not found</h1>
  //   )
  // }
  // console.log("Hello world")
  return (
    <main> 
      <Header title="Product Catalog" description="Наш перший фронтенд на React + Typescript"/>

      { user ? <p>Ви авторизовані як {user.email}</p> 
      : <div>      
        <LoginForm/>
        <RegisterForm />
        </div>
      }
      {/* <ProductList products = {data}/> */}
    </main>
  )
}

export default App