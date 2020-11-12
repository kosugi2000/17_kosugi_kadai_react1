import React from "react";
import styled from "styled-components";
import ImgPath from "./img/mainbg.png";

const StyleApps = styled.div`
  text-align: center;
  justify-content: space-between;
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;
const Footer = () => {
  return (
    <StyleApps>
      <div id="footer">
        <p>copyrights 2016 Cheeese Academy Tokyo All RIghts Reserved.</p>
      </div>
    </StyleApps>
  );
};
export default Footer;
