import React from "react";
import { Routes, Route } from "react-router-dom";
import { UploadPhotoScreen, InvitationScreen } from "./ui/screen";
import { BASE_PATH } from "./helpers";

export const SIDE_MENU = [
  {
    path: `upload`,
    element: <UploadPhotoScreen />,
  },
  {
    path: `/`,
    element: <InvitationScreen />,
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
