import React, { useRef, useState } from 'react'

const Contacte = () => {
    const refName = useRef();
    const refEmailUser = useRef();
    const message = useRef();
   //nameUser: "",email: "", message: ""
    const [dataUser, setDataUser] = useState({});
    const handleChange = ()=> {
        
        setDataUser({nameUser: refName.current.value, email: refEmailUser.current.value, message: message.current.value,});
        console.log(dataUser)
        //localStorage.setItem("mesageUser", JSON.stringify(dataUser))
    }
    const handleMessage = ()=> {
        handleChange();
        localStorage.setItem("mesageUser", JSON.stringify(dataUser));
        refName.current.value = "";
        refEmailUser.current.value = "";
        message.current.value = "";
    }

  return (
    <div class="bg-dark w-100 d-flex justify-content-center" style={{height: "100vh", color: "rgb(255, 255, 255"}}>
        <div class="container">
            <div>
                <h3 class="mt-5 mb-3 text-center">Contact</h3>
                <div class="d-flex justify-content-between">
                <input class="inputCall" ref={refName} onChange={handleChange}  type="text" placeholder="your Name" fdprocessedid="cho1lq"/>
                <input class="inputCall" ref={refEmailUser} onChange={handleChange}  type="email" placeholder="your Email" fdprocessedid="4jou6d"/>
            </div>
            <div class="mt-3 parentArea">
                <textarea class="w-100 h-100 area" ref={message} onChange={handleChange}  placeholder="your massege"></textarea>
            </div>
            <div class="d-flex justify-content-center">
             {/* onClick={handleMessage} */}
                <button onClick={handleMessage} type="submit" class="m-3 btn btn-primary" fdprocessedid="2yuzca">send</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contacte;