"use client";

type Props = {
  count: string;
  title: string;
  text: string;
};

export default function TutorialCard({ count, title, text }: Props) {
  return (
    <div className="flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 lg:hover:bg-yellow-600 lg:hover:text-black xl:aspect-[9/16]">
      <h2 className="text-3xl font-bold text-green-500 md:text-4xl lg:text-5xl">
        {count}
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-green-500 xl:text-lg">{title}</h3>
        <p className="text-pretty text-sm text-green-800 xl:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
