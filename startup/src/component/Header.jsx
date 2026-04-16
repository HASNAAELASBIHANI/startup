
import { Link } from 'react-router-dom'
import {  LuLayoutGrid, LuLayers, LuAppWindow, LuSettings, LuCopy, LuRefreshCw } from "react-icons/lu";
import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

function Header() {

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
      <header className="p-4 dark:bg-gray-800 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
				<path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
				<path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
			</svg>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to="/" className="flex items-center px-4 -mb-1 - dark:text-violet-600 dark:border-violet-600">HOME</Link>
			</li>
			<li className="flex">
				<Link to="/about" className="flex items-center px-4 -mb-1 -">ABOUT</Link>
			</li>
			<li className="flex">
				<Link to="/blog" className="flex items-center px-4 -mb-1 -">BLOUG</Link>
			</li>
			<li className="flex">
				<Link to="/support" className="flex items-center px-4 -mb-1 -">SUPPORT</Link>
			</li>
            <li className="flex">
				<Link to="/pages" className="flex items-center px-4 -mb-1 -">PAGES</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink- hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>

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




<section className="bg-[#0b1120] text-white">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div className='flex gap-20'>
<div>			
				<h3 className="text-5xl font-bold tracking-tight w-150 dark:text-gray-900">Crafted for Startup, SaaS and Business Sites.</h3>
				<p className="mt-3 text-lg text-gray-500 w-130">The main ‘thrust’ is to focus on
					 educating attendees on how to best protect highly vulnerable business applications
					  with interactive panel discussions and roundtables.</p>
				<div className="mt-20 space-y-12 flex gap-20">
					
<div>					
		            <div className="flex items-center">
							<div className="flex items-center justify-center w-8 h-8 bg-[#1e293b] p-2 rounded-lg  m-4">
								<FaCheck  className=''/>
							</div>
						
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Premium quality</h4>	
						</div>
					</div>
					<div className="flex items-center">
						
							<div className="flex items-center justify-center w-8 h-8 bg-[#1e293b] p-2 rounded-lg m-4">
								<FaCheck />
							</div>
						
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Tailwind CSS</h4>
						</div>
					</div>
					<div className="flex items-center">
						
							<div className="flex items-center justify-center w-8 h-8 bg-[#1e293b] p-2 rounded-lg m-4">
								<FaCheck />
							</div>
						
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Use for lifetime</h4>
						</div>
					</div>
</div>					
<div>

					<div className="flex items-center">
						
							<div className="flex items-center justify-center w-8 h-8 bg-[#1e293b] p-2 rounded-lg  m-4">
								<FaCheck />
							</div>
						
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Next.js</h4>
						</div>
					</div>

					<div className="flex items-center">
						
							<div className="flex items-center justify-center w-8 h-8 bg-[#1e293b] p-2 rounded-lg m-4">
								<FaCheck />
							</div>
						
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Rich documentation</h4>
						</div>
					</div>

					<div className="flex items-center">
						
							<div className="flex items-center justify-center w-8 h-8 bg-[#1e293b] p-2 rounded-lg m-4">
								<FaCheck />
							</div>
						
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Developer friendly</h4>
						</div>
					</div>
</div>



				</div>
	</div>	
<img src='https://startup.demo.nextjstemplates.com/images/about/about-image-dark.svg'></img>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Eam nibh gloriatur ex</h3>
					<p className="mt-3 text-lg dark:text-gray-600">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Cibo augue offendit has ad</h4>
								<p className="mt-2 dark:text-gray-600">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">At eum ferri luptatum lobortis</h4>
								<p className="mt-2 dark:text-gray-600">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Dicunt verterem evertitur eu sea</h4>
								<p className="mt-2 dark:text-gray-600">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>












    </div>
  )
}

export default Header
