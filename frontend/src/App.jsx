// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./home/Home";
// import Courses from "./courses/Courses";
// import SignUp from "./components/SignUp";
// import { Toaster } from "react-hot-toast"; //alert message
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   // const [authUser, setAuthUser] = useAuth();
//   // console.log(authUser);
//   return (
//     <div className="dark:bg-slate-900 dark:text-white">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/course" element={<Courses />} />

//         {/* <Route
//           path="/course"
//           element={authUser ? <Courses /> : <Navigate to="/signup" />}
//         /> */}
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// }
// export default App;
// -------------------------------------------------------------GSAP------
// import React from "react";
import Content from "./GSAPannimation/Content";
import Header from "./GSAPannimation/Header";
import Image from "./GSAPannimation/Image";
import "./GSAPannimation/style.css";
import { gsap, Power3 } from "gsap";

const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <div className="hero">
      <Header timeline={tl} ease={ease} />
      <div className="container">
        <Content timeline={tl} />
        <Image timeline={tl} ease={ease} />
      </div>
    </div>
  );
};
export default App;
