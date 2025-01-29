import { useEffect } from "react";
import "./baloon.scss";
export const Baloon = () => {
  const htmlBaloon = `
<div id="bubble2" class="gradientBubble"></div>
<div id="bubble" class="gradientBubble"></div>
<div id="bubble3" class="gradientBubble"></div>
<div id="bubble4" class="gradientBubble"></div>
<div id="bubble5" class="gradientBubble"></div>
<div id="moon">
	<div  >`;
  return (
    <div
      className="ballon-wrap"
      dangerouslySetInnerHTML={{ __html: htmlBaloon }}
    ></div>
  );
};
