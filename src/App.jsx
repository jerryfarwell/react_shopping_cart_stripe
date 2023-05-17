import 'bootstrap/dist/css/bootstrap.css'
import NavbarComponent from './components/Navbar'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Store from './pages/Store'
import Cancel from './pages/Cancel'
import Paid from './pages/Paid'
import CartProvider from './CardContext'
/* import SearchBar from './components/SearchBar' */
import ItemDetails from './pages/ItemDetails'
import ConfirmationSuccessPage from './pages/ConfirmationSuccessPage'
import NewPasswordForm from './components/authentification/passwords/NewPasswordForm'
import ResetPasswordForm from './components/authentification/passwords/RessetPasswordForm'
import NotFoundPage from './pages/NotFoundPage'








function App() {

  return (
    <div className="App">
      <CartProvider>
      <NavbarComponent />
      {/*<SearchBar />*/}
      <br/>
      <Container>
      <BrowserRouter>
       <Routes>
           <Route index element={<Store />}/>
           <Route path='/paid_cxwvh1&hhskow&&&0gskohjdkyuizoxssaxtTl' element={<Paid />}/>
           <Route path='/cancel' element={<Cancel />}/>
           <Route path='/details/:id' element={<ItemDetails />}/>
           <Route  path="/confirmation" element={<ConfirmationSuccessPage/>} />
           <Route path='/password' element={<ResetPasswordForm/>}/>
           <Route path='/new_password/:id' element={<NewPasswordForm/>}/>
           <Route path='*' element={<NotFoundPage />} />
        </Routes>  
      </BrowserRouter>
      </Container>
      </CartProvider> 
    </div>
  )
}

export default App


// this our App.jsx we just set our routes as usual we import { BrowserRouter, Routes, Route } from 'react-router-dom'
// <Container></Container> is used to create marging between navbar and the sides of the page 
// <CartProvider></CartProvider> is set into CardContext it is the react create context wich is the best way of setting functions that can be used for the all app
