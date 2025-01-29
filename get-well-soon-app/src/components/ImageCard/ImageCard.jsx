import "./ImageCard.scss";
import Image from "react-bootstrap/Image";
import getwell from "../../assets/getwell.jpg";
export const ImageCard = () => {
  const htmlImage = `<div class="container">
  <div class="card">
    <div class="image image1"></div>
    <div class="info">
      <h2>About me</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
    </div>
  </div>
  <div class="card">
    <div class="image image2"></div>
  </div>
  <div class="card">
    <div class="image image3"></div>
  </div>
</div>
<svg>
  <filter id="wavy1">
    <feturbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feturbulence>
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg>
<svg>
  <filter id="wavy2">
    <feturbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feturbulence>
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg>
<svg>
  <filter id="wavy3">
    <feturbulence x="0" y="0" baseFrequency="0.1" numOctaves="5" seed="1"></feturbulence>
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg>`;
  return (
    <div
      className="imageCardWrap"
      //   dangerouslySetInnerHTML={{ __html: htmlImage }}
    >
      <div className="container">
        <div className="card">
          <div className="image image1">{/* <Image src={getwell} />  */}</div>
          <div className="info"></div>
        </div>
        <div className="card">
          <div className="image image2"></div>
        </div>
        <div className="card">
          <div className="image image3"></div>
        </div>
      </div>
      <svg>
        <filter id="wavy1">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.2"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      <svg>
        <filter id="wavy2">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      <svg>
        <filter id="wavy3">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.1"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  );
};
