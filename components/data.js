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
      title: "Blazing Speed",
      desc: "We offer blazing fast speeds for both our free & premium client. Don't worry about lag on you server..",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Uptime",
      desc: "Activ offers very good uptime for all Premium users. The last thing you want to worry about is your server going offline.",
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
  desc: "Here We Have Noted Some More Features Of Our Service .",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Free",
      desc: "Activ is an always free service. We still have paid plans wich you can purchase.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Security",
      desc: "Our product is built using the latest version of Pylex Dashboard and Pterodactyl, ensuring state-of-the-art performance and functionality.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Rewards",
      desc: "We Giveaway Resources for ur server",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
