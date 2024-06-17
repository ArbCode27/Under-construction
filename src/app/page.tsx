import Image from "next/image";
import { Lines } from "./components/Lines";

export default function Home() {
  return (
    <main className="grid lg:flex text-center overflow-hidden min-h-screen items-center justify-center lg:gap-[120px] relative">
      <div className="flex justify-center -mt-[100px] lg:mb-0 lg:mt-0">
        <figure className="lg:w-[300px] w-[200px]">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
      </div>
      <div className="flex flex-col items-center lg:items-start text-white relative -mt-[300px] lg:mt-0">
        <h1 className="font-bold text-[40px] lg:text-[80px] z-[100000] relative uppercase">
          estamos en <br />
          <span className="font-[100] lg:-ml-8 block lg:-mt-8">desarrollo</span>
        </h1>
        <p className="text-[14px] lg:text-left lg:max-w-[500px] max-w-[280px] relative z-[1000]">
          Mientras finalizamos los últimos detalles de nuestra página, te
          invitamos a comunicarte a nuestro contacto en WhatsApp. ¡Estamos
          disponibles para ofrecerte una atención personalizada!
        </p>
        <div className="relative w-[150px] h-[42px]">
          <a
            href="https://wa.me/message/Y6UNSTUFLELBP1"
            className="w-[99%] relative bg-[#1B1D21] block border-solid p-2 mt-4 rounded-full z-[10000] overflow-hidden"
          >
            WhatsApp
          </a>
          <div className="border-button"></div>
        </div>
        <div className="absolute -bottom-[100px] -right-[100px]">
          <Lines />
        </div>
      </div>
      <div className="absolute bottom-8 text-center w-full">
        <p className="text-white font-[100] text-[14px]">
          univfeel derechos reservados
        </p>
      </div>
    </main>
  );
}
