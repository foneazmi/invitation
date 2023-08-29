import React from "react";
import { Routes, Route } from "react-router-dom";
import { UploadPhotoScreen, InvitationScreen } from "./ui/screen";
import { isDev } from "./helpers";
const BASE_PATH = isDev ? "" : "/invitation";

export const SIDE_MENU = [
  {
    path: `${BASE_PATH}`,
    element: <InvitationScreen />,
  },
  {
    path: `${BASE_PATH}/upload`,
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
