import { useState } from "react";

function HandleMultipleInputImpro() {
  // firstname
  // lastname
  // username
  // email
  // password
  // confirm password
  // phone
  // adress

  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    adress: "",
  });

  // we can destructure, and USE
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    phone,
    adress,
  } = FormData;

  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <h3>This is Improved Form Inputs</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-box">
          <label htmlFor="firstName">First Name</label>
          <input
            value={FormData.firstName}
            onChange={handleChange}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={FormData.lastName}
            onChange={handleChange}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="div-box">
          <label htmlFor="username">User Name</label>
          <input
            value={FormData.username}
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={FormData.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="div-box">
          <label htmlFor="phone">phone</label>
          <input
            value={FormData.phone}
            onChange={handleChange}
            type="phone"
            id="phone"
            name="phone"
          />
        </div>
        <div className="div-box">
          <label htmlFor="password">Password</label>
          <input
            value={FormData.password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="div-box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={FormData.confirmPassword}
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <div className="div-box">
          <label htmlFor="address">Address</label>
          <input
            value={FormData.address}
            onChange={handleChange}
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

export default HandleMultipleInputImpro;
