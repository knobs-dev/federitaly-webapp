import React from "react";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Slider,
} from "@components";

type Topics = "generic" | "the_certification" | "blockchain" | "advantages";

type FaqMobileProps = {
  selectedTopic: Topics;
  topicsFaqs: Record<Topics, { question: string; answer: string }[]>;
  handleSwitchTopic: (topic: Topics) => void;
};

const FaqMobile: React.FC<FaqMobileProps> = ({
  selectedTopic,
  topicsFaqs,
  handleSwitchTopic,
}) => {
  const { t } = useTranslation();

  return (
    <div className="absolute left-0 top-4 min-h-full w-screen flex flex-col overflow-hidden">
      <header className="absolute left-0 top-0 h-[5.375rem] w-full">
        <h2 className="{text-[0.9375rem] px-4 font-semibold">
          {t("Faq.title")}
        </h2>
        <Slider freeMode className="mt-2 w-full">
          {Object.keys(topicsFaqs).map((topic, index) => (
            <button
              type="button"
              key={topic}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                selectedTopic === topic
                  ? "bg-[#4164B0]"
                  : "bg-transparent border-1 border-[#285ED4]"
              } ${index === 0 ? "ml-4" : "ml-2"} ${
                index === Object.keys(topicsFaqs).length - 1 ? "mr-4" : "mr-2"
              }`}
              onClick={() => handleSwitchTopic(topic as Topics)}
            >
              {t(`Faq.topics.${topic as Topics}`)}
            </button>
          ))}
        </Slider>
      </header>
      <section className="absolute left-0 top-[5.375rem] h-[calc(100%-5.375rem)] w-full overflow-y-scroll px-4 py-8">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col space-y-2"
        >
          {topicsFaqs[selectedTopic as Topics].map(
            ({ question, answer }, index) => (
              <AccordionItem
                key={`Faq.${selectedTopic}-question-${index}`}
                value={`Faq.${selectedTopic}-question-${index}`}
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </section>
    </div>
  );
};

export default FaqMobile;
