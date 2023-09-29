import React from "react";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Slider,
} from "@components";
import HeaderDesktop from "@components/HeaderDesktop";

type Topics = "generic" | "the_certification" | "blockchain" | "advantages";

type TFaqDesktop = {
  selectedTopic: Topics;
  topicsFaqs: Record<Topics, { question: string; answer: string }[]>;
  handleSwitchTopic: (topic: Topics) => void;
};

const FaqDesktop: React.FC<TFaqDesktop> = ({
  selectedTopic,
  topicsFaqs,
  handleSwitchTopic,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative pb-24">
      <HeaderDesktop title={t("Common.sidebar.navigation.faq")} />
      <section className="relative container mx-auto grid grid-cols-12 mt-20 gap-8">
        <div className="col-span-full">
          <h2 className="text-[1.625rem] text-black">{t("Faq.title")}</h2>
        </div>
        <div className="col-span-3 flex justify-start items-start flex-col mt-16">
          {Object.keys(topicsFaqs).map((topic, index) => (
            <div className="flex justify-start items-center space-x-4">
              <div
                className={`w-12 h-1 ${
                  selectedTopic === topic ? "bg-[#3A86FF]" : "bg-transparent"
                }`}
              />
              <button
                type="button"
                key={topic}
                className={`py-1.5 text-[1rem] ${
                  selectedTopic === topic
                    ? "text-[#3A86FF] font-bold"
                    : "text-[#636D79]"
                }`}
                onClick={() => handleSwitchTopic(topic as Topics)}
              >
                {t(`Faq.topics.${topic as Topics}`)}
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-9 mt-16">
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
        </div>
      </section>
    </div>
  );
};

export default FaqDesktop;
