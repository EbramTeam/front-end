import { logoMark } from '../assets/images'
import { featureItems } from '../data/content'

const gradientText = 'bg-[linear-gradient(90deg,#017AE2_0%,#00ACF0_100%)] bg-clip-text text-transparent'

const connectorClass =
  "max-lg:after:mt-8 max-lg:after:block max-lg:after:h-12 max-lg:after:border-l-[2.5px] max-lg:after:border-dashed max-lg:after:border-[#0284c7] max-lg:after:content-['']"

// خلفية الدائرة الداخلية حسب النوع
const innerCircle = {
  light:
    'bg-[linear-gradient(180deg,#f1f4f9_0%,#cfe4fa_100%)] shadow-[inset_0_-8px_16px_rgba(47,140,245,.25),inset_0_0_0_1px_rgba(255,255,255,.8)] dark:bg-[linear-gradient(180deg,#1a3d70,#0d2347)] dark:shadow-none',
  dark: 'bg-[linear-gradient(180deg,#000_0%,#03194a_45%,#0a63e6_100%)] shadow-[0_8px_20px_rgba(10,99,230,.4)]',
}

// موضع ودوران سهم الرقم حسب النوع
const badgePosition = {
  light: 'absolute -top-[2%] -left-[14%]  h-[30%] w-[40%] -rotate-[24deg]',
  dark: 'absolute -bottom-[4%] -left-[12%]  h-[30%] w-[40%] rotate-[18deg]',
}

export default function Features() {
  return (
    <section dir="rtl" className="w-full bg-[#e4f1fa] dark:bg-[#050f26] py-16 px-4 sm:px-16 lg:px-28 ">
      {/* تدرجات الألوان والسهم */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="gT" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0a7ee0" />
            <stop offset="1" stopColor="#0fa0f0" />
          </linearGradient>
          <path id="arw" d="M0 14L15 0V6H46Q50 6 50 10V18Q50 22 46 22H15V28Z" fill="url(#gT)" />
        </defs>
      </svg>

      {/* شارة العنوان والعنوان الرئيسي */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[18px] font-[700] ${gradientText} bg-white/50 dark:bg-[#0c2147]/50`}
        >
          <img className="w-[40px] h-[35px]" src={logoMark} alt="" />
          المميزات الرئيسية
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[48px] font-[700] text-[#0f2a4a] dark:text-white">
          ما الذي تضيفه إبرام لفريق <span className={gradientText}>المشتريات؟</span>
        </h2>
      </div>

      {/* شبكة الدوائر بعرض كامل وتوزيع متناسق */}
      <div className="relative w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-6">
        <svg
          className="pointer-events-none absolute top-[55px] left-0 z-0 hidden w-full h-[100px] overflow-visible lg:block transform rotate-[0deg] scale-y-100"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 875 50 C 780 95, 710 95, 625 50 C 550 10, 450 10, 375 50 C 290 95, 220 95, 125 50"
            fill="none"
            strokeWidth="2.5"
            strokeDasharray="6 5"
            vectorEffect="non-scaling-stroke"
            className="stroke-[#0284c7] dark:stroke-[#38bdf8]"
          />
        </svg>

        {featureItems.map((item) => (
          <div
            key={item.number}
            className={`relative z-10 flex w-full lg:w-1/4 flex-col items-center text-center ${
              item.dashedConnector ? connectorClass : ''
            }`}
          >
            <div
              className={`relative flex h-36 w-36 sm:h-44 sm:w-44 lg:h-44 lg:w-44 animate-[pulseScale_3.2s_ease-in-out_infinite] items-center justify-center rounded-full border-[2.5px] border-dashed border-[#0284c7] bg-white shadow-[0_8px_25px_rgba(25,167,230,.18)] motion-reduce:animate-none dark:border-[#38bdf8] dark:bg-[#07142e] dark:shadow-[0_0_30px_rgba(47,140,245,.45)] ${item.delay}`}
            >
              <div
                className={`flex h-[74%] w-[74%] items-center justify-center rounded-full overflow-hidden ${
                  innerCircle[item.variant]
                }`}
              >
                <img src={item.image} alt={item.title} className={item.imageClass} />
              </div>
              <svg
                className={`${badgePosition[item.variant]} drop-shadow-[0_2px_4px_rgba(10,134,230,.35)]`}
                viewBox="0 0 50 28"
              >
                <use href="#arw" />
                <text x="30" y="19" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
                  {item.number}
                </text>
              </svg>
            </div>

            <h3 className="mt-6 mb-2 text-base sm:text-[26px] font-[600] text-[#000000] dark:text-[#ffffff]">
              {item.title}
            </h3>
            <p
              className={`w-full max-w-[270px] text-xs sm:text-[22px] leading-6 sm:leading-7 font-[500] ${item.textColor} dark:text-[#9fb3d1]`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
