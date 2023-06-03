import {
  Button,
  Container,
  Navbar,
  Modal,
  DropdownButton,
  Dropdown,
  Nav,
  NavDropdown,
} from "react-bootstrap"; // by importing this we simply put for example <Button></Button> we have to use the capital letter for react-bootstrap
import { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../CardContext";
import CartProduct from "./CartProduct";
import "../assets/stylesheet/Navbar.css";
import logo_with_name from "../assets/images/logo_with_name.png";
import loading_img from "../assets/images/loading_img.gif";
import sad from "../assets/images/sad.png";
import LoginForm from "./authentification/sessions/New";
import SignupForm from "./authentification/registrations/New";
import Cookies from "js-cookie";
import UserProfilePage from "./UserProfilePage";
import jwt_decode from "jwt-decode";
import ResetPasswordForm from "./authentification/passwords/RessetPasswordForm";
import FavoritesPage from "./FavoritesPage";

function NavbarComponent() {
  //-- this belongs to the dropdown using onMousse------------------------//

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };
  //-----------------------------------------------------------------------------
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleDropdownEnter2 = () => {
    setShowDropdown2(true);
  };

  const handleDropdownLeave2 = () => {
    setShowDropdown2(false);
  };
  //-----------------------------------------------------------------------------
  const [showDropdown3, setShowDropdown3] = useState(false);

  const handleDropdownEnter3 = () => {
    setShowDropdown3(true);
  };

  const handleDropdownLeave3 = () => {
    setShowDropdown3(false);
  };
  //-----------------------------------------------------------------------------

  // this const get the cookie set into sessions/New.jsx to be able to hide or show something on the
  // navbar when user is logged in

  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("token") !== undefined
  );

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
    setShowSix(false);
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
    setShowSix(false);
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
    setShowSix(false);
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
    setShowSix(false);
  };

  // here creating useSate to be able to show and close modal this one is for resset password form
  const [showFive, setShowFive] = useState(false);
  const handleCloseFive = () => setShowFive(false);
  const handleShowFive = () => {
    setShow(false);
    setShowSecond(false);
    setShowThird(false);
    setShowFive(true);
    setShowSix(false);
  };

  // here creating useSate to be able to show and close modal this one is for favorites
  const [showSix, setShowSix] = useState(false);
  const handleCloseSix = () => setShowSix(false);
  const handleShowSix = () => {
    setShow(false);
    setShowSecond(false);
    setShowThird(false);
    setShowSix(true);
  };

  // this is for setting message base on the fetch
  const [message, setMessage] = useState("");

  //this is for the loading button
  const [loading, setLoading] = useState(false);

  // here this is set to fech our backend data for stripe -----------
  const checkout = async () => {
    setLoading(true);

    // here we simply set a condition that will allow user to be redirected to stripe if he is signin else the message will invite him to do so
    const token = getCookie("token");
    if (!token) {
      setMessage(
        "Nous vous invitons à vous connecter avant de procéder à votre achat."
      ); // Show a message to the user to sign in first
      setLoading(false);
      return;
    }

    // here we are decoding the token to be able to send any information to the backend about the user sending the request
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.user_id;

      await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items, user_id: userId }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
          }
        });
    }
  };

  // this is for the token inside the checkout "const token = getCookie('token');"  The function first gets all the cookies stored by the browser using the document.cookie property.
  // It then adds a semicolon to the beginning of the string, so that the cookie name can be easily extracted.       It splits the string using the cookie name as the separator, which creates an array with two elements: the text before the cookie name, and the text after the cookie name.
  // If the array has two elements, it means that the cookie was found. The function then extracts the value of the cookie by taking the second element of the array, splitting it again using a semicolon as the separator, and returning the first element of the resulting array (which should be the cookie value).
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  }

  // this is to be able to open a modal as window location
  // const modalRef = useRef(null);

  // this is set to calculate the total into our cart, our cart is modal into navbar that is why this is set here
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const favoriteProductsCount = cart.favoriteProducts.length; // allow to count into heart for fav
  //const favoriteProductsCount = cart.favorites.length; // allow to count into heart for fav

  return (
    <>
      <Navbar expand="sm" className="navb">
        <Navbar.Brand>
          {" "}
          <h4> </h4>{" "}
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <img
            src={logo_with_name}
            alt="My Image"
            className="networkleed-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="modal-for-login">
          <Nav className="navdropdown">
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

            <div
              className={`dropdown-menu ${showDropdown ? "show" : ""}`}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="/laptops" className="dropdown-item">
                Ordinateurs portables
              </NavDropdown.Item>
              <NavDropdown.Item href="/phones">
                Téléphones portables
              </NavDropdown.Item>
              {/*<NavDropdown.Item href="#action-1">Souris</NavDropdown.Item>*/}
              <NavDropdown.Item href="/BluetoothSpeaker">
                Enceintes Bleutooth
              </NavDropdown.Item>
              <NavDropdown.Item href="/Helmet">Casques audio</NavDropdown.Item>
              <NavDropdown.Item href="/AllArticles">
                Tous les Articles
              </NavDropdown.Item>
              {/*<NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
            </div>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="modal-for-login">
          <Nav className="navdropdown">
            <NavDropdown
              title="Stockage et mémoire"
              id="basic-nav-dropdown"
              onMouseEnter={handleDropdownEnter2}
              onMouseLeave={handleDropdownLeave2}
            >
              {/*<NavDropdown.Item href="#action-1" className="dropdown-item">Disques durs externes</NavDropdown.Item>
                 <NavDropdown.Item href="#action-2">Clés USB</NavDropdown.Item> 
                 <NavDropdown.Item href="#action-1">Cartes mémoire</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">SSD (Solide State Drive)</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Mémoire RAM</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
            </NavDropdown>
            <div
              className={`dropdown-menu ${showDropdown2 ? "show" : ""}`}
              onMouseEnter={handleDropdownEnter2}
              onMouseLeave={handleDropdownLeave2}
            >
              <NavDropdown.Item
                href="/ExternalHardDrive"
                className="dropdown-item"
              >
                Disques durs externes
              </NavDropdown.Item>
              {/*<NavDropdown.Item href="#action-2">Clés USB</NavDropdown.Item>
                <NavDropdown.Item href="#action-1">Cartes mémoire</NavDropdown.Item>
              <NavDropdown.Item href="#action-1">SSD (Solide State Drive)</NavDropdown.Item>*/}
              <NavDropdown.Item href="#action-1">Mémoire RAM</NavDropdown.Item>
              <NavDropdown.Item href="/AllArticles">
                Tous les Articles
              </NavDropdown.Item>
              {/*<NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
            </div>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="modal-for-login">
          <Nav>
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
            <div
              className={`dropdown-menu ${showDropdown3 ? "show" : ""}`}
              onMouseEnter={handleDropdownEnter3}
              onMouseLeave={handleDropdownLeave3}
            >
              <NavDropdown.Item href="/LaptopBag" className="dropdown-item">
                Sacoches pour ordinateur portable
              </NavDropdown.Item>
              <NavDropdown.Item href="/LaptopBackBag">
                Sac à dos pour ordinateur portable
              </NavDropdown.Item>
              <NavDropdown.Item href="/AllArticles">
                Tous les Articles
              </NavDropdown.Item>
              {/*<NavDropdown.Item href="#action-1">Supports pour écran</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Tapis de souris</NavDropdown.Item>
                 <NavDropdown.Item href="#action-1">Câbles et adaptateurs</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Encre d'imprimantes</NavDropdown.Item>*/}
            </div>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="navdropdown">
          {/*<DropdownButton
                     title={
                      <div className='favHeart-count'>
                      <img src="https://cdn-icons-png.flaticon.com/512/130/130195.png" width={"30px"} title='Mes favoris'/>
                      {favoriteProductsCount > 0 && <span className='nb-favorites'>{favoriteProductsCount}</span>}
                      </div>
                     }
                      variant="light"
                      onClick={handleShowSix}
                      >
                    </DropdownButton>*/}

          <button onClick={handleShowSix} className="cart-button">
            <div className="favHeart-count">
              <img
                src="https://cdn-icons-png.flaticon.com/512/130/130195.png"
                width={"40px"}
                title="Mes favoris"
              />
              {favoriteProductsCount > 0 && (
                <span className="nb-favorites">{favoriteProductsCount}</span>
              )}
            </div>
          </button>
        </Navbar.Collapse>

        {isLoggedIn ? (
          <Navbar.Collapse className="navdropdown">
            <DropdownButton
              title={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                  width={"30px"}
                  title="Mon profil"
                />
              }
              variant="light"
              onClick={handleShowFourth}
            >
              {/*<Dropdown.Item href="#action-3" >
                       </Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse className="navdropdown">
            <DropdownButton
              title={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                  width={"30px"}
                  title="Authentification"
                />
              }
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
          <button onClick={handleShow} className="cart-button">
            <h4 className="img-cart-n-product">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8865/8865579.png"
                className="cart-image"
                title="Mon panier"
              />
              <span className="nb-products">
                {productsCount > 0 ? productsCount : null}
              </span>
            </h4>
          </button>
        </div>
      </Navbar>

      <Modal
        show={showFourth}
        onHide={handleCloseFourth}
        className="modal-for-login"
      >
        <Modal.Header closeButton className="login-modal">
          <Modal.Title className="modal-logint">Mon Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserProfilePage />
        </Modal.Body>
      </Modal>

      <Modal
        show={showThird}
        onHide={handleCloseThird}
        className="modal-for-login"
      >
        <Modal.Header closeButton className="login-modal">
          <Modal.Title className="modal-logint">Mon compte</Modal.Title>
        </Modal.Header>
        <Modal.Body className="signupF">
          <SignupForm />
          <button
            onClick={handleShowSecond}
            className="buttonlink_inSignupModal"
          >
            Vous avez deja un compte ?
          </button>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSecond}
        onHide={handleCloseSecond}
        className="modal-for-login"
        id="my-modal"
      >
        <Modal.Header closeButton className="login-modal">
          <Modal.Title className="modal-logint">Mon compte</Modal.Title>
        </Modal.Header>
        <Modal.Body className="loginF">
          <LoginForm />
          <br />
          <div className="signup_ressetpassword">
            <button onClick={handleShowThird} className="buttonlink">
              Pas de compte ?
            </button>
            <button onClick={handleShowFive} className="forgot">
              {" "}
              <span style={{ color: "white" }}>Mot de passe oublié ?</span>{" "}
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showFive}
        onHide={handleCloseFive}
        className="modal-for-login"
      >
        <Modal.Header closeButton className="login-modal">
          <Modal.Title className="modal-logint">Mon compte</Modal.Title>
        </Modal.Header>
        <Modal.Body className="loginF">
          <ResetPasswordForm />
          <br />
          <button onClick={handleShowThird} className="buttonlink">
            Pas de compte ?
          </button>
        </Modal.Body>
      </Modal>

      <Modal show={showSix} onHide={handleCloseSix}>
        <Modal.Header closeButton className="cart-header">
          <Modal.Title>Mes favoris</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {favoriteProductsCount > 0 ? (
            <>
              <FavoritesPage />
            </>
          ) : (
            <div className="empty_favorites">
              <h5>Vous n'avez pas de favori</h5>
              <br />
              <br />
              <img src={sad} alt="" style={{ width: "80px" }} />
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose} className="modal-for-login">
        <Modal.Header closeButton className="cart-header">
          <Modal.Title>Mon panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              {message && (
                <div className="message">
                  <br />
                  <h6 style={{ marginLeft: "10px", marginRight: "10px" }}>
                    {message}
                  </h6>
                  <Button onClick={handleShowSecond}>Se connecter</Button>
                  <br />
                  <br />
                </div>
              )}
              <br />

              <h3>Total: {cart.getTotalCost().toFixed(2)} €</h3>

              {loading && <img src={loading_img} alt="" />}

              <Button
                variant="success"
                onClick={checkout}
                className="checkout-btn"
              >
                passer la commande
              </Button>
            </>
          ) : (
            <div className="cart-empty">
              <h5>votre panier est vide ! </h5>
              <br />
              <img src={sad} alt="" style={{ width: "80px" }} />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;

// let create a function with rfce into return we set the navbar with <Navbar></Navbar>
// <Navbar.Brand></Navbar.Brand> is where we usualy put the name the site or Home, notice that everything is capital that is react-bootstrap
// <Navbar.Togle></Navbar.Togle> is the one that make the navbar responsive it allows it to collapse, inside it we put the element that we want to be into the collapse we use <Navbar.Collapse></Navbar.Collapse>
// <Modal></Modal> is the screen that appears withing the same page by pressing or touching the button it is often set out of the navbar ,  <Modal.Header></Modal.Header> is what is the title of that small screen and <Modal.Body></Modal.Body> is the content within the screen, by puting CloseButton we can close the modle
// we need event onClick  that will handle showing the modal we have to define the function in the event as usual, we have event onHide that will handle the closeButton we must also define the function on the event.
// to define these function that hide and show modal let simply import useState as we are into a function, const [show, setShow] = useState(false); we set show to false meaning that if we don't press it shouldn't show the modal content, handleClose is also false and handleShow is true
// the rest will be explain in other files the checkout is at the end only when the cart is ready and we want to link it to stripe with our checkout controller in rails API, we will then make a fetch and it is linked on the event onClick on the button  Purchase items!
