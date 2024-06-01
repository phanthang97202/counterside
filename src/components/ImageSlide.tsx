import { IImage } from "@/types/images";
import React from "react";
import { RImage } from "./RImage";
import { Image } from "antd";
interface IImageSlideProps {
  images: IImage[];
}
const ImageSlide = ({ images }: IImageSlideProps) => {
  return (
    <>
      {images.map((item: IImage) => {
        return (
          <div key={item.id}>
            <Image
              width={"50%"}
              // height={"50%"}
              src="error"
              alt={item.id}
              fallback={item.url}
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageSlide;
