import {useState} from 'react'

function User({ userDetails }) {
  const [age, setAge] = useState(userDetails.age);
  function increaseAge() {
    console.log(userDetails.id);
    setAge(age + 1);
  }
  return (
    <div className="user">
      <p>First Name : {userDetails.firstName}</p>
      <p>Last Name : {userDetails.lastName}</p>
      <p>Age : {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default User;