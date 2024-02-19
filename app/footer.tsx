import Image from "next/image";
import Link from "next/link";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

const FooterNav = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Our Courses",
    path: "/our-courses",
  },
  {
    label: "Our Team",
    path: "/our-team",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const FooterLinks = () => {
  return (
    <div className="flex flex-row justify-evenly w-screen sm:hidden">
      <div className="flex flex-col">
        <div className="text-2xl tracking-tighter font-extrabold text-orange-500">
          Navigation
        </div>
        {FooterNav.map((item: any) => (
          <Link
            className="text-xl tracking-tighter text-sky-500 font-semibold"
            key={item.label}
            href={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div>
        <div className="text-2xl tracking-tighter font-extrabold text-orange-500">
          Our Socials
        </div>
        <div className="flex flex-row justify-center gap-2 items-center">
          <Link href="https://www.facebook.com/kiddeelab/">
            <FontAwesomeIcon
              className="text-4xl text-sky-500"
              icon={faSquareFacebook}
            />
          </Link>
          <Link href="https://www.instagram.com/kiddeelab">
            <FontAwesomeIcon
              className="text-4xl text-sky-500"
              icon={faSquareInstagram}
            />
          </Link>
          <Link href="https://page.line.me/kiddeelab">
            <FontAwesomeIcon
              className="text-[2rem] text-sky-500"
              icon={faLine}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 p-4 mt-10 min-w-0 select-none">
      <FooterLinks />
      <Image
        src="/logo.png"
        height={300}
        width={300}
        style={{ height: "30px", width: "30px", objectFit: "contain" }}
        alt="logo"
      ></Image>
      <div className="text-center text-sm text-sky-200">
        Kiddee Lab est.2018
      </div>
    </div>
  );
}
