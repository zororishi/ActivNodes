import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Benefits",
  desc: "Here We Have Noted Some Key Features Of Our Service .",
  image: benefitOneImg,
  bullets: [
    {
      title: "We Understand our customers",
      desc: "We value the needs of customers and try our best to give them what we can.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Updates",
      desc: "We Provide 3 Months of update support for paid customers.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Support",
      desc: "We Provide First Class Support For Our Users.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More Benefits",
  desc: "Here We Have Noted Some  Features Of Our Service .",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Web",
      desc: "We design as a mobile first responsive websites.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "We Make Websites Powered By Leading FRameworks.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "We Give Dark & Light Mode Support For All Of Our WEb Pages.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
