"use client";

import clsx from "clsx";
import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface Props {
  translations: {
    title: string;
    faq: {
      question: string;
      answer: (
        | string
        | { type: "list"; content: string[] }
        | { type: "raw"; content: string }
      )[];
    }[];
  }[];
}

export default function FaqsSection({ translations }: Props) {
  const [selected, setSelected] = useState(0);
  return (
    <section className="section-container grid min-h-[450px] grid-cols-1 gap-8 py-10 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1 flex flex-col gap-3">
        {translations.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={clsx(
              "w-full rounded-xl px-3 py-4 shadow-xl duration-200 lg:text-start",
              selected === i &&
                "text-shadow-xxs bg-[#21D840] font-semibold text-white",
              selected !== i && "bg-white text-[#407101]",
            )}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className="col-span-1 lg:col-span-2 xl:col-span-3">
        <Accordion
          defaultExpandedKeys={["0"]}
          itemClasses={{
            content: "flex flex-col gap-2",
          }}
        >
          {translations[selected].faq.map((faq, i) => (
            <AccordionItem
              key={i}
              aria-label={faq.question}
              title={faq.question}
              classNames={{
                heading:
                  "duration-200 bg-neutral-200 text-[#407101] data-[open]:bg-[#21D840] data-[open]:text-white data-[open]:mb-0 data-[open]:font-semibold data-[open]:mb-0 rounded-xl px-3 mb-1",
                title: "duration-200 data-[open]:text-shadow-xxs",
                indicator: "data-[open=true]:text-white",
                content: "px-3 bg-neutral-100 mb-1 text-[#407101]",
              }}
            >
              <div className="space-y-3 text-[#407101]">
                {faq.answer.map((a, i_a) => (
                  <>
                    {typeof a === "string" && <p key={i_a}>{a}</p>}
                    {typeof a === "object" && a.type === "raw" && (
                      <p
                        key={i_a}
                        dangerouslySetInnerHTML={{ __html: a.content }}
                      />
                    )}
                    {typeof a === "object" && a.type === "list" && (
                      <ul className="pl-6" key={i_a}>
                        {a.content.map((li, i_li) => (
                          <li key={i_li} className="list-disc">
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
