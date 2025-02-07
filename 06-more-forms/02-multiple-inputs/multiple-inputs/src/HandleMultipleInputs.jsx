import React, { use, useState } from "react";

function HandleMultipleInputs() {
  // firstname
  // lastname
  // username
  // email
  // password
  // confirm password
  // phone
  // adress

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="div-box">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="div-box">
          <label htmlFor="username">User Name</label>
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="div-box">
          <label htmlFor="phone">phone</label>
          <input
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            type="phone"
            id="phone"
            name="phone"
          />
        </div>
        <div className="div-box">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="div-box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <div className="div-box">
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            type="text"
            id="address"
            name="address"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HandleMultipleInputs;
