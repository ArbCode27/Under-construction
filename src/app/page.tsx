import Image from "next/image";
import { Lines } from "./components/Lines";

export default function Home() {
  return (
    <main className="grid lg:flex text-center overflow-hidden min-h-screen items-center justify-center lg:gap-[120px] relative">
      <div className="flex justify-center -mt-[140px] lg:mb-0 lg:mt-0">
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
      <div className="text-white relative -mt-[400px] lg:mt-0">
        <h1 className="font-[100] text-[40px] lg:text-[80px] z-[100000] relative uppercase">
          <span className="font-bold">estamos en</span> <br /> desarrollo
        </h1>
        <p className="text-[14px] lg:max-w-[380px] max-w-[280px] relative z-[1000]">
          selecciona el servicio de preferencia y llena el formulario para poder
          tener una reunion lo mas pronto posible.
        </p>
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
