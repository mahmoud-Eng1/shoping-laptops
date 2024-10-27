import {createContext, useContext, useState,useEffect} from 'react';
import CartItems from "../components/cartitems";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../components/firebase";
import { useNavigate } from 'react-router-dom';

//create context Api
const contexStore = createContext({})
const initialValue = localStorage.getItem("product")? JSON.parse(localStorage.getItem("product")) : [];
const ShoppingcartProvider = ({children}) => {
const [dataStore, setdatastore]= useState(initialValue);
const [controlCart, setcontrolCart] = useState(false)
const navigate = useNavigate()

 useEffect(() => {
  localStorage.setItem("product", JSON.stringify(dataStore))

}, [dataStore])

const getItems = (id)=> {
  return dataStore.find((item)=> item.id === id )?.quantity || 0;
} 
const increaseItem = (id)=> {
  currentUser ? 
  setdatastore((current)=> {
    //this conditon check if item find in card or not and add new item
    if(current.find((item)=> item.id === id) == null) {
      return [...current, {id, quantity : 1}]
    }else {
    //this condition  check if item found increase quantity 
      return current.map((item)=> {
        if(item.id === id){
          return {...item, quantity: item.quantity + 1}
        }else {
          return item;
        }
      })
    }
  })
  : navigate("/Signin")
}
const decreaseItem = (id)=> {
  setdatastore((current)=> {
    //this conditon check if item find in card or not and to decrease item
    if(current.find((item)=> item.id === id) == null) {
      return current.filter((item)=> item.id !== id)
    }else {
    //this condition  check if item found increase quantity 
      return current.map((item)=> {
        if(item.id === id){
          return {...item, quantity: item.quantity - 1}
        }else {
          return item;
        }
      })
    }
  })
}
const removeItem = (id)=> {
setdatastore((current)=> current.filter((item)=> item.id !== id)
)
}
//this function to open slid cart
const openCart = ()=> {
  setcontrolCart(true)
}
//this function to close slid cart
const closeCart = ()=> {
  setcontrolCart(false)
}
//this function to count items in cart and return number in shopping cart
const countCart = dataStore.reduce((quantity, item)=> 
  item.quantity + quantity
,0)
 //signup user
const  [currentUser, setCurrentUser] = useState()
const signupUser = (email, password)=> {
  createUserWithEmailAndPassword(auth, email, password)
}
const loginUser = (email, password)=> {
  signInWithEmailAndPassword(auth, email, password)
}
// ubdate user when change login
useEffect(()=> {
 const onChanheLoding =  onAuthStateChanged(auth, (user)=>{
    setCurrentUser(user)
    
  });
  
  return ()=> {
    onChanheLoding()
  };
} ,[]);
  return (
    <contexStore.Provider value={{
    dataStore,
     getItems,
    increaseItem, 
    decreaseItem, 
    removeItem,
    openCart,
    closeCart,
    countCart,
    signupUser,
    currentUser,
    loginUser,
    
    }}>
      {children}
      <CartItems controlCart={controlCart} />
    </contexStore.Provider>
  )
}
//this function to use context Api
export const CartContext = ()=> {
  return useContext(contexStore)
}
export default  ShoppingcartProvider;