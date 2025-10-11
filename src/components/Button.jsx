// import React from "react";

// const Button = ({ name }) => {
//   return (
//     <div>
//       <button className="px-3 py-1 m-2 bg-gray-200 rounded-lg font-medium text-md ">{name}</button>
//     </div>
//   );
// };

// export default Button;


import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-2 m-3 md:mx-2  bg-gray-200 rounded-lg font-medium text-md whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;