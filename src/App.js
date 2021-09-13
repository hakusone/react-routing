import React from "react";
import Navigation from "./Navigation";
import ROUTES, { RenderRoutes } from "./routes";

function App() {
  return (
    <>
      <Navigation routes={ROUTES} />
      <RenderRoutes routes={ROUTES} />
    </>
  );
}

export default App;
