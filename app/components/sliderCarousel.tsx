"use client";

import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

export default function SliderCarousel(props: { data: any }) {
  const images = props.data || [{ src: "", label: "" }];

  return (
    <div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log("I am ready")}
      >
        {images.map((item: any) => (
          <div key={item.src} className="rounded">
            <Image
              src={item.src}
              width={300}
              height={300}
              alt={item.label}
              style={{ borderRadius: "10px" }}
              priority={true}
            ></Image>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}
