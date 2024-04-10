"use client";

type Props = {
  count: string;
  title: string;
  text: string;
};

export default function TutorialCard({ count, title, text }: Props) {
  return (
    <div className="group flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 lg:hover:bg-gradient-to-b lg:hover:from-secondary-700 lg:hover:via-secondary-800 lg:hover:via-75% lg:hover:to-secondary-900 xl:aspect-[9/16]">
      <h2 className="group text-3xl font-bold text-primary-300 group-hover:text-white md:text-4xl lg:text-5xl">
        {count}
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-primary-300 group-hover:text-white xl:text-lg">
          {title}
        </h3>
        <p className="text-pretty text-sm text-black group-hover:text-white xl:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
