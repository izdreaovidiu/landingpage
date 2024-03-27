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
      <div className="h-72">
        <p className="flex justify-center pt-10 text-[36px] font-extrabold text-[#1F2937]">
          The "Ancient Technique" of making artisanal pasta
        </p>
        <div className="flex justify-center pt-10 space-x-24 ">
          <div className="align-top	text-center">
            <div className="relative w-44 h-44">
              <Image
                className="outline outline-2 rounded-lg outline-blue-500 "
                src={
                  "https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd650x433_wm.jpg"
                }
                layout="fill"
                alt="Cacio"
              ></Image>
            </div>
            <p className="w-44 text-[18px] text-[#e5e7eb] mt-2">Cacio e Pepe</p>
          </div>
          <div className="align-top	text-center">
            <div className="relative w-44 h-44">
              <Image
                className="outline outline-2 rounded-lg outline-blue-500"
                src={
                  "https://flavorthoughts.com/wp-content/uploads/2023/05/Pasta-alla-Gricia-3.jpg"
                }
                layout="fill"
                alt="gricia"
              ></Image>
            </div>
            <p className="w-44 text-[18px] text-[#e5e7eb] mt-2">Gricia</p>
          </div>
          <div className="align-top	text-center">
            <div className="relative w-44 h-44">
              <Image
                className="outline outline-2 rounded-lg outline-blue-500"
                src={amatriciana}
                layout="fill"
                alt="Amatriciana"
              ></Image>
            </div>
            <p className="w-44 text-[18px] text-[#e5e7eb] mt-2">Amatriciana</p>
          </div>
          <div className="align-top	text-center">
            <div className="relative w-44 h-44">
              <Image
                className="outline outline-2 rounded-lg outline-blue-500"
                src={
                  "https://www.recipetineats.com/wp-content/uploads/2023/01/Carbonara_6a.jpg"
                }
                layout="fill"
                alt="Amatriciana"
              ></Image>
            </div>
            <p className="w-44 text-[18px] text-[#e5e7eb] mt-2">Carbonara</p>
          </div>
        </div>
      </div>
    </main>
  );
}
