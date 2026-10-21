

// import { logoMark, blueWings } from '../assets/images'
// import { team } from '../data/content'


// function SocialSprites() {
//   return (
//     <svg className="absolute h-0 w-0" aria-hidden="true">
//       <symbol id="ib-x" viewBox="0 0 24 24">
//         <path
//           fill="currentColor"
//           d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
//         />
//       </symbol>
//       <symbol id="ib-instagram" viewBox="0 0 24 24" fill="none">
//         <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
//         <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
//         <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
//       </symbol>
//       <symbol id="ib-linkedin" viewBox="0 0 24 24">
//         <rect x="2" y="9" width="4" height="12" fill="currentColor" />
//         <circle cx="4" cy="4.6" r="2.3" fill="currentColor" />
//         <path
//           fill="currentColor"
//           d="M9.5 9H13v1.7c.7-1.2 2-2 3.8-2 3.6 0 4.2 2.3 4.2 5.4V21h-3.8v-6.2c0-1.5 0-3.3-2-3.3s-2.4 1.6-2.4 3.2V21H9.5z"
//         />
//       </symbol>
//     </svg>
//   )
// }

// const socials = [
//   { label: 'LinkedIn', icon: '#ib-linkedin' },
//   { label: 'Instagram', icon: '#ib-instagram' },
//   { label: 'X', icon: '#ib-x' },
// ]


// function TeamCard({ name, role, photo }) {
//   return (
//     <article className="rounded-2xl border border-[#3cc3f5] bg-white p-3 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-14px_rgba(11,127,224,0.35)] lg:p-4">
//       <img src={photo} alt={name} className="aspect-[210/148] w-full rounded-lg object-cover" />
//       <h3 className="mt-5 text-lg font-bold text-[#01203d] lg:text-xl">{name}</h3>
//       <p className="mt-1 text-xs font-medium text-[#0b7fe0] lg:text-sm">{role}</p>
//       <div className="mb-1 mt-4 flex items-center justify-center gap-7 text-[#0b7fe0]">
//         {socials.map(({ label, icon }) => (
//           <a key={label} href="#" aria-label={label} className="transition hover:scale-110">
//             <svg className="h-4 w-4">
//               <use href={icon} />
//             </svg>
//           </a>
//         ))}
//       </div>
//     </article>
//   )
// }

// export default function Team() {
//   return (
//     <>
//       <SocialSprites />

//       <section
//         dir="rtl"
//         className="relative overflow-hidden bg-gradient-to-b from-[#ddf1fe] to-[#f7f7f7]  py-16 dark:from-[#002649] dark:to-[#002649] lg:py-20"
//       >
        
      

// <img
//   src={blueWings}
//   alt=""
//   aria-hidden="true"
//   className="pointer-events-none absolute left-1/2 top-0 z-0 h-auto w-[115%] max-w-none -translate-x-1/2 select-none opacity-30 "
// />

//         <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8">
//           {/* العنوان */}
//           <div className="mb-10 text-center lg:mb-14">
//             <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0b7fe0] dark:text-[#01acf1] lg:text-base">
//               <img src={logoMark} alt="" className="h-5 w-5 object-contain lg:h-6 lg:w-6" />
//               <span>أعضاء فريقنا</span>
//             </div>
//             <h2 className="text-2xl font-[700] leading-relaxed text-[#000000] dark:text-white md:text-3xl lg:text-[40px]">
//               تعرّف على فريق إبرام، مبدعين يصنعون الفرق
//             </h2>
//           </div>

          
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
//             {team.map((member) => (
//               <TeamCard key={member.name} {...member} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }







// import { logoMark, blueWings } from '../assets/images'
// import { team } from '../data/content'


// function SocialSprites() {
//   return (
//     <svg className="absolute h-0 w-0" aria-hidden="true">
//       <symbol id="ib-x" viewBox="0 0 24 24">
//         <path
//           fill="currentColor"
//           d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
//         />
//       </symbol>
//       <symbol id="ib-instagram" viewBox="0 0 24 24" fill="none">
//         <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
//         <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
//         <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
//       </symbol>
//       <symbol id="ib-linkedin" viewBox="0 0 24 24">
//         <rect x="2" y="9" width="4" height="12" fill="currentColor" />
//         <circle cx="4" cy="4.6" r="2.3" fill="currentColor" />
//         <path
//           fill="currentColor"
//           d="M9.5 9H13v1.7c.7-1.2 2-2 3.8-2 3.6 0 4.2 2.3 4.2 5.4V21h-3.8v-6.2c0-1.5 0-3.3-2-3.3s-2.4 1.6-2.4 3.2V21H9.5z"
//         />
//       </symbol>
//     </svg>
//   )
// }

// const socials = [
//   { label: 'LinkedIn', icon: '#ib-linkedin' },
//   { label: 'Instagram', icon: '#ib-instagram' },
//   { label: 'X', icon: '#ib-x' },
// ]


// function TeamCard({ name, role, photo }) {
//   return (
//     <article className="rounded-2xl border border-[#3cc3f5] bg-white p-3 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-14px_rgba(11,127,224,0.35)] lg:p-5">
//       <img src={photo} alt={name} className="aspect-[210/148] w-full rounded-lg object-cover" />
//       <h3 className="mt-5 text-lg font-bold text-[#01203d] lg:text-xl">{name}</h3>
//       <p className="mt-1 text-xs font-medium text-[#0b7fe0] lg:text-sm">{role}</p>
//       <div className="mb-1 mt-4 flex items-center justify-center gap-7 text-[#0b7fe0]">
//         {socials.map(({ label, icon }) => (
//           <a key={label} href="#" aria-label={label} className="transition hover:scale-110">
//             <svg className="h-4 w-4">
//               <use href={icon} />
//             </svg>
//           </a>
//         ))}
//       </div>
//     </article>
//   )
// }

// export default function Team() {
//   return (
//     <>
//       <SocialSprites />

//       <section
//         dir="rtl"
//         className="relative overflow-hidden bg-gradient-to-b from-[#ddf1fe] to-[#f7f7f7] py-16 dark:from-[#002649] dark:to-[#002649] lg:pb-24 lg:pt-14"
//       >
        
      

// <img
//   src={blueWings}
//   alt=""
//   aria-hidden="true"
//   className="pointer-events-none absolute left-1/2 top-0 z-0 h-auto w-[115%] max-w-none -translate-x-1/2 select-none opacity-0 "
// />


//         <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-16">
//           {/* العنوان */}
//           <div className="mb-10 text-center lg:mb-4">
//             <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0b7fe0] dark:text-[#01acf1] lg:text-base">
//               <img src={logoMark} alt="" className="h-5 w-5 object-contain lg:h-6 lg:w-6" />
//               <span>أعضاء فريقنا</span>
//             </div>
//             <h2 className="text-2xl font-[700] leading-relaxed text-[#000000] dark:text-white md:text-3xl lg:text-[40px]">
//               تعرّف على فريق إبرام، مبدعين يصنعون الفرق
//             </h2>
//           </div>

          
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
//             {team.map((member) => (
//               <TeamCard key={member.name} {...member} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }




import { logoMark, blueWings, blueWingsDark } from '../assets/images'
import { team } from '../data/content'


function SocialSprites() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <symbol id="ib-x" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        />
      </symbol>
      <symbol id="ib-instagram" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </symbol>
      <symbol id="ib-linkedin" viewBox="0 0 24 24">
        <rect x="2" y="9" width="4" height="12" fill="currentColor" />
        <circle cx="4" cy="4.6" r="2.3" fill="currentColor" />
        <path
          fill="currentColor"
          d="M9.5 9H13v1.7c.7-1.2 2-2 3.8-2 3.6 0 4.2 2.3 4.2 5.4V21h-3.8v-6.2c0-1.5 0-3.3-2-3.3s-2.4 1.6-2.4 3.2V21H9.5z"
        />
      </symbol>
    </svg>
  )
}

const socials = [
  { label: 'LinkedIn', icon: '#ib-linkedin' },
  { label: 'Instagram', icon: '#ib-instagram' },
  { label: 'X', icon: '#ib-x' },
]


function TeamCard({ name, role, photo }) {
  return (
    <article className="rounded-2xl border border-[#3cc3f5] bg-white p-3 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-14px_rgba(11,127,224,0.35)] dark:border-[#1b7fc4] dark:bg-[#0a3560] lg:p-5">
      <img src={photo} alt={name} className="aspect-[210/148] w-full rounded-lg object-cover" />
      <h3 className="mt-5 text-lg font-bold text-[#01203d] dark:text-white lg:text-xl">{name}</h3>
      <p className="mt-1 text-xs font-medium text-[#0b7fe0] dark:text-[#01acf1] lg:text-sm">{role}</p>
      <div className="mb-1 mt-4 flex items-center justify-center gap-7 text-[#0b7fe0] dark:text-[#01acf1]">
        {socials.map(({ label, icon }) => (
          <a key={label} href="#" aria-label={label} className="transition hover:scale-110">
            <svg className="h-4 w-4">
              <use href={icon} />
            </svg>
          </a>
        ))}
      </div>
    </article>
  )
}

export default function Team() {
  return (
    <>
      <SocialSprites />

      <section
        dir="rtl"
        className="relative overflow-hidden bg-gradient-to-b from-[#ddf1fe] to-[#f7f7f7] py-16 dark:from-[#002649] dark:to-[#002649] lg:pb-24 lg:pt-14"
      >
        {/* الفاتح */}
        <img
          src={blueWings}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-auto w-[115%] max-w-none -translate-x-1/2 select-none opacity-30 dark:hidden"
        />


        {/* الدارك: الصورة تغطي القسم كله بدون أي إزاحة */}
        <img
          src={blueWingsDark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full select-none object-cover object-top dark:block"
        />

      

        <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-16">
          {/* العنوان */}
          <div className="mb-10 text-center lg:mb-4">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0b7fe0] dark:text-[#01acf1] lg:text-base">
              <img src={logoMark} alt="" className="h-5 w-5 object-contain lg:h-6 lg:w-6" />
              <span>أعضاء فريقنا</span>
            </div>
            <h2 className="text-2xl font-[700] leading-relaxed text-[#000000] dark:text-white md:text-3xl lg:text-[40px]">
              تعرّف على فريق إبرام، مبدعين يصنعون الفرق
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}