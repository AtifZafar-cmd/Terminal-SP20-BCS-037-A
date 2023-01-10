import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [token,setToken]=useState('')

  const LoginUser = async (event) => {
  

  if (!username || !password) {
    alert("fill first");
    return;
  }

  try {
    const res = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    setToken(res.data.token);
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="container" style={{backgroundColor:'transparent'}}>
    <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                    <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                    <form method="POST">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="username" id="floatingInput" 
                            autoComplete="off"
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            ></input>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" autoComplete="off"  className="form-control" name="password" id="floatingPassword" placeholder="Password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            ></input>
                            <label for="floatingPassword">Password</label>
                        </div>

                       
                        <div className="d-grid">
                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"
                            onClick={LoginUser}
                            >Sign
                                in</button>
                        </div>
                        <hr className="my-4"></hr>
                        
                      
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
