import {  LuLayoutGrid, LuLayers, LuAppWindow, LuSettings, LuCopy, LuRefreshCw } from "react-icons/lu";
import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

function Home() {

  const features = [
  {
    title: "Crafted for Startups",
    desc: "Tuae nam ex similique incidunt expedita exerci  tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
    icon: <LuLayoutGrid />,
  },
  {
    title: "High-quality Design",
    desc: "Tuae nam ex similique incidunt expedita exerci  tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
    icon: <LuLayers />,
  },
  {
    title: "Next.js 16 (Latest)",
    desc: "Tuae nam ex similique incidunt expedita exerci  tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
    icon: <LuAppWindow />,
  },
  {
    title: "Tailwind CSS",
    desc: "Tuae nam ex similique incidunt expedita exerci  tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
    icon: <LuSettings />,
  },
  {
    title: "Fully Customizable",
    desc: "Tuae nam ex similique incidunt expedita exerci  tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
    icon: <LuCopy />,
  },
  {
    title: "Free and Open-Source",
    desc: "Tuae nam ex similique incidunt expedita exerci  tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
    icon: <LuRefreshCw />,
  },
];

  
  const handleClick = () => {
    alert("Image clicked!");
  };

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Free and Open-Source Next.js Template for Startup & SaaS
			<span className="dark:text-violet-600"></span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 16.x and Tailwind CSS.</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 dark:border-gray-300">Get Pro</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Star on GitHub</button>
		</div>
	</div>
</section>

<section className="bg-[#0b1120] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6 mt-6">Main Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-30 text-xl">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 gap-x-40">
          {features.map((item, index ) => (
            <div key={index} className="text-left h-70 w-99 ">
              
              {/* Icon */}
              <div className="w-22 h-22 flex items-center justify-center rounded-xl bg-blue-600/20 mb-6">
                 {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-l leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>


	
<section className="bg-[#0b1120] text-white py-20 px-6">
	<div className="max-w-6xl mx-auto text-center">
	<h2 className="text-5xl font-bold mb-6 mt-6">We are ready to help</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-30 text-xl">
         There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>

	<div className="flex justify-center mt-10">

      <img
        src="https://www.unir.net/wp-content/uploads/2014/10/grado-derecho-online.jpeg"
        alt="clickable"
        onClick={handleClick}
        className="w-[700px] rounded-xl cursor-pointer hover:scale-105 transition"
      />

    </div>

</div>
</section>



<section className="bg-[#0b1120] py-10">
	<div className="container p-6      max-w-8xl mx-auto px-6">
		
		<div className="bg-[#1e293b]  px-8 py-6 flex flex-wrap items-center justify-center gap-10 shadow-lg h-50">
		<div className='flex items-center gap-2 opacity-50'>	<img src='https://startup.demo.nextjstemplates.com/images/brands/uideck-light.svg' className='h-8 w-auto opacity-70 hover:opacity-100 transition duration-300'></img>  </div>
		<div className='flex items-center gap-2 opacity-50'>	<img src='https://startup.demo.nextjstemplates.com/images/brands/formbold-light.svg' className='h-8 w-auto opacity-70 hover:opacity-100 transition duration-300' ></img> </div>
		<div className='flex items-center gap-2 opacity-50'>	<img src='https://startup.demo.nextjstemplates.com/images/brands/tailgrids-light.svg' className='h-8 w-auto opacity-70 hover:opacity-100 transition duration-300'></img> </div>
		<div className='flex items-center gap-2 opacity-50'>	<img src='https://startup.demo.nextjstemplates.com/images/brands/lineicons-light.svg' className='h-8 w-auto opacity-70 hover:opacity-100 transition duration-300'></img> </div>
		<div className='flex items-center gap-2 opacity-50'>	<img src='https://startup.demo.nextjstemplates.com/images/brands/tailadmin-light.svg' className='h-8 w-auto opacity-70 hover:opacity-100 transition duration-300'></img> </div>
		<div className='flex items-center gap-2 opacity-50'>	<img src='https://startup.demo.nextjstemplates.com/images/brands/plainadmin-light.svg' className='h-8 w-auto opacity-70 hover:opacity-100 transition duration-300'></img> </div>
		</div>
	</div>
</section>





    </div>
  )
}

export default Home
