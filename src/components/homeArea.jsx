
import EventCard from '../components/eventCard';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
const list = [
  {
    title: "Orange",
    img: "/images/fruit-1.jpeg",
    no_of_qs: "12",
  },
  {
    title: "Tangerine",
    img: "/images/fruit-2.jpeg",
    no_of_qs: "7",
  },
  {
    title: "Raspberry",
    img: "/images/fruit-3.jpeg",
    no_of_qs: "8",
  },
  {
    title: "Lemon",
    img: "/images/fruit-4.jpeg",
    no_of_qs: "30",
  },
  {
    title: "Avocado",
    img: "/images/fruit-5.jpeg",
    no_of_qs: "10",
  },
];

export default function HomeArea() {
  return (

    <div class="w-full px-12 py-16 bg-[#2D3250]">
      <div className="gap-10 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card className='bg-[#1B2137] shadow-2xl' radius='sm' shadow="lg" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-lg justify-between">

              <div className='flex flex-col w-full'>
              <div className='flex flex-row justify-between'>
                <b className='text-yellow-400'>{item.title}</b>
                <p className="text-default-500">{item.no_of_qs}</p>
                </div>
                <div className='flex flex-row justify-between'>
                  <span className='text-[12px] text-slate-400'>Total Score</span>
                  <span className="text-[12px] text-slate-400">{item.no_of_qs}</span>
                </div>
              </div>

            </CardFooter>

          </Card>
        ))}
      </div>
    </div>

    // <div>
    //   <section class="text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-wrap -m-4">
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
    //             <p class="mt-1">$16.00</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
    //             <p class="mt-1">$21.15</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
    //             <p class="mt-1">$12.00</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
    //             <p class="mt-1">$18.40</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
    //             <p class="mt-1">$16.00</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
    //             <p class="mt-1">$21.15</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
    //             <p class="mt-1">$12.00</p>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
    //             <p class="mt-1">$18.40</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    // <div class="bg-[#2D3250] text-white">
    //   <div class="p-4 mt-14">
    //     <div class="flex items-center justify-left h-20">
    //       <p class="text-3xl text-white">
    //         Your Stats
    //       </p>
    //     </div>
    //     <div class="flex items-center justify-left h-20">
    //       <p class="text-3xl text-white">
    //         Your Past Competitions
    //       </p>
    //     </div>
    //     <EventCard title={"Digital Cyber Pakistan"} organizer={"Ignite Inc"} date={"12-Dec-2023"} position={62} description={"Pakistans National Level Cyber Hackathon"} />
    //     <EventCard title={"Air University Hackathon"} organizer={"Air Uni"} date={"1-Dec-2023"} position={80} description={"Organzied by Air University Islamabad"} />

    //   </div>
    // </div>
  );
}
