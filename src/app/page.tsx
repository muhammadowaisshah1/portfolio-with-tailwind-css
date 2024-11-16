
// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (

//      <div className="min-h-screen bg-gradient-to-br from-[#0F4B6E] to-[#E1B16F] flex items-center justify-center py-8 sm:py-16">
//       <motion.div
//         className="flex flex-col lg:flex-row max-w-5xl w-full p-6 lg:p-8 bg-white rounded-xl shadow-2xl border-2 border-[#4A6E71] items-center lg:items-start"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
//           <motion.div
//             className="w-2/3 sm:w-1/2 lg:w-3/4 rounded-full overflow-hidden shadow-lg"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src= "/profile.jpg" // Replace with your image path
//               alt="My Profile"
//               width={300}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
//           <motion.h1
//             className="text-3xl sm:text-4xl font-serif font-bold text-[#2A3D34] mb-4"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I am <span className="text-[#E1B16F]">[Muhammad Owais Shah]</span>
//           </motion.h1>
//           <motion.p
//             className="text-md sm:text-lg text-[#2A3D34] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I Am an AI Developer passionate about building cutting-edge applications that leverage the power of AI and machine learning. With expertise in <strong>TypeScript</strong>, <strong>Next.js</strong>, and <strong>AI Agents</strong>, I am committed to creating intelligent, adaptive systems that make a difference.
//           </motion.p>

//           <motion.p
//             className="text-md sm:text-lg text-[#2A3D34] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             My portfolio is a showcase of my work in <strong>AI</strong>, <strong>web development</strong>, and <strong>user-centered design</strong>. I enjoy solving complex problems with innovative solutions and always aim to build user friendly, dynamic web experiences.
//           </motion.p>

//           <motion.div
//             className="mt-6 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#0F4B6E] text-white py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#E1B16F] transition-all duration-300 transform hover:scale-105">
//                 Get in Touch
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div> 
//   );
// };



// export default HomePage;




// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#2E2E2E] flex items-center justify-center px-6 py-12">
//       <motion.div
//         className="flex flex-col md:flex-row max-w-6xl w-full p-8 md:p-12 bg-[#2A2A2A] rounded-3xl shadow-lg border border-[#3E3E3E] items-center md:items-start space-y-10 md:space-y-0 md:space-x-12"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       >
//         {/* Image Section */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center md:justify-end items-center"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-[#404040]">
//             <Image
//               src="/New folder/profile.jpg" // Replace with your image path
//               alt="Profile Picture"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </motion.div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <motion.h1
//             className="text-4xl md:text-5xl font-extrabold text-[#E8E8E8] mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             Hello, I’m <span className="text-[#A29BFE]">Muhammad Owais Shah</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl text-[#B0B0B0] mb-6 px-4 md:px-0 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
//           >
//             AI Developer crafting innovative AI-powered applications. Specializing in <strong>TypeScript</strong>, <strong>Next.js</strong>, and <strong>AI Agents</strong>, I aim to build adaptive, intelligent solutions that drive impact.
//           </motion.p>

//           <motion.p
//             className="text-md md:text-lg text-[#8F8F8F] mb-8 px-4 md:px-0 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
//           >
//             Discover my work in <strong>AI</strong>, <strong>web development</strong>, and <strong>user-centered design</strong>. My mission is to create innovative, dynamic, and user-friendly digital experiences.
//           </motion.p>

//           <motion.div
//             className="flex justify-center md:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#A29BFE] text-[#1C1C1C] py-3 px-10 rounded-full text-lg font-medium hover:bg-[#8257E5] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 Get in Touch
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };



// export default HomePage;

// ex/''

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center py-20 sm:py-24">
//       <motion.div
//         className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full p-10 bg-[#1A202C] rounded-xl shadow-2xl border border-[#2D3748] transform transition-all duration-500 ease-in-out hover:scale-105"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center mb-12 lg:mb-0">
//           <motion.div
//             className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[#FBBF24]"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/New folder/profile.jpg" // Replace with your image path
//               alt="Profile Picture"
//               width={320}
//               height={320}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-2/3 lg:pl-16 text-center lg:text-left">
//           <motion.h1
//             className="text-5xl sm:text-6xl font-serif font-extrabold text-[#FBBF24] mb-6"
//             initial={{ y: -60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I'm <span className="text-[#FBBF24]">Muhammad Owais Shah</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I’m a passionate <strong>AI Agent Developer</strong> who specializes in creating intelligent, automated systems for a variety of industries. I have a solid foundation in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. Currently, I am expanding my knowledge in the world of <strong>AI Agents</strong>, creating systems that enhance productivity, solve real-world problems, and revolutionize how businesses operate.
//           </motion.p>

//           <motion.p
//             className="text-md sm:text-lg text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             I am committed to bridging the gap between cutting-edge AI technology and practical applications, focusing on building intelligent, scalable systems that drive change. I design user-centric solutions that deliver measurable impact, and I’m eager to collaborate with innovators and thinkers in the AI and tech space.
//           </motion.p>

//           <motion.div
//             className="mt-8 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#FBBF24] text-white py-3 px-8 sm:px-12 rounded-full text-lg sm:text-xl hover:bg-[#F59E0B] transition-all duration-300 transform hover:scale-110">
//                 Let's Work Together
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;

// nice

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center py-20 sm:py-24">
//       <motion.div
//         className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full p-10 bg-[#1A202C] rounded-xl shadow-2xl border border-[#2D3748] transform transition-all duration-500 ease-in-out hover:scale-105"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center mb-12 lg:mb-0">
//           <motion.div
//             className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[#FBBF24]"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/New folder/profile.jpg" // Replace with your image path
//               alt="Profile Picture"
//               width={320}
//               height={320}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-2/3 lg:pl-16 text-center lg:text-left">
//           <motion.h1
//             className="text-5xl sm:text-6xl font-serif font-extrabold text-[#FBBF24] mb-6"
//             initial={{ y: -60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I'm <span className="text-[#FBBF24]">Muhammad Owais Shah</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I’m a passionate <strong>AI Agent Developer</strong> who specializes in creating intelligent, automated systems for a variety of industries. I have a solid foundation in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. Currently, I am expanding my knowledge in the world of <strong>AI Agents</strong>, creating systems that enhance productivity, solve real-world problems, and revolutionize how businesses operate.
//           </motion.p>

//           <motion.p
//             className="text-md sm:text-lg text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             I am committed to bridging the gap between cutting-edge AI technology and practical applications, focusing on building intelligent, scalable systems that drive change. I design user-centric solutions that deliver measurable impact, and I’m eager to collaborate with innovators and thinkers in the AI and tech space.
//           </motion.p>

//           <motion.div
//             className="mt-8 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#FBBF24] text-white py-3 px-8 sm:px-12 rounded-full text-lg sm:text-xl hover:bg-[#F59E0B] transition-all duration-300 transform hover:scale-110">
//                 Let's Work Together
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;

// p

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] flex items-center justify-center py-20 sm:py-24">
//       <motion.div
//         className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full p-10 bg-[#F7F8FA] rounded-xl shadow-2xl border border-[#E0E4E9] transform transition-all duration-500 ease-in-out hover:scale-105"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center mb-12 lg:mb-0">
//           <motion.div
//             className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[#E1B16F]"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/profile.jpg" // Replace with your image path
//               alt="Profile Picture"
//               width={320}
//               height={320}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-2/3 lg:pl-16 text-center lg:text-left">
//           <motion.h1
//             className="text-5xl sm:text-6xl font-serif font-extrabold text-[#2A3D34] mb-6"
//             initial={{ y: -60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I'm <span className="text-[#E1B16F]">Muhammad Owais Shah</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg sm:text-xl text-[#34495E] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I'm a dedicated <strong>AI Developer</strong> who specializes in creating powerful, intelligent systems that push the boundaries of technology. With expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>Next.js</strong>, I’m passionate about building solutions that harness the potential of <strong>AI Agents</strong> to innovate and solve complex challenges.
//           </motion.p>

//           <motion.p
//             className="text-md sm:text-lg text-[#34495E] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             My goal is to bridge the gap between innovative AI technologies and real-world applications. I design user-friendly, adaptive systems that enhance user experience and drive meaningful change across industries. I’m excited to connect with like-minded individuals who share my passion for AI, development, and technology.
//           </motion.p>

//           <motion.div
//             className="mt-8 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#2C3E50] text-white py-3 px-8 sm:px-12 rounded-full text-lg sm:text-xl hover:bg-[#E1B16F] transition-all duration-300 transform hover:scale-110">
//                 Let's Work Together
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;


// excellent
// last conatt good
// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1A202C] to-[#2D3748] flex flex-col items-center justify-center py-24">
//       <motion.div
//         className="flex flex-col lg:flex-row max-w-5xl w-full p-8 bg-[#1E293B] rounded-xl shadow-2xl border-4 border-[#4A5568] items-center lg:items-start"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mb-8 lg:mb-0">
//           <motion.div
//             className="w-3/4 sm:w-2/3 lg:w-1/2 rounded-full overflow-hidden shadow-xl border-4 border-[#E2E8F0]"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/profile.jpg" // Replace with your image path
//               alt="My Profile"
//               width={300}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
//           <motion.h1
//             className="text-4xl sm:text-5xl font-serif font-extrabold text-[#FBBF24] mb-6"
//             initial={{ y: -60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I am <span className="text-[#FBBF24]">Muhammad Owais Shah</span>
//           </motion.h1>
//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I am an <strong>AI Developer</strong> with a passion for building intelligent, adaptive systems that solve real-world problems. My expertise lies in <strong>HTML, CSS, Tailwind CSS, Node.js, Next.js, and Figma</strong>, and I am currently diving deep into <strong>AI agents</strong>.
//           </motion.p>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Through my work, I focus on creating user-centered designs and delivering exceptional web development solutions with modern technologies.
//           </motion.p>

//           <motion.div
//             className="mt-8 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#1A202C] text-[#FBBF24] py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#FBBF24] hover:text-[#1A202C] transition-all duration-300 transform hover:scale-105">
//                 Get in Touch
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;


// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#111827] to-[#1F2937] flex flex-col items-center justify-center py-32 px-6">
//       <motion.div
//         className="flex flex-col lg:flex-row max-w-5xl w-full p-8 bg-[#1E2A47] rounded-2xl shadow-2xl border-4 border-[#4A5568] items-center lg:items-start"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mb-8 lg:mb-0">
//           <motion.div
//             className="w-3/4 sm:w-2/3 lg:w-1/2 rounded-full overflow-hidden shadow-xl border-4 border-[#FBBF24]"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/profile.jpg" // Replace with your image path
//               alt="Muhammad Owais Shah"
//               width={300}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
//           <motion.h1
//             className="text-4xl sm:text-5xl font-serif font-extrabold text-[#FBBF24] mb-6"
//             initial={{ y: -60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hello, I'm <span className="text-[#FBBF24]">Muhammad Owais Shah</span>
//           </motion.h1>
//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I’m an <strong>AI Developer</strong> with a deep passion for leveraging the power of Artificial Intelligence and Machine Learning to build smart, adaptive, and impactful applications. Currently, I’m expanding my expertise in developing <strong>AI agents</strong> to craft intuitive, problem-solving systems.
//           </motion.p>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             With a strong foundation in <strong>HTML, CSS, Tailwind CSS, Node.js, Next.js,</strong> and <strong>Figma</strong>, I create clean, responsive, and user-friendly web applications. My work blends cutting-edge design with seamless functionality, ensuring exceptional user experiences.
//           </motion.p>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-8"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             I believe in the power of innovative technology to shape the future. My mission is to continuously grow and contribute to the world of AI and web development, delivering impactful solutions that solve real-world problems.
//           </motion.p>

//           <motion.div
//             className="mt-8 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#1A202C] text-[#FBBF24] py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#FBBF24] hover:text-[#1A202C] transition-all duration-300 transform hover:scale-105">
//                 Let’s Connect
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// sconf thir 

// export default HomePage;

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] flex items-center justify-center py-8 sm:py-16">
//       <motion.div
//         className="flex flex-col lg:flex-row max-w-5xl w-full p-6 lg:p-8 bg-[#1F1F1F] rounded-xl shadow-2xl border-2 border-[#4A6E71] items-center lg:items-start"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mb-8 lg:mb-0">
//           <motion.div
//             className="w-2/3 sm:w-1/2 lg:w-3/4 rounded-full overflow-hidden shadow-lg"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/profile.jpg" // Replace with your image path
//               alt="My Profile"
//               width={300}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
//           <motion.h1
//             className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F7F6] mb-4"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hello, I'm <span className="text-[#F5A623]">Muhammad Owais Shah</span>
//           </motion.h1>
//           <motion.p
//             className="text-md sm:text-lg text-[#E6E6E6] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I am an AI Agent Developer currently diving deep into the world of artificial intelligence. I am passionate about building adaptive, smart systems that enhance digital experiences through innovative AI solutions.
//           </motion.p>

//           <motion.p
//             className="text-md sm:text-lg text-[#E6E6E6] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             With a strong foundation in <strong>HTML, CSS, Tailwind CSS, Node.js, Next.js, and Figma</strong>, I’m now focused on learning the intricate art of building intelligent AI agents. I strive to bring a perfect blend of technology and user experience into my work.
//           </motion.p>

//           <motion.div
//             className="mt-6 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#F5A623] text-white py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#F4B400] transition-all duration-300 transform hover:scale-105">
//                 Get in Touch
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;





// prdt

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1A202C] to-[#2D3748] flex items-center justify-center py-16 px-4">
//       <motion.div
//         className="flex flex-col lg:flex-row max-w-5xl w-full p-8 bg-[#2D3748] rounded-xl shadow-lg border-2 border-[#E2E8F0] items-center lg:items-start"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
//           <motion.div
//             className="w-3/4 sm:w-1/2 lg:w-3/4 rounded-full overflow-hidden shadow-xl"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/profile.jpg" // Replace with your image path
//               alt="Muhammad Owais Shah"
//               width={300}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
//           <motion.h1
//             className="text-4xl sm:text-5xl font-serif font-bold text-[#E2E8F0] mb-4"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I am <span className="text-[#F6AD55]">Muhammad Owais Shah</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             I am a passionate developer with a focus on creating innovative web applications and intelligent systems. I specialize in frontend technologies and am currently diving deep into the world of AI agent development.
//           </motion.p>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             With expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, and <strong>Figma</strong>, I am committed to building user-friendly, dynamic web experiences.
//           </motion.p>

//           <motion.p
//             className="text-lg sm:text-xl text-[#E2E8F0] mb-6 px-4 lg:px-0"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Currently, I am expanding my knowledge in the exciting field of <strong>AI Agents</strong>, learning to create intelligent systems that enhance automation and problem-solving. I aim to merge my web development skills with AI to create cutting-edge, user-centered solutions.
//           </motion.p>

//           <motion.div
//             className="mt-6 flex justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <Link href="/contact" passHref>
//               <button className="bg-[#1A202C] text-[#F6AD55] py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105">
//                 Get in Touch
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define a simple type for props or states if needed in the future
interface HomePageProps {
  profileImageSrc: string; // Image source for profile
  name: string; // Name of the person
  description: string; // Short description of the person
}

const HomePage: React.FC<HomePageProps> = ({ profileImageSrc = "/Screenshot_2023-03-16-02-49-09-45_a23b203fd3aafc6dcb84e438dda678b6.jpg", name = "Muhammad Owais Shah", description = "I'm Enthusiastic developer focused on creating intelligent and dynamic web applications. Currently diving into the world of AI agent development, I'm learning to build systems that drive innovation and automation." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1F2937] to-[#2D3748] flex items-center justify-center py-16 px-4">
      <motion.div
        className="flex flex-col lg:flex-row max-w-5xl w-full p-8 bg-[#1A202C] rounded-xl shadow-xl border-2 border-[#2D3748] items-center lg:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
          <motion.div
            className="w-3/4 sm:w-1/2 lg:w-3/4 rounded-full overflow-hidden shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={profileImageSrc} // Image passed via props
              alt={`${name}'s Profile`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-serif font-bold text-[#fff] mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi,I'm <span className="text-[#FBBF24]">{name}</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I have honed my skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, and <strong>Figma</strong>, which I use to build responsive, visually engaging, and accessible web experiences.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Currently, I am expanding my expertise into <strong>AI Agents</strong>, learning how to create intelligent systems that can automate tasks, learn from interactions, and solve real-world problems.
          </motion.p>

              <motion.p
            className="text-lg sm:text-xl text-[#E2E8F0] mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Through my work, I focus on creating user-centered designs and delivering exceptional web development solutions with modern technologies.
          </motion.p>


          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
             I am Committed about building adaptive, smart systems that enhance digital experiences through innovative AI solutions.

          </motion.p>

          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact" passHref>
              <button className="bg-[#3B82F6] text-white py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;

