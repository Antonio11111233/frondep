import Image from "next/image";
import Link from 'next/link'
// import  MenuItem  from "./Home";
import { MenuItem } from "./MenuItem";
import { MenuItemTwo} from "./MenuItem-two"
import { MENU } from "./menu.data";
import { MENUTWO } from "./menu.data-two";
import './globals.scss'
import Particle from "./components/Particle";
// import './index.js';
import { OctagonX } from "lucide-react";
import Navbar from "./components/Navbar";


export default function Home() {
  return (	
    	
    <main className="flex items-center h-screen relative bg-cover ">
      
      <div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
        
        <Particle/>
      </div>
      
      {/* <div className="absolute right-10 md:right-40 bottom-0 z-[10]/">
        
        <Image
          src=""
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div> */}
      {/* <Image
          src="/assets/top-left-img.png"
          alt="paint"
          width={230}
          height={230}
          className="absolute left-0 top-0"
        /> */}

        <div className="flex flex-col gap- z-[10] pl-40 pt-20 ">
          <h1 className="flex-[50px] text-white max-w-[500px] text-[25px]">
          Добро пожаловать в {" "}
            <span className="text-red-500">Minimo</span>
          </h1>
          <p className="text-[19px] text-gray-200 md:text-gray-400 mb-15 md:pb-2 max-w-[400px]">
          Добро пожаловать на наш сайт планирования задач! Управляйте своим временем эффективно и организованно
           с нашим инновационным инструментом. Создавайте задачи, устанавливайте приоритеты, следите за прогрессом
           и достигайте своих целей легко и уверенно. Давайте вместе сделаем ваш день более продуктивным!
             
          </p>

          <aside>
        <div>

        





        {/* <div className="btn-flipt" data-back="Back" data-front="Индивидуальный">
          <p>Командный</p>
        </div>  */}
      </div>
      </aside>
      
        </div>
        <div className="btn-flip z-[11]" data-back="Релиз ?/12/2025" data-front="beta-test" >
          {MENU.map(item => (
            <MenuItem
              item={item}
              key={item.link}
            />
          ))}
        </div>

        <div className="btn-flip z-[11]" data-back="Релиз ?/05/2026" data-front="!В разработке!" >
          {MENUTWO.map(item => (
            <MenuItemTwo
              item={item}
              key={item.link}
            />
          ))}
        </div>
        <Navbar />
    </main>
   
  );
};



{/* <div className="relative w-[100px] h-[100px] md:w-[160] md:h-[160] mt-5"> */}
{/* <Image
    src="/assets/rounded-text.png"
    alt="projects"
    width={160}
    height={160}
    className="slow-spin"
    
/> */}

{/* </div> */}



  // /* <footer className='text-xs opacity-40 font-normal text-center p-layout'>
  //   2024 &copy; With love from{' '}
  //   <a
  //     href='https://www.youtube.com/c/redgroup/?sub_confirmation=1'
  //     target='_blank'
  //     rel='noreferrer'
  //     className='hover:text-primary text-brand-300 transition-colors'
  //   >
  //     RED Group
  //   </a>
  //   . <br /> All rights reserved.
  // </footer> */
  // bg-[url('/assets/bg-explosion.png')]