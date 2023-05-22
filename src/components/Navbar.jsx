import {Button, Container, Navbar, Modal, DropdownButton, Dropdown, Nav, NavDropdown} from 'react-bootstrap';   // by importing this we simply put for example <Button></Button> we have to use the capital letter for react-bootstrap
import { useState, useContext, useEffect, useRef } from 'react';
import { CartContext } from '../CardContext';
import CartProduct from './CartProduct';
import '../assets/stylesheet/Navbar.css'
import networkleed from '../assets/images/networkleed.jpg';
import loading_img from '../assets/images/loading_img.gif'
import LoginForm from './authentification/sessions/New';
import SignupForm from './authentification/registrations/New';
import Cookies from 'js-cookie';
import UserProfilePage from './UserProfilePage';
import jwt_decode from 'jwt-decode';
import ResetPasswordForm from './authentification/passwords/RessetPasswordForm';






function NavbarComponent() {


//-- this belongs to the dropdown using onMousse------------------------//

const [showDropdown, setShowDropdown] = useState(false);

const handleDropdownEnter = () => {
  setShowDropdown(true);
}

const handleDropdownLeave = () => {
  setShowDropdown(false);
}
//-----------------------------------------------------------------------------
const [showDropdown2, setShowDropdown2] = useState(false);

const handleDropdownEnter2 = () => {
  setShowDropdown2(true);
}

const handleDropdownLeave2 = () => {
  setShowDropdown2(false);
}
//-----------------------------------------------------------------------------
const [showDropdown3, setShowDropdown3] = useState(false);

const handleDropdownEnter3 = () => {
  setShowDropdown3(true);
}

const handleDropdownLeave3 = () => {
  setShowDropdown3(false);
}
//-----------------------------------------------------------------------------




// this const get the cookie set into sessions/New.jsx to be able to hide or show something on the
// navbar when user is logged in

const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("token") !== undefined);

useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(Cookies.get("token") !== undefined);
    };
    checkLoginStatus();
  }, []); 



// here we simply create cart to be able to use our cart context set into src/CardContext.jsx
    const cart = useContext(CartContext);

// here creating useSate to be able to show and close modal this one is for the cart
// we also set conditions that when this modal is open the others should be closed we did the same for all
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => {
  setShow(true);
  setShowSecond(false);
  setShowThird(false);
  setShowFourth(false);
  setShowFive(false);
};


// here creating useSate to be able to show and close modal this one is for LoginForm 
const [showSecond, setShowSecond] = useState(false);
const handleCloseSecond = () => setShowSecond(false);
const handleShowSecond = () => {
  setShow(false);
  setShowSecond(true);
  setShowThird(false);
  setShowFourth(false);
  setShowFive(false);
};

// here creating useSate to be able to show and close modal this one is for SignupForm 
const [showThird, setShowThird] = useState(false);
const handleCloseThird = () => setShowThird(false);
const handleShowThird = () => {
  setShow(false);
  setShowSecond(false);
  setShowThird(true);
  setShowFourth(false);
  setShowFive(false);
};

// here creating useSate to be able to show and close modal this one is for user profil 
const [showFourth, setShowFourth] = useState(false);
const handleCloseFourth = () => setShowFourth(false);
const handleShowFourth = () => {
  setShow(false);
  setShowSecond(false);
  setShowThird(false);
  setShowFourth(true);
  setShowFive(false);
};


// here creating useSate to be able to show and close modal this one is for resset password form 
const [showFive, setShowFive] = useState(false);
const handleCloseFive = () => setShowFive(false);
const handleShowFive = () => {
  setShow(false);
  setShowSecond(false);
  setShowThird(false);
  setShowFive(true);
};





// this is for setting message base on the fetch
const [message, setMessage] = useState('')


//this is for the loading button
const [loading, setLoading] = useState(false);

    

// here this is set to fech our backend data for stripe -----------
    const checkout = async () => {
      setLoading(true);

     // here we simply set a condition that will allow user to be redirected to stripe if he is signin else the message will invite him to do so
      const token = getCookie('token');
      if (!token) {
        setMessage("Nous vous invitons à vous connecter avant de procéder à votre achat."); // Show a message to the user to sign in first
         setLoading(false);
        return;
      }

      // here we are decoding the token to be able to send any information to the backend about the user sending the request
       if (token) {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.user_id;


       await fetch('http://localhost:3000/checkout', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items, user_id: userId })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        }); 
    }
  }


    // this is for the token inside the checkout "const token = getCookie('token');"  The function first gets all the cookies stored by the browser using the document.cookie property.
    // It then adds a semicolon to the beginning of the string, so that the cookie name can be easily extracted.       It splits the string using the cookie name as the separator, which creates an array with two elements: the text before the cookie name, and the text after the cookie name.
    // If the array has two elements, it means that the cookie was found. The function then extracts the value of the cookie by taking the second element of the array, splitting it again using a semicolon as the separator, and returning the first element of the resulting array (which should be the cookie value).
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
    }

  // this is to be able to open a modal as window location
  // const modalRef = useRef(null);




    // this is set to calculate the total into our cart, our cart is modal into navbar that is why this is set here
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    
    return (
        
        <>
            <Navbar expand="sm" className="navb" >
            <Navbar.Brand href="/"><h4></h4></Navbar.Brand>
                <Navbar.Brand href="/"><img src={networkleed} alt="My Image" className='networkleed-img' /></Navbar.Brand>
                <Navbar.Toggle />



              <Navbar.Collapse className='modal-for-login'>
                <Nav className='navdropdown'>
             <NavDropdown 
                title="Ordinateurs et périphériques" 
                id="basic-nav-dropdown"
               onMouseEnter={handleDropdownEnter}
               onMouseLeave={handleDropdownLeave}
               >
                {/*<NavDropdown.Item href="#action-1" className="dropdown-item">Ordinateurs portables</NavDropdown.Item>
                 <NavDropdown.Item href="#action-2">Telephones portables</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Souris</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Enceinte Bleutooth</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Casque audio</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
                </NavDropdown>

                 <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                <NavDropdown.Item href="#action-1" className="dropdown-item">Ordinateurs portables</NavDropdown.Item>
                <NavDropdown.Item href="#action-2">Telephones portables</NavDropdown.Item>
                {/*<NavDropdown.Item href="#action-1">Souris</NavDropdown.Item>*/}
                 <NavDropdown.Item href="#action-1">Enceinte Bleutooth</NavDropdown.Item>
                 {/*<NavDropdown.Item href="#action-1">Casque audio</NavDropdown.Item>
                 <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
                 </div>
               </Nav>
               </Navbar.Collapse>

              {/*<Navbar.Collapse className='modal-for-login'>
               <Nav className='navdropdown'>
             <NavDropdown 
                title="Stockage et mémoire" 
                id="basic-nav-dropdown"
               onMouseEnter={handleDropdownEnter2}
               onMouseLeave={handleDropdownLeave2}
               >
                <NavDropdown.Item href="#action-1" className="dropdown-item">Disques durs externes</NavDropdown.Item>
                 <NavDropdown.Item href="#action-2">Clés USB</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Cartes mémoire</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">SSD (Solide State Drive)</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Mémoire RAM</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>
                </NavDropdown>
                 <div className={`dropdown-menu ${showDropdown2 ? 'show' : ''}`} onMouseEnter={handleDropdownEnter2} onMouseLeave={handleDropdownLeave2}>
                <NavDropdown.Item href="#action-1" className="dropdown-item">Disques durs externes</NavDropdown.Item>
                <NavDropdown.Item href="#action-2">Clés USB</NavDropdown.Item>
                <NavDropdown.Item href="#action-1">Cartes mémoire</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">SSD (Solide State Drive)</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Mémoire RAM</NavDropdown.Item>
                 <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>
                 </div>
               </Nav>
               </Navbar.Collapse>*/}

               <Navbar.Collapse className='modal-for-login'>
               <Nav >
             <NavDropdown 
                title="Accessoires" 
                id="basic-nav-dropdown"
               onMouseEnter={handleDropdownEnter3}
               onMouseLeave={handleDropdownLeave3}
               >
                {/*<NavDropdown.Item href="#action-1" className="dropdown-item">Sacoches pour ordinateur portable</NavDropdown.Item>
                 <NavDropdown.Item href="#action-2">Supports pour ordinateur portable</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Supports pour écran</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Tapis de souris</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Câbles et adaptateurs</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
                </NavDropdown>
                 <div className={`dropdown-menu ${showDropdown3 ? 'show' : ''}`} onMouseEnter={handleDropdownEnter3} onMouseLeave={handleDropdownLeave3}>
                 <NavDropdown.Item href="#action-1" className="dropdown-item">Sacoches pour ordinateur portable</NavDropdown.Item>
                 <NavDropdown.Item href="#action-2">Supports pour ordinateur portable</NavDropdown.Item>
                 {/*<NavDropdown.Item href="#action-1">Supports pour écran</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Tapis de souris</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Câbles et adaptateurs</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
                 </div>
               </Nav>
               </Navbar.Collapse>



               



                {isLoggedIn ? (
               <Navbar.Collapse className='navdropdown'>
               <DropdownButton
                     title={<img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" width={"30px"} />}
                      variant="light"
                      onClick={handleShowFourth}
                      >
                   {/*<Dropdown.Item href="#action-3" >
                       </Dropdown.Item>*/}
                    </DropdownButton>
                    </Navbar.Collapse>
                    ) : (
                    <Navbar.Collapse className='navdropdown'>
                    <DropdownButton
                     title={<img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" width={"30px"} />}
                      variant="light"
                     
                      >
                   <Dropdown.Item href="#action-3">
                     <p onClick={handleShowSecond}>Se connecter</p>
                       </Dropdown.Item>
                       <Dropdown.Item href="#action-3">
                     <p onClick={handleShowThird}>S'inscrire</p>
                    </Dropdown.Item>
                    </DropdownButton>
                    </Navbar.Collapse>
                  )} 

                {/*<div >
                    <Button onClick={handleShow} className='cart-button'><h4 className='img-cart-n-product'> <img src="https://cdn-icons-png.flaticon.com/512/8865/8865579.png" className='cart-image' /> <span className='nb-products'>{productsCount}</span></h4>  </Button>
                </div>*/}
                <div>
                <button onClick={handleShow} className='cart-button'>
                 <h4 className='img-cart-n-product'>
                 <img src="https://cdn-icons-png.flaticon.com/512/8865/8865579.png" className='cart-image' />
                  <span className='nb-products'>
                  {productsCount > 0 ? productsCount : null}
                 </span>
                </h4>
               </button>
                 </div>

            </Navbar>



            <Modal show={showFourth} onHide={handleCloseFourth}  className='modal-for-login'>
                <Modal.Header closeButton className='login-modal'>
                    <Modal.Title className='modal-logint'>Mon Profil</Modal.Title>
                </Modal.Header>
                <Modal.Body > 
                <UserProfilePage/>   
                </Modal.Body>
            </Modal>




            <Modal show={showThird} onHide={handleCloseThird}  className='modal-for-login'>
                <Modal.Header closeButton className='login-modal'>
                    <Modal.Title className='modal-logint'>Mon compte</Modal.Title>
                </Modal.Header>
                <Modal.Body className='signupF'> 
                 <SignupForm />
                 <button onClick={handleShowSecond} className='buttonlink'>Vous avez deja un compte ?</button>            
                </Modal.Body>
            </Modal>

            
             <Modal show={showSecond} onHide={handleCloseSecond} className='modal-for-login'  id="my-modal">
             <Modal.Header closeButton className='login-modal'>
            <Modal.Title className='modal-logint'>Mon compte</Modal.Title>
            </Modal.Header>
              <Modal.Body className='loginF'>
               <LoginForm />
                <br />
                <div className='signup_ressetpassword'>
                <button onClick={handleShowThird} className='buttonlink'>Pas de compte ?</button> 
                <button  onClick={handleShowFive} className='forgot'> <span style={{color: 'red'}}>Mot de passe oublié ?</span> </button>        
                </div>
            </Modal.Body> 
            </Modal>


            <Modal show={showFive} onHide={handleCloseFive} className='modal-for-login'>
             <Modal.Header closeButton className='login-modal'>
            <Modal.Title className='modal-logint'>mon compte</Modal.Title>
            </Modal.Header>
              <Modal.Body className='loginF'>
               <ResetPasswordForm />
               <br/>
               <button onClick={handleShowThird} className='buttonlink'>Pas de compte ?</button> 
            </Modal.Body> 
            </Modal>



        
           <Modal show={show} onHide={handleClose} className='modal-for-login' >
                <Modal.Header  closeButton className='cart-header'>
                    <Modal.Title>Mon panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}


                              {message && (
                              <div className='message'>
                                <br/>
                              <h6 style={{marginLeft: '10px', marginRight: '10px'}}>{message}</h6>
                              <Button onClick={handleShowSecond} >Se connecter</Button>            
                                <br/>
                                <br/>
                              </div>
                             )}
                             <br/>


                            <h3>Total: {cart.getTotalCost().toFixed(2)} €</h3>
                            
                            {loading && <img src={loading_img} alt="" /> }
                             

                             <Button variant="success" onClick={checkout} className='checkout-btn'>
                                passer la commande
                            </Button>
                            

                        </>
                    :
                    <div className='cart-empty'>
                        <h5>votre panier est vide ! </h5><br/> 
                        <h1>😞</h1>
                    </div>
                    }
                </Modal.Body>
            </Modal>

        </>
    )
}

export default  NavbarComponent;





// let create a function with rfce into return we set the navbar with <Navbar></Navbar>
// <Navbar.Brand></Navbar.Brand> is where we usualy put the name the site or Home, notice that everything is capital that is react-bootstrap
// <Navbar.Togle></Navbar.Togle> is the one that make the navbar responsive it allows it to collapse, inside it we put the element that we want to be into the collapse we use <Navbar.Collapse></Navbar.Collapse>
// <Modal></Modal> is the screen that appears withing the same page by pressing or touching the button it is often set out of the navbar ,  <Modal.Header></Modal.Header> is what is the title of that small screen and <Modal.Body></Modal.Body> is the content within the screen, by puting CloseButton we can close the modle 
// we need event onClick  that will handle showing the modal we have to define the function in the event as usual, we have event onHide that will handle the closeButton we must also define the function on the event. 
// to define these function that hide and show modal let simply import useState as we are into a function, const [show, setShow] = useState(false); we set show to false meaning that if we don't press it shouldn't show the modal content, handleClose is also false and handleShow is true
// the rest will be explain in other files the checkout is at the end only when the cart is ready and we want to link it to stripe with our checkout controller in rails API, we will then make a fetch and it is linked on the event onClick on the button  Purchase items!
