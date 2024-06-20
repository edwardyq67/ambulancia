import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Inicio = () => {
    return (
        <div className='pt-10 min-h-screen overflow-x-hidden '>
            <div className='relative w-full h-[80vh] pt-5 mb-5 lg:mb-40'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                   
                   
                    modules={[Autoplay, Pagination, Navigation]}
                    className='w-full h-full'
                    style={{ height: "80vh" }}
                >

                    <SwiperSlide>
                        <img
                            src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-[60vh] opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718858560/images_app/image%20%286%29.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-[60vh] opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718858585/images_app/image%20%287%29.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-[60vh] opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718858617/images_app/image%20%288%29.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-[60vh] opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718858640/images_app/image%20%289%29.png"
                            alt=""
                            className="w-full h-full object-cover"

                        />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-[60vh] opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                    </SwiperSlide>
                  
                </Swiper>
                <div className="z-30 absolute inset-0 justify-center grid items-center">
                    <div className="title text-center">
                    <h1 style={{ textShadow: "1px 1px 2px #374d6d" }}>Qhali Kay</h1>
                <p className='text-white text-[1.5em]'>Tu salud, nuestra prioridad en cada kilómetro</p>
                    </div>
                      
                </div>
            
                <div className="z-10 gap-5 hidden lg:grid lg:absolute relative inset-x-0 lg:bottom-[-8em] container mx-auto px-2 grid-cols-3 divide-y lg:divide-none">
                    <div className='rounded-md shadow-xl shadow-kashmir-400 grid justify-center text-center gap-1 py-10 px-3 col-span-3 md:col-span-1 bg-white'>
                        <h3 className='text-red-700 font-extrabold flex items-center justify-center'><i class="mx-2 text-[1.5em] fa-solid fa-phone"></i>Ambulancia Equipadas</h3>
                        <h4 className='text-kashmir-600 font-semibold'>Nuestras unidades cuentan con instrumentos y equipos para dar atencion apacientes delicados</h4>

                    </div>
                    <div className='rounded-md shadow-xl shadow-kashmir-400 grid justify-center text-center gap-1 py-10 px-3  col-span-3 md:col-span-1 bg-white'>
                        <h3 className='whitespace-nowrap text-red-700 font-extrabold'>TELEFONO DE EMERGENCIAS:</h3>
                        <h4 className='text-red-700 font-semibold'>960 522 225 - 948 035 426 <br /> (01) 6329162</h4>
                        <button type="button" class="focus:outline-none text-[1.1em] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Llamar Ahora</button>
                    </div>
                    <div className='rounded-md shadow-xl shadow-kashmir-400 grid justify-center text-center gap-1 py-10 px-3  bg-white col-span-3 md:col-span-1'>
                        <h3 className='text-red-700 font-extrabold'>Servicios las 24 horas:</h3>
                        <h4 className='text-kashmir-600 font-semibold'>Atención de Emergencias, Urgencias Médicas y Traslado de Pacientes</h4>

                    </div>
                </div>
            </div>
            <div className="gap-2 grid lg:hidden  relative container mx-auto grid-cols-3 divide-y px-2">
                <div className='grid justify-center text-center gap-1 py-10 col-span-3 md:col-span-1 bg-white'>
                    <h3 className='text-red-700 font-extrabold flex items-center justify-center whitespace-nowrap'><i class="mx-2 text-[1.5em] fa-solid fa-phone"></i>Ambulancia Equipadas</h3>
                    <h4 className='text-kashmir-600 font-semibold'>Nuestras unidades cuentan con instrumentos y equipos para dar atencion apacientes delicados</h4>
                </div>

                <div className='grid justify-center text-center gap-1 py-10 bg-white col-span-3 md:col-span-1'>
                    <h3 className='whitespace-nowrap text-red-700 font-extrabold'>TELEFONO DE EMERGENCIAS</h3>
                    <h4 className='text-kashmir-600 font-semibold'>Atención de Emergencias, Urgencias Médicas y Traslado de Pacientes</h4>

                </div>
                <div className='grid justify-center text-center gap-1 py-10 col-span-3 md:col-span-1 bg-white'>
                    <h3 className='whitespace-nowrap text-red-700 font-extrabold'>Servicios las 24 horas</h3>
                    <h4 className='text-red-700 font-semibold'>960 522 225 - 948 035 426 - (01) 6329162</h4>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Llamar Ahora</button>
                </div>
            </div>
            <div className="grid container mx-auto grid-cols-1 divide-y px-2">
                <div className="grid grid-col-3 gap-10 md:gap-8 text-center py-20 ">
                    <h2 className='col-span-3 font-bold text-[#5677a1]'>Cobertura en todo Lima </h2>
                    <p className='col-span-3 text-kashmir-600'>Cubrimos servicios de forma particular y trabajamos con diversos seguros. Realizamos consultas médicas a domicilio, en el que un médico de medicina general acompañado de un licenciado se acerca para la evaluación respectiva.</p>
                    <a className="relative col-span-3 md:col-span-1  cursor-pointer justify-center mx-auto w-[60vw] md:w-[20vw] text-kashmir-950 hover:text-white transition duration-300">
                        <img className='rounded-lg mx-auto w-full h-auto' src="https://apusalud.com/wp-content/uploads/2021/09/Lima-Norte-1.jpg" alt="" />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-52 opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                        <p className="absolute inset-x-0 bottom-0 h-16 text-center flex items-center justify-center ">Lima Norte</p>
                    </a>
                    <a className="relative col-span-3 md:col-span-1  cursor-pointer mx-auto w-[60vw] md:w-[20vw] bg-gradient-to-t  text-kashmir-950 hover:text-white transition duration-300">
                        <img className='rounded-lg mx-auto w-full h-auto' src="https://apusalud.com/wp-content/uploads/2021/09/Lima-Oeste-1.jpg" alt="" />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-52 opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                        <p className="absolute inset-x-0 bottom-0 h-16 text-center flex items-center justify-center ">Lima Oeste</p>
                    </a>
                    <a className="relative col-span-3 md:col-span-1  cursor-pointer mx-auto w-[60vw] md:w-[20vw] bg-gradient-to-t  text-kashmir-950 hover:text-white transition duration-300">
                        <img className='rounded-lg mx-auto w-full h-auto' src="https://apusalud.com/wp-content/uploads/2021/09/Lima-Centro-1.jpg" alt="" />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-52 opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                        <p className="absolute inset-x-0 bottom-0 h-16 text-center flex items-center justify-center ">Lima Centro</p>
                    </a>
                    <a className="relative col-span-3 md:col-span-1  cursor-pointer mx-auto w-[60vw] md:w-[20vw] bg-gradient-to-t  text-kashmir-950 hover:text-white transition duration-300">
                        <img className='rounded-lg mx-auto w-full h-auto' src="https://apusalud.com/wp-content/uploads/2021/09/Lima-Sur-1.jpg" alt="" />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-52 opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                        <p className="absolute inset-x-0 bottom-0 h-16 text-center flex items-center justify-center ">Lima Sur</p>
                    </a>
                    <a className="relative col-span-3 md:col-span-1  cursor-pointer mx-auto w-[60vw] md:w-[20vw] bg-gradient-to-t  text-kashmir-950 hover:text-white transition duration-300">
                        <img className='rounded-lg mx-auto w-full h-auto' src="https://apusalud.com/wp-content/uploads/2021/09/Lima-Este-1.jpg" alt="" />
                        <div className='rounded-lg absolute inset-x-0 bottom-0 h-52 opacity-90 bg-gradient-to-t from-kashmir-950 via-kashmir-950 to-transparent'></div>
                        <p className="absolute inset-x-0 bottom-0 h-16 text-center flex items-center justify-center ">Lima Este</p>
                    </a>
                </div>
            </div>
            <div className='relative' style={{
                width: "",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundImage: `url(http://res.cloudinary.com/dcwdddwnh/image/upload/v1718824340/images_app/image.png)`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                color: "#fff",
            }}>
                <div className="w-full h-full" style={{ background: "rgba(29, 37, 52, 0.9)" }}>
                    <div class="absolute insert-x-0  md:inset-x-40 bottom-0 hidden lg:block ">
                        <img className='h-[40vh] sm:h-[60vh] w-auto' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718830501/images_app/image__1_-removebg-preview.png" alt="" />
                    </div>
                    <div className="grid grid-cols-3">
                        
                        <div className="col-span-1 hidden lg:block">

                        </div>
                        <div className="grid col-span-3 lg:col-span-2 grid-cols-4 px-2 py-16 gap-4">
                        <div className='text-center mx-auto grid col-span-4 md:col-span-3  gap-2 p-4'>
                        <h2 className='text-kashmir-300 px-2  text-center border-b-2 border-kashmir-300  '>Nuestros Servicios</h2>
                        </div>
                            <div className='text-center md:text-start grid col-span-4 md:col-span-2 gap-2 p-4'>
                                <div className="justify-center md:justify-start  flex">
                                    <i className="text-kashmir-300 text-center w-[1em] text-[2em] fa-solid fa-heart"></i>
                                    <h3 className='text-kashmir-300 px-2'>Translado Asistido de Pacientes</h3>
                                </div>
                                <div className="justify-start md:justify-center flex">
                                    <i className="text-center w-[1em] text-[2em] fa-regular fa-heart invisible"></i>
                                    <p className='px-2'>Médicos colegiados, enfermeras y paramédicos, preparados para atender en todo <b className='text-kashmir-300 border-b-2 border-kashmir-300'>Lima y Provincias.</b></p>
                                </div>
                            </div>
                            <div className='text-center md:text-start grid col-span-4 md:col-span-2 gap-2 p-4'>
                                <div className="justify-center md:justify-start flex">
                                    <i className="text-kashmir-300 text-center w-[1em] text-[2em] fa-solid fa-circle-exclamation"></i>
                                    <h3 className='text-kashmir-300 px-2'>Atención de Emergencia y Urgencias</h3>
                                </div>
                                <div className="flex">
                                    <i className="text-center w-[1em] text-[2em] fa-regular fa-heart invisible"></i>
                                    <p className='px-2'>Nuestros equipo médico especializado brinda soporte vital que requiere el paciente </p>
                                </div>
                            </div>
                            <div className='text-center md:text-start grid col-span-4 md:col-span-2 gap-2 p-4'>
                                <div className="justify-center md:justify-start flex">
                                    <i className="text-kashmir-300 text-center w-[1em] text-[2em] fa-solid fa-house"></i>
                                    <h3 className='text-kashmir-300 px-2'>Translado Asistido de Pacientes</h3>
                                </div>
                                <div className="flex">
                                    <i className="text-center w-[1em] text-[2em] fa-regular fa-heart invisible"></i>
                                    <p className='px-2'>Nuestras unidades y equipo paramédico, movilizan pacientes en <b className='text-kashmir-300 border-b-2 border-kashmir-300'>estado crítico</b> para su hospitalización.</p>
                                </div>
                            </div>
                            <div className='text-center md:text-start grid col-span-4 md:col-span-2 gap-2 p-4'>
                                <div className="justify-center md:justify-start flex">
                                    <i className="text-kashmir-300 text-center w-[1em] text-[2em] fa-solid fa-pen-to-square"></i>
                                    <h3 className='text-kashmir-300 px-2'>Translado Asistido de Pacientes</h3>
                                </div>
                                <div className="flex">
                                    <i className="text-center w-[1em] text-[2em] fa-regular fa-heart invisible"></i>
                                    <p className='px-2'>Asistencia a Pacientes <b className='text-kashmir-300 border-b-2 border-kashmir-300'>Covid</b> y no Covid. Asistencia en <b className='text-kashmir-300 border-b-2 border-kashmir-300'>Eventos y Campañas</b></p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="grid container mx-auto grid-cols-1 divide-y px-2">
                <div className="grid grid-col-3 gap-10 md:gap-8 text-center pt-20 pb-10">
                    <h2 className='col-span-3 font-bold text-kashmir-600'>Galeria </h2>
                    <p className='col-span-3 text-[1.2em] text-kashmir-600'>Cubrimos toda clase de eventos de acuerdo al requerimiento.</p>
                </div>
                <div className="w-full  lg:block hidden">

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop={true}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839797/images_app/image%20%282%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839828/images_app/image%20%283%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839850/images_app/image%20%284%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839797/images_app/image%20%282%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839828/images_app/image%20%283%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839850/images_app/image%20%284%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="w-full lg:hidden md:block hidden">
                    <Swiper
                         spaceBetween={10}
                         slidesPerView={3}
                         autoplay={{
                             delay: 2000,
                             disableOnInteraction: false,
                         }}
                         modules={[Autoplay, Pagination, Navigation]}
                         loop={true}
                         navigation={true}
                    >
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839797/images_app/image%20%282%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839828/images_app/image%20%283%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839850/images_app/image%20%284%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839797/images_app/image%20%282%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839828/images_app/image%20%283%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839850/images_app/image%20%284%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Swiper para pantallas pequeñas */}
                <div className="w-full container mx-auto md:hidden block">
                    <Swiper
  spaceBetween={10}
  slidesPerView={1}
  autoplay={{
      delay: 2000,
      disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination, Navigation]}
  loop={true}
  navigation={true}
                    >
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839797/images_app/image%20%282%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839828/images_app/image%20%283%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839850/images_app/image%20%284%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839797/images_app/image%20%282%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839828/images_app/image%20%283%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839850/images_app/image%20%284%29.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-md' src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718839869/images_app/image%20%285%29.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="grid grid-cols-2  pt-20 pb-10">
                    <span className="col-span-2 md:col-span-1 p-4 flex justify-center">
                        <ul className="list-disc list-inside grid gap-1 text-kashmir-600">
                            <li>Cubrimos eventos particulares.</li>
                            <li>Realizamos traslados asistidos tipo I, II y III.</li>
                            <li>Realizamos consultas médicas a domicilio.</li>
                        </ul>
                    </span>

                    <div className="col-span-2 md:col-span-1 p-4 gap-2 text-center grid justify-center">
                        <h4 className="text-red-700 font-extrabold">TELÉFONO DE EMERGENCIAS:</h4>
                        <h4 className="text-red-700 font-semibold">960 522 225 - 948 035 426 - (01) 6329162</h4>
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Llamar Ahora</button>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Inicio;
