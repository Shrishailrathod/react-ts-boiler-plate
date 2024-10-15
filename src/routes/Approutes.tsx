import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Loading } from "./components/loading";
import { NotFound } from "./components/not-found";

export const Approutes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<span>About Us</span>} />
          <Route path="contact" element={<span>Contact Us</span>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
