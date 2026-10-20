import { Fragment } from 'react'
import { logoMark } from '../assets/images'
import { aboutItems } from '../data/content'

export default function About() {
  return (
    <section
      id="about"
      dir="ltr"
      className="relative w-full max-w-[1920px] mx-auto px-5 sm:px-12 lg:px-20 py-14 sm:py-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:gap-x-[clamp(48px,6vw,116px)] lg:grid-cols-[minmax(0,1.186fr)_minmax(0,1fr)] items-center">
        {/* القسم الأيسر: البوكس الزجاجي */}
        <div className="order-2 lg:order-1 min-w-0">
          <div
            dir="rtl"
            className="group relative overflow-hidden rounded-[clamp(32px,4vw,76px)]
              py-[clamp(14px,1.59vw,30.5px)] pr-[clamp(20px,2.29vw,44px)] pl-[clamp(16px,1.82vw,35px)]
              transition-all duration-500
              bg-white/80 backdrop-blur-xl border border-white/80
              dark:bg-white/[0.03] dark:border-transparent
              dark:shadow-[inset_0_1px_0_#90a7b7,inset_0_2px_0_#071831,inset_0_-1px_0_#6c88a2,inset_0_-2px_0_#132f49]"
          >
            {/* الفراشة الخلفية */}
            <div
              className="absolute -left-[26%] sm:-left-[23%] lg:-left-[21%] -bottom-[6%] w-[52%] sm:w-[46%] lg:w-[42%] h-[74%] pointer-events-none select-none
                -rotate-12 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-105"
            >
              {/* نسخة اللايت */}
              <img
                src={logoMark}
                alt=""
                className="block dark:hidden w-full h-full object-fill opacity-80 blur-[5px]"
              />
              {/* نسخة الدارك */}
              <img
                src={logoMark}
                alt=""
                className="hidden dark:block w-full h-full object-fill opacity-80 blur-[5px]"
              />
            </div>

            {/* العناصر الثلاثة: الدائرة يمين والنص جنبها */}
            <div className="relative z-10 flex flex-col">
              {aboutItems.map((item, i) => (
                <Fragment key={item.title}>
                  {i > 0 && <div className="w-full h-[2px] bg-gray-200/80 dark:bg-white/[0.47]"></div>}
                  <div className="flex items-center gap-[clamp(12px,1.1vw,21px)] py-[clamp(14px,1.51vw,29px)]">
                    <div
                      className={`shrink-0 ${item.size} rounded-full flex items-center justify-center bg-blue-100/80 dark:bg-[#054986]`}
                    >
                      <img src={item.icon} alt={item.alt} className="w-[85%] h-[85%] object-cover " />
                    </div>
                    <div className="text-right min-w-0">
                      <h3 className="text-[20px] font-[700] text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="mt-[clamp(4px,0.4vw,8px)] text-[17px] text-[#595959] dark:text-[#bebebe] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>       


       
        <div dir="rtl" className="order-1 lg:order-2 text-right min-w-0">
          
          <div className="inline-flex items-center gap-[clamp(2px,0.21vw,4px)] mb-[clamp(8px,0.8vw,16px)] font-semibold text-sky-600 dark:text-[#0a8cf0] text-[length:clamp(0.9rem,1.05vw,1.25rem)]">
            <img src={logoMark} alt="IBRAM" className="w-[50px] h-auto object-contain select-none" />
            <span className="mr-[-9px] font-[700] text-[18px]">من نحن؟</span>
          </div>

          <h2 className="text-[40px] font-[700] leading-tight text-gray-900 dark:text-white">
            منصة موحّدة لتنظيم دورة المشتريات
            <br />
            من أولها إلى <span className="text-blue-500 dark:text-[#0a8cf0]">آخرها</span>
          </h2>

          <p className="mt-[clamp(14px,1.05vw,20px)] text-[18px] leading-[1.8] text-[#bebebe] max-w-[44rem] font-[400]">
            بدلاً من المعاملات الورقية والملفات المتفرقة، تجمع إبرام مراحل الشراء في مسار واحد واضح يمكن
            متابعته في أي وقت.
          </p>
        </div>
      </div>
    </section>
  )
}
