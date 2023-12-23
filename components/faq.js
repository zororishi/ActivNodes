import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faqq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How to get started?",
    answer: "To use activnodes you only need a discord account. We found out that it's way easier to use that instead of manually typing the email and password.",
  },
  {
    question: "So Everything free right?",
    answer: "Yup! We offer free hosting for those who can't afford to pay in order to keep their project online. If you're interested in a paid plan, our cheapest one is only 0.99$ / month!",
  },
  {
    question: "How to upgrade my server? ",
    answer:
      "Upgrading your server is very easy! We offer very easy tasks to earn coins: after completing those tasks, it's as easy as pressing a button to upgrade your server!",
  },
  {
    question: "Do you offer 100% uptime? ",
    answer:
      "We offer 99.99% uptime for our paid plans. Sadly, we can't offer the same performance on our free plans due to high demand for servers.",
  },
];

export default Faqq;