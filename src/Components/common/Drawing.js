import React from "react";
import AlphabetDraw from "./AlphabetDraw";
import testimg from "../ImagesForPratice/A.png";

const Drawing = () => {
  const images = [
    {
      id: 1,
      name: "A",
      image:
        "/Users/imac/Documents/Sarika/Final project_2/learning-mothertounge/src/Components/ImagesForPractice/A.png",
    },
    {
      id: 2,
      name: "aa",
      image: "/ImagesForPractice/aaa_cropped.jpeg",
    },
    {
      id: 3,
      name: "Aaa",
      image: "./ImagesForPractice/Aaa.png",
    },
    {
      id: 4,
      name: "aau",
      image: "/ImagesForPractice/aau.jpeg",
    },
    {
      id: 5,
      name: "aha",
      image: "/ImagesForPractice/Aha.png",
    },
    {
      id: 6,
      name: "am",
      image: "/ImagesForPractice/Amm_cropped.png",
    },
    {
      id: 7,
      name: "ee",
      image: "/ImagesForPractice/ee.jpeg",
    },
    {
      id: 8,
      name: "Ee",
      image: "./ImagesForPractice/Ee.png",
    },
    {
      id: 9,
      name: "eee",
      image: "/ImagesForPractice/eee.png",
    },
    {
      id: 10,
      name: "Eee",
      image: "/ImagesForPractice/Eeee.png",
    },
    {
      id: 11,
      name: "ee",
      image: "/ImagesForPractice/eeeeee.png",
    },
    {
      id: 12,
      name: "ga",
      image: "/ImagesForPractice/ga.png",
    },
    {
      id: 13,
      name: "gha",
      image: "./ImagesForPractice/Gha.png",
    },
    {
      id: 14,
      name: "ka",
      image: "/ImagesForPractice/Ka.png",
    },
    {
      id: 15,
      name: "kha",
      image: "./ImagesForPractice/kha.png",
    },

    {
      id: 16,
      name: "oo",
      image: "/ImagesForPractice/Oo.png",
    },
    {
      id: 16,
      name: "oooU",
      image: "/ImagesForPractice/Oooou.png",
    },
    {
      id: 17,
      name: "uu",
      image: "/ImagesForPractice/Uu.png",
    },
    {
      id: 15,
      name: "uue",
      image: "/ImagesForPractice/uue.png",
    },
  ];

  return (
    <div>
      {/* {images.map((image) => {
        return <AlphabetDraw picture={image.image} />;
      })} */}

      <img src={testImg} />
    </div>
  );
};

export default Drawing;
