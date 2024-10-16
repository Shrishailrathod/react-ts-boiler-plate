import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Loading } from "../components/loading";
import { NotFound } from "../components/not-found";
import { AboutUs } from "../pages/about-us";
import { ContactUs } from "../pages/contact-us";

export const Approutes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
