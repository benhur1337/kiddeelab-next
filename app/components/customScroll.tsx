"use client";

import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

export default function CustomScroll(props: { image: any }) {
  const images = props.image;

  return (
    <div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log("I am ready")}
      >
        {images.map((item:any) => (
          <div key={item.src} className="rounded">
            <Image
              src={item.src}
              width={400}
              height={400}
              alt=""
              style={{ borderRadius: "10px"}}
              priority={true}
            ></Image>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}
