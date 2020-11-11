import React from "react";
import styled from "styled-components";
import "./styles.css";
import Header from "./Header";
import MainVisual from "./MainVisual";
import Photos from "./Photos";
import Course from "./Course";
import News from "./News";
import Access from "./Access";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <>
        {<Header />}
        {<MainVisual />}
        {<Photos />}
        {<Course />}
        {<News />}
        {<Access />}
        {<Contact />}
        {<Footer />}
      </>
    </div>
  );
}
