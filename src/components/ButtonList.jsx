// import React from "react";
// import Button from "./Button";

// const ButtonList = () => {
//   const list = [
//     "All",
//     "Gaming",
//     "Music",
//     "Mixes",
//     "Live",
//     "JavaScript",
//     "BGMI",
//     "React",
//     "Cricket",
//     "Soccer",
//     "Cooking",
//     "Watched",
//     "Football",
//     "Songs",
//   ];
//   return (
//     <div className="md:flex md:scrollbox md:overflow-x-auto inline-grid grid-cols-4 ">
//       {list.map((name, index) => (
//         <Button key={index} name={name} />
//       ))}
//     </div>
//   );
// };
// export default ButtonList;

// import React from "react";
// import Button from "./Button";

// const ButtonList = () => {
//   const list = [
//     "All",
//     "Gaming",
//     "Music",
//     "Mixes",
//     "Live",
//     "JavaScript",
//     "BGMI",
//     "React",
//     "Cricket",
//     "Soccer",
//     "Cooking",
//     "Watched",
//     "Football",
//     "Songs",
//   ];

//   return (
//     <div
//       className="
//         flex flex-wrap justify-center gap-2 p-2
//         md:flex-nowrap md:justify-start md:overflow-x-auto
//       "
//     >
//       {list.map((name, index) => (
//         <Button key={index} name={name} />
//       ))}
//     </div>
//   );
// };

// export default ButtonList;

import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Music",
    "Mixes",
    "Live",
    "JavaScript",
    "BGMI",
    "React",
    "Cricket",
    "Soccer",
    "Cooking",
    "Watched",
    "Football",
    "Songs",
  ];

  return (
    <div className="w-full flex justify-center md:py-4 md:mx-2">
      <div className="flex justify-start overflow-x-auto md:overflow-x-visible space-x-2 px-2  ">
        {list.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
