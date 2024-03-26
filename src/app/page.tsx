import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[#1F2937] text-[#f9faf8]">
        <div className="flex flex-row  w-full h-72">
          <p className="px-40 text-[24px] text-left">Logo</p>
          <div className="text-right flex flex-row ml-auto px-40 gap-10">
            <p className="">header link one</p>
            <p className="">header link two</p>
            <p className="">header link three</p>
          </div>
        </div>
        <div className="px-40 text-[24px] text-left">
          <p className="text-[48px] font-extrabold text-[#f9faf8]">
            Roman Quality!
          </p>
          <p>The best Roman pasta in Italy is here at your door!</p>
          <button className="bg-[#3882f6] rounded-lg">
            <p className="mx-9 text-[18px]">Order Now!</p>
          </button>
        </div>
      </div>
      <div className="h-72"></div>
    </main>
  );
}
