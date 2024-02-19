import React from "react";

import Link from "next/link";

function EventsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-start gap-6 flex-wrap">
      {children}
    </div>
  );
}

function EventCard({
  heading,
  date,
  description,
  link,
}: {
  heading: string;
  date: string;
  description: string;
  link: string;
}) {
  return (
    <div className="flex flex-col justify-evenly items-start gap-4 w-[250px] h-[250px] max-w-[250px] max-h-[250px] bg-white drop-shadow hover:drop-shadow-xl duration-1000 rounded p-6">
      <div>
        <div className="text-xl tracking-tighter font-bold text-sky-500">{heading}</div>
        <div className="text-sky-300">{date}</div>
        <div className="text-sky-500">{description}</div>
      </div>
      <Link className="text-orange-500 hover:text-white bg-white border hover:bg-orange-500 border-orange-500 p-2 duration-500 rounded" href={link}>
        Read more
      </Link>
    </div>
  );
}

export default function Page() {
  const items = [
    {
      heading: "Ying Yod",
      date: "06-02-24",
      description: "random description",
      link: "/events/ying-yod",
    },
    {
      heading: "MakeX Competition",
      date: "2023",
      description: "Robotics competition",
      link: "/events/makex-2023",
    },
    {
      heading: "MakeX Competition",
      date: "2023",
      description: "Robotics competition",
      link: "/events/makex-2023",
    },
    {
      heading: "MakeX Competition",
      date: "2023",
      description: "Robotics competition",
      link: "/events/makex-2023",
    },
    {
      heading: "MakeX Competition",
      date: "2023",
      description: "Robotics competition",
      link: "/events/makex-2023",
    },
  ];

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="text-6xl text-orange-500 font-bold tracking-tighter">
        Events
      </div>
      <br></br>
      <EventsContainer>
        {items.map((item, i) => (
          <EventCard
            key={i}
            heading={item.heading}
            date={item.date}
            description={item.description}
            link={item.link}
          />
        ))}
      </EventsContainer>
    </div>
  );
}
