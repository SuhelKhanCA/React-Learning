import React from "react";

function User({firstName, lastName}) {
    return <div>User : {firstName} { lastName }</div>;
}
// function User({id, firstName, lastName}) {
//   return (
//     <div>
//       User : {id} - {firstName} {lastName}
//     </div>
//   );
// }

export default User;
