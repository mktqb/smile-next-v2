import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BannerFaq from "@/assets/Banner_faq.jpg";
import FaqsSection from "@/components/faqs-section";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("Metadata.faq.title"),
    description: t("Metadata.faq.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Faq");
  return (
    <>
      <div className="relative h-80 w-full">
        <Image
          src={BannerFaq}
          alt="Banner"
          className="h-full w-full object-cover object-[30%_20%] lg:object-[20%_50%] 2xl:object-[20%_70%]"
        />
        <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center bg-black/50">
          <h1 className="w-full pt-28 text-center text-2xl font-bold text-white">
            {t("title")}
          </h1>
        </div>
      </div>
      <section>
        <FaqsSection
          translations={[
            {
              title: t("luggage.title"),
              faq: [
                {
                  question: t("luggage.faq.0.question"),
                  answer: [
                    t("luggage.faq.0.answer.0"),
                    t("luggage.faq.0.answer.1"),
                    t("luggage.faq.0.answer.2"),
                  ],
                },
                {
                  question: t("luggage.faq.1.question"),
                  answer: [
                    t("luggage.faq.1.answer.0"),
                    /* { type: "raw", content: t.raw("luggage.faq.1.answer.1") }, */
                    t("luggage.faq.1.answer.1"),
                    t("luggage.faq.1.answer.2"),
                  ],
                },
                {
                  question: t("luggage.faq.2.question"),
                  answer: [t("luggage.faq.2.answer.0")],
                },
                {
                  question: t("luggage.faq.3.question"),
                  answer: [t("luggage.faq.3.answer.0")],
                },
                {
                  question: t("luggage.faq.4.question"),
                  answer: [
                    t("luggage.faq.4.answer.0"),
                    {
                      type: "list",
                      content: [
                        t("luggage.faq.4.answer.1"),
                        t("luggage.faq.4.answer.2"),
                        t("luggage.faq.4.answer.3"),
                        t("luggage.faq.4.answer.4"),
                        t("luggage.faq.4.answer.5"),
                        t("luggage.faq.4.answer.6"),
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: t("ticket.title"),
              faq: [
                {
                  question: t("ticket.faq.0.question"),
                  answer: [
                    t("ticket.faq.0.answer.0"),
                    t("ticket.faq.0.answer.1"),
                  ],
                },
                {
                  question: t("ticket.faq.1.question"),
                  answer: [t("ticket.faq.1.answer.0")],
                },
                {
                  question: t("ticket.faq.2.question"),
                  answer: [t("ticket.faq.2.answer.0")],
                },
                {
                  question: t("ticket.faq.3.question"),
                  answer: [
                    t("ticket.faq.3.answer.0"),
                    t("ticket.faq.3.answer.1"),
                    t("ticket.faq.3.answer.2"),
                    t("ticket.faq.3.answer.3"),
                  ],
                },
                {
                  question: t("ticket.faq.4.question"),
                  answer: [t("ticket.faq.4.answer.0")],
                },
                {
                  question: t("ticket.faq.5.question"),
                  answer: [t("ticket.faq.5.answer.0")],
                },
              ],
            },
            {
              title: t("conditions.title"),
              faq: [
                {
                  question: t("conditions.faq.0.question"),
                  answer: [
                    t("conditions.faq.0.answer.0"),
                    t("conditions.faq.0.answer.1"),
                  ],
                },
                {
                  question: t("conditions.faq.1.question"),
                  answer: [
                    t("conditions.faq.1.answer.0"),
                    t("conditions.faq.1.answer.1"),
                  ],
                },
                {
                  question: t("conditions.faq.2.question"),
                  answer: [
                    t("conditions.faq.2.answer.0"),
                    t("conditions.faq.2.answer.1"),
                  ],
                },
                {
                  question: t("conditions.faq.3.question"),
                  answer: [t("conditions.faq.3.answer.0")],
                },
                {
                  question: t("conditions.faq.4.question"),
                  answer: [t("conditions.faq.4.answer.0")],
                },
              ],
            },
          ]}
        />
      </section>
      {/* <section className="section-container">
        <h2 className="pt-14 text-xl font-bold">{t("general_info.title")}</h2>
        <p
          className="pt-5 font-light"
          dangerouslySetInnerHTML={{
            __html: t.raw("general_info.text"),
          }}
        />
      </section> */}
    </>
  );
}
