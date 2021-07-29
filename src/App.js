import React, { Component, useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Router, Switch, Link, useLocation, hashHistory } from 'react-router-dom';
// import Login from './component/login';
// import Register from './component/register';
// import Post from './component/post';

const reginitialValues = {
  regusername: "", regpassword: ""
};

const loginitialValues = {
  logusername: "", logpassword: ""
};

function App() {
  const [changepage, setChangepage] = useState(true)
  const [regvalues, setRegalues] = useState(reginitialValues);
  const [logvalues, setlogalues] = useState(loginitialValues);
  const [loginDetails, setLoginDetails] = useState([])
  const [registerDetails, setRegisterDetails] = useState([])
  const [loginerror, setLoginerror] = useState(false)
  const [regsuccess, setRegsuccess] = useState(false)


  // register
  const handleRegInputChange = (e) => {
    const { name, value } = e.target;

    setRegalues({
      ...regvalues,
      [name]: value,
    });

  };

  // login

  const handleLogInputChange = (e) => {
    setLoginerror(false)
    const { name, value } = e.target;

    setlogalues({
      ...logvalues,
      [name]: value,
    });

  };

  const loginuser = () => {
    registerDetails.map((data) => {
      if (data.regusername === logvalues.logusername && data.regpassword === logvalues.logpassword) {
        setlogalues(loginitialValues)
      }

    })

    if (regvalues.regusername == "" && regvalues.regpassword == "") {
      setLoginerror(true)
    }

    console.log()
    // localStorage.setItem(registerDetails)
  }

  setTimeout(function () {
    setRegsuccess(false)
  }, 3000);

  const registerdatas = () => {
    setLoginerror(false)
    setRegisterDetails([...registerDetails, regvalues])
    setRegalues(reginitialValues)
    setRegsuccess(true)
  }

  const registeruser = () => {
    setLoginerror(false)
    setChangepage(true)

  }

  return (
    <div className="Contaniner">
      {changepage ? <div className="loginContainer">
        <div className="title">Login</div>
        {loginerror && <div className="errorMessege">Please Register !!</div>}
        <div className="loginField">
          <div>
            <label className="fieldName">UserName</label>
            <input type="text" className="inputview" name="logusername" value={logvalues.logusername} onChange={handleLogInputChange} />
          </div>
          <div>
            <label className="fieldName">Password</label>
            <input type="password" className="inputview" name="logpassword" value={logvalues.logpassword} onChange={handleLogInputChange} />
          </div>
          <div className="btnchange">
            <button onClick={loginuser}>Login</button>
            <div className="nextLink" onClick={() => setChangepage(false)}>Register</div>
          </div>
        </div>
      </div>
        :
        <div className="loginContainer">
          <div className="title">Register</div>
          {regsuccess && <div className="successmsg">Register Successfuly</div>}
          <div className="loginField">
            <div>
              <label className="fieldName">UserName</label>
              <input type="text" className="inputview" name="regusername" value={regvalues.regusername} onChange={handleRegInputChange} />
            </div>
            <div>
              <label className="fieldName">Password</label>
              <input type="password" className="inputview" name="regpassword" value={regvalues.regpassword} onChange={handleRegInputChange} />
            </div>
            <div className="btnchange">
              <button onClick={registerdatas}>Register</button>
              <div className="nextLink" onClick={registeruser}>Login</div>
            </div>
          </div>
        </div>
      }

    </div>
    //  <BrowserRouter>

    //   <div className="title">Login</div>

    //   {/* <div className="App">
    //       <div>
    //         <label>UserName</label>
    //         <input type="text" className="" />
    //       </div>
    //       <div>
    //         <label>Password</label>
    //         <input type="password" className="" />
    //       </div>
    //     </div> */}

    //   <Switch>
    //     <Route exact path="/" component={Login} />
    //     <Route exact path="/register" component={Register} />
    //     <Route exact path="/post" component={Post} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
