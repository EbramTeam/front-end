import { logoMark } from '../assets/images'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section dir="rtl" className="bg-white py-16 dark:bg-[#002649] lg:py-24">
      {/* رمز السهم الملفلف: مرة وحدة وبنستخدمه 3 مرات */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <symbol id="ib-arrow" viewBox="0 0 55 36" fill="none">
          <path
            d="M44.4 22.2 C44.2 19 43 16.6 39.4 16.4 C37 16.3 35.2 16.8 34.1 17.4 C32 19 31 22 30.9 24.8 C30.8 28 32.5 29.4 34.5 29 C37 28.6 38 26 37.4 23.5 C36.9 21.4 36 19.5 34.1 17.4 C31 15 27 14.6 23.4 15.3 C19 16 15.5 18.4 11.3 23"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeDasharray="0.1 2.7"
          />
          <path
            d="M7.8 26 L10 21.8 L12.6 24.8 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </symbol>
      </svg>

      <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-8">
        {/* العنوان */}
        <div className="mb-12 text-center lg:mb-20">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#01acf1] lg:text-base">
            <img src={logoMark} alt="" className="h-5 w-5 object-contain lg:h-6 lg:w-6" />
            <span>كيف تعمل إبرام؟</span>
          </div>
          <h2 className="text-2xl font-bold leading-relaxed text-[#01203d] dark:text-white md:text-3xl lg:text-4xl">
            أربع خطوات تنقل الطلب من الاحتياج إلى <span className="text-[#01acf1]">إجراء موثّق</span>
          </h2>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[72px]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative flex min-h-[360px] cursor-default flex-col items-center justify-between gap-6 rounded-bl-lg rounded-br-[60px] rounded-tl-[60px] rounded-tr-lg bg-[#cbf0ff] px-6 pb-12 pt-8 lg:pt-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-14px_rgba(1,172,241,0.5)] dark:bg-[#0a3560] lg:aspect-[203/293]"
            >
              <span className="origin-center bg-gradient-to-b from-[#8fd8fb] to-[#cbf0ff] bg-clip-text text-[64px] font-bold leading-none text-transparent transition-transform duration-300 group-hover:scale-110 dark:from-[#2a74a8] dark:to-[#0a3560] lg:text-[88px]">
                {step.number}
              </span>

              <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border-2 border-dashed border-[#01acf1] lg:h-[108px] lg:w-[108px]">
                <div className="flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full bg-[#01203d] lg:h-[90px] lg:w-[90px]">
                  <img
                    src={logoMark}
                    alt=""
                    className="h-[70%] w-[70%] object-contain group-hover:animate-[spin_3s_linear_infinite]"
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-[#01203d] dark:text-white lg:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-[#3b4a5c] dark:text-[#b9cbdc] lg:text-base lg:leading-8">
                  {step.text}
                </p>
              </div>

              
              {i < steps.length - 1 && (
                <svg
                  className="absolute -left-[64px] top-[calc(49%-18px)] hidden h-[37px] w-[56px] text-black dark:text-white transition-transform duration-300 group-hover:-translate-x-2 lg:block"
                  aria-hidden="true"
                >
                  <use href="#ib-arrow" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
