import React from "react";
import {
  // Routes, Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { InvitationScreen } from "./ui/screen/invitation";
import { Layout } from "./ui/components";

// export const SIDE_MENU = [
//   {
//     path: "/",
//     element: <InvitationScreen />,
//   },
// ];

// const RouterApp = () => {
//   return (
//     <Routes>
//       {SIDE_MENU.map((route) => (
//         <Route
//           key={`${route.path}-sidebar`}
//           path={route.path}
//           element={route.element}
//         />
//       ))}
//     </Routes>
//   );
// };

export const RouteApp = () => {
  const { theme } = useSelector(({ global }) => global);
  return (
    <div data-theme={theme}>
      <Router>
        <Layout content={<InvitationScreen />} />
      </Router>
    </div>
  );
};
