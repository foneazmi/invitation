import React from "react";
import { Routes, Route } from "react-router-dom";
import { UploadPhotoScreen, InvitationScreen } from "./ui/screen";

export const SIDE_MENU = [
  {
    path: "/invitation",
    element: <InvitationScreen />,
  },
  {
    path: "/photo/upload",
    element: <UploadPhotoScreen />,
  },
];

export const RouterApp = () => {
  return (
    <Routes>
      {SIDE_MENU.map((route) => (
        <Route
          key={`${route.path}-sidebar`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};
