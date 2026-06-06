import { useState } from "react";
function Register(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [Email, setEmailID] = useState("");
    const [Mobile, MobileNumber ] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log("userName :", userName);
        console.log("password :", password);
        console.log("Email :", setEmailID);
        console.log("Mobile :", MobileNumber);
      };
    return(
        <>
      <div className="container d-flex justify-content-center align-items-center">
      </div>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Register</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">FullName</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="MobileNumber">Mobile Number</label>
            <input
              type="text"
              name="Mobile"
              className="form-control"
              value={Email}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <br />
            <label htmlFor="EmailID">Email ID</label>
            <input
              type="text"
              name="Email-ID"
              className="form-control"
              value={Email}
              onChange={(e) => setEmailID(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}
export default Register;