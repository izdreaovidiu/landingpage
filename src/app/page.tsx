import Image from "next/image";
import pasta from "E:/Projects/basic/landing-page/pasta.jpg";
import amatriciana from "E:/Projects/basic/landing-page/amatriciana.png";

export default function Home() {
  return (
    <main>
      <div className="bg-[#1F2937] text-[#f9faf8] h-96">
        <div className="flex flex-row ">
          <p className="px-60 text-[24px] text-left">Logo</p>
          <div className="text-right flex flex-row ml-auto px-60 gap-10">
            <p className="">header link one</p>
            <p className="">header link two</p>
            <p className="">header link three</p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="px-60 text-[24px] text-left pt-20">
            <p className="text-[48px] font-extrabold text-[#f9faf8] ">
              Roman Quality!
            </p>
            <p className="text-[18px] text-[#e5e7eb]">
              The best Roman pasta in Italy is here at your door!
            </p>
            <button className="bg-[#3882f6] rounded-lg mt-3">
              <p className="mx-9 my-1 text-[18px]">Order Now!</p>
            </button>
          </div>
          <div className=" pt-20 px-60 ">
            <Image
              className="outline outline-2 rounded-lg outline-blue-500 "
              src={pasta}
              alt="Pasta"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="h-96 flex flex-col items-center text-[#1f2937]">
          <p className="flex justify-center pt-10 text-[36px] font-extrabold text-[#1F2937] ">
            The "Ancient Technique" of making artisanal pasta
          </p>
          <div className="flex justify-center pt-10 space-x-24 w-2/3">
            <div className="align-top	text-center ">
              <div className="relative w-52 h-52">
                <Image
                  className="outline outline-2 rounded-lg outline-blue-500 "
                  src={
                    "https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd650x433_wm.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="Cacio"
                ></Image>
              </div>
              <p className="w-52 text-[18px] mt-2">Cacio e Pepe</p>
            </div>
            <div className="align-top	text-center">
              <div className="relative w-52 h-52">
                <Image
                  className="outline outline-2 rounded-lg outline-blue-500"
                  src={
                    "https://flavorthoughts.com/wp-content/uploads/2023/05/Pasta-alla-Gricia-3.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="gricia"
                ></Image>
              </div>
              <p className="w-52 text-[18px] mt-2">Gricia</p>
            </div>
            <div className="align-top	text-center ">
              <div className="relative w-52 h-52">
                <Image
                  className="outline outline-2 rounded-lg outline-blue-500"
                  src={amatriciana}
                  layout="fill"
                  objectFit="cover"
                  alt="Amatriciana"
                ></Image>
              </div>
              <p className="w-52 text-[18px] mt-2">Amatriciana</p>
            </div>
            <div className="align-top	text-center">
              <div className="relative w-52 h-52">
                <Image
                  className="outline outline-2 rounded-lg outline-blue-500"
                  src={
                    "https://www.recipetineats.com/wp-content/uploads/2023/01/Carbonara_6a.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="Amatriciana"
                ></Image>
              </div>
              <p className="w-52 text-[18px] mt-2">Carbonara</p>
            </div>
          </div>
        </div>
        <div className="bg-[#e5e7eb] h-96 flex justify-center">
          <div className="flex justify-center flex-col w-2/3 p-[68px]">
            <p className="text-[#1F2937] text-[36px] italic text-center ">
              "Indulge in the timeless comfort of pasta; where every twirl tells
              a story of tradition, taste, and togetherness."
            </p>
            <div className="my-5 text-right">
              <p className="text-[#1F2937] text-[18px] font-extrabold ">
                - Nadia Caterina, Pasta Queen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60 flex justify-center items-center">
        <div className="h-28 bg-[#3882f6] w-3/4 rounded-lg text-[#f9faf8] flex flex-row">
          <div className="flex flex-col w-3/4 h-full py-[28px] justify-center">
            <div className=" px-[141px] font-bold">
              <p className=" ">Try Now! It's time!</p>
            </div>
            <div className="px-[141px] font-extralight">
              <p>Buy our delicious pasta and try these techniques at home.</p>
            </div>
          </div>
          <div className="flex w-1/4 items-center justify-center ">
            <button className="rounded-lg outline outline-2 outline-white ">
              <p className="text-white text-[18px] text-right mx-2 py-1">
                Order Now!
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
