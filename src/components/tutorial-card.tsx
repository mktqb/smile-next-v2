"use client";

type Props = {
  count: string;
  title: string;
  text: string;
};

export default function TutorialCard({ count, title, text }: Props) {
  return (
    <div className="group flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 hover:bg-[#03A9EA]  max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 xl:aspect-[9/16]">
      <h2 className="text-3xl font-bold text-[#21D840] group-hover:text-white md:text-4xl lg:text-5xl">
        {count}
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-[#21D840] group-hover:text-white xl:text-xl 2xl:text-2xl">
          {title}
        </h3>
        <p className="text-pretty text-sm text-black group-hover:text-white xl:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
