import InforPopup from "@/components/InforPopup";
import { IImage } from "@/types/images";
import { Carousel, Image } from "antd";
export default function Home() {
  const DUMMY_IMAGE1 = Array.from({ length: 14 }, (x, y) => {
    return {
      id: (y + 1).toString(),
      url: `./counterside/c${y + 1}.jpg`,
    };
  });
  const DUMMY_IMAGE2 = Array.from({ length: 19 }, (x, y) => {
    return {
      id: (y + 1).toString(),
      url: `./counterside/g${y + 1}.jpg`,
    };
  });

  const DUMMY_IMAGE3 = Array.from({ length: 2 }, (x, y) => {
    return {
      id: (y + 1).toString(),
      url: `./counterside/o${y + 1}.jpg`,
    };
  });

  const DUMMY_IMAGE4 = Array.from({ length: 2 }, (x, y) => {
    return {
      id: (y + 1).toString(),
      url: `./counterside/w${y + 1}.jpg`,
    };
  });

  return (
    <main className="m-auto w-[96%]">
      <InforPopup />
      <Carousel arrows infinite={true} autoplay>
        {DUMMY_IMAGE1.map((item: IImage) => {
          return (
            <Image
              key={item.id}
              // width={"50%"}
              // height={"50%"}
              alt={item.id}
              fallback={item.url}
            />
          );
        })}
      </Carousel>
      <Carousel arrows infinite={true} autoplay>
        {DUMMY_IMAGE2.map((item: IImage) => {
          return (
            <Image
              key={item.id}
              // width={"50%"}
              // height={"50%"}
              alt={item.id}
              fallback={item.url}
            />
          );
        })}
      </Carousel>
      <Carousel arrows infinite={true} autoplay>
        {DUMMY_IMAGE3.map((item: IImage) => {
          return (
            <Image
              key={item.id}
              // width={"50%"}
              // height={"50%"}
              alt={item.id}
              fallback={item.url}
            />
          );
        })}
      </Carousel>
      <Carousel arrows infinite={true} autoplay>
        {DUMMY_IMAGE4.map((item: IImage) => {
          return (
            <Image
              key={item.id}
              // width={"50%"}
              // height={"50%"}
              alt={item.id}
              fallback={item.url}
            />
          );
        })}
      </Carousel>
    </main>
  );
}
