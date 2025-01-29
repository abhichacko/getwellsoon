import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import getwell from "../assets/getwell.jpg";
import "./getwellsoon.scss";
import { Baloon } from "../components/Baloon/Baloon";
import { ImageCard } from "../components/ImageCard/ImageCard";
import badminton from "../assets/badminton.mp4";

export const GetWellSoon = () => {
  return (
    <>
      <Row>
        <Image src={getwell} />
      </Row>
      <Row>
        <h1>Get Well Soon CHITHRA</h1>
      </Row>
      <Baloon></Baloon>
      <Row>
        <ImageCard></ImageCard>
      </Row>
      <Row>
        <h1>Let's Play Together Soon</h1>
      </Row>
      <Baloon></Baloon>
      <Row>
        <div className="w-full h-screen relative">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={badminton} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Row>
      <Row>
        <h1>From Abhi & Riya </h1>
      </Row>
      <Baloon></Baloon>
    </>
  );
};
