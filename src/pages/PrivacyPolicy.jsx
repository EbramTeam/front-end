import { useTheme } from '../hooks/useTheme'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy({ isDark: propIsDark, onToggleTheme: propToggleTheme }) {
  const theme = useTheme()
  const isDark = propIsDark !== undefined ? propIsDark : theme.isDark
  const toggleTheme = propToggleTheme || theme.toggleTheme

  return (
    <div className="min-h-screen bg-white text-[#01203d] dark:bg-[#002649] dark:text-white transition-colors duration-300">
      <TopBar />

      <div className="relative z-30">
        <Header isDark={isDark} onToggleTheme={toggleTheme} />
      </div>

      <main dir="rtl" className="relative z-10 mx-auto max-w-[1240px] px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
        {/* شروط الاستخدام */}
        <section id="terms" className="scroll-mt-24 space-y-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
            شروط الاستخدام
          </h1>

          <p className="text-sm sm:text-base font-semibold leading-relaxed text-[#1e293b] dark:text-slate-100">
            مرحبًا بك في منصة إبرام لإدارة المشتريات. باستخدامك للمنصة، فإنك توافق على الالتزام بشروط الاستخدام والأحكام الموضحة أدناه. يرجى قراءتها بعناية قبل استخدام خدماتنا.
          </p>

          <div className="space-y-2 pt-1">
            <h2 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              استخدام المنصة
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              تتيح منصة إبرام للمؤسسات والشركات والجامعات والمستشفيات وغيرها من الجهات تنظيم وإدارة عمليات المشتريات إلكترونياً، بما يشمل طلبات الشراء والاعتمادات وعروض الأسعار ومتابعة الإجراءات المرتبطة بها. يُلزم المستخدم باستخدام المنصة للأغراض المشروعة والمتوافقة مع الأنظمة المعمول بها، وعدم إساءة استخدامها أو محاولة الوصول غير المصرح به إلى بياناتها أو خدماتها.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h2 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              حقوق الملكية الفكرية
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              جميع المحتويات والعناصر الخاصة بمنصة إبرام، بما في ذلك النصوص والتصاميم والشعارات والأيقونات والواجهات والرسومات والمواد البرمجية، هي ملكية خاصة للمنصة أو لأصحاب الحقوق المعنيين، وتخضع لقوانين حماية الملكية الفكرية وحقوق النشر والعلامات التجارية.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h2 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              المسؤولية
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              تسعى منصة إبرام إلى توفير بيئة رقمية تساعد على تنظيم إجراءات المشتريات وتحسين كفاءة إدارتها، دون ضمان خلو المنصة من الأخطاء التقنية أو الانقطاعات. وتتحمل الجهة المستخدمة مسؤولية دقة البيانات والمعلومات التي تُدخلها، وصحة الإجراءات والقرارات التي تتخذها بناءً عليها، وفقًا لصلاحياتها والأنظمة المعمول بها.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h2 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              التعديلات على شروط الاستخدام
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              تحتفظ منصة إبرام بالحق في تحديث شروط الاستخدام أو تعديلها عند الحاجة، وتُنشر التعديلات على هذه الصفحة، مع توضيح تاريخ سريانها عند الاقتضاء. ويُنصح المستخدمون بمراجعة الشروط بشكل دوري للاطلاع على أي تحديثات.
            </p>
          </div>
        </section>

        {/* خط فاصل ناعم */}
        <div className="my-10 border-t border-slate-200/60 dark:border-white/10" />

        {/* سياسة الخصوصية */}
        <section id="privacy" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
            سياسة الخصوصية
          </h2>

          <p className="text-sm sm:text-base font-semibold leading-relaxed text-[#1e293b] dark:text-slate-100">
            تولي منصة إبرام أهمية كبيرة لخصوصية المستخدمين وسرية البيانات. توضح هذه السياسة أنواع المعلومات التي قد نجمعها، وكيفية استخدامها وحمايتها عند استخدام المنصة وخدماتها.
          </p>

          <div className="space-y-2 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              المعلومات التي نجمعها
            </h3>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              قد تجمع المنصة المعلومات اللازمة لإنشاء الحسابات وإدارة المؤسسات والمستخدمين، مثل الاسم والبريد الإلكتروني وبيانات التواصل والمعلومات المتعلقة بالجهة المستخدمة، بالإضافة إلى البيانات المرتبطة بطلبات الشراء والاعتمادات وعروض الأسعار والإجراءات الإدارية التي تتم عبر المنصة.
            </p>
          </div>

          {/* كيفية استخدام المعلومات */}
          <div className="space-y-3 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              كيفية استخدام المعلومات
            </h3>

            <p className="text-xs sm:text-sm md:text-[15px] font-semibold text-[#1e293b] dark:text-slate-200">
              تُستخدم المعلومات التي يتم جمعها للأغراض التالية:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm md:text-[15px] font-medium leading-[1.9] text-[#2c3e50] dark:text-slate-200 pr-1">
              <li className="flex items-start gap-2">
                <span className="text-[#009ef7] mt-1 select-none font-bold">•</span>
                <span>إنشاء الحسابات وإدارتها والتحقق من هوية المستخدمين.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#009ef7] mt-1 select-none font-bold">•</span>
                <span>توفير خدمات إدارة المشتريات وتنظيم الإجراءات ومتابعة حالاتها.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#009ef7] mt-1 select-none font-bold">•</span>
                <span>إرسال الإشعارات والتحديثات المتعلقة بالطلبات والمعاملات.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#009ef7] mt-1 select-none font-bold">•</span>
                <span>تحسين أداء المنصة وتطوير خدماتها ومعالجة المشكلات التقنية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#009ef7] mt-1 select-none font-bold">•</span>
                <span>التواصل مع المستخدمين بشأن الدعم الفني والاستفسارات والتحديثات المهمة.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              حماية البيانات وسريتها
            </h3>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              تعمل منصة إبرام على اتخاذ التدابير التقنية والتنظيمية المناسبة لحماية البيانات من الوصول غير المصرح به أو الاستخدام أو التعديل أو الإفصاح غير المشروع. كما يُتوقع من المستخدمين المحافظة على سرية بيانات الدخول الخاصة بهم، وعدم مشاركتها مع أشخاص غير مخولين.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              مشاركة المعلومات
            </h3>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              لا تتم مشاركة البيانات الشخصية أو بيانات المؤسسات مع أطراف خارجية إلا عند الحاجة إلى تقديم الخدمات، أو بموافقة الجهة المعنية، أو عند وجود التزام قانوني يقتضي ذلك، وتُراعى صلاحيات الوصول المحددة لكل مستخدم بما يتناسب مع دوره داخل الجهة التي يتبع لها.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              ملفات تعريف الارتباط
            </h3>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              قد تستخدم المنصة ملفات تعريف الارتباط (Cookies) والتقنيات المشابهة لتحسين تجربة المستخدم، وتسهيل تسجيل الدخول، وتحليل استخدام الموقع عند الاقتضاء. ويمكن للمستخدم إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحه، مع العلم أن تعطيل بعضها قد يؤثر في عمل بعض الخدمات.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#009ef7] dark:text-[#38bdf8]">
              التعديلات على سياسة الخصوصية
            </h3>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
              تحتفظ منصة إبرام بالحق في تحديث سياسة الخصوصية بما يتناسب مع تطوير خدماتها أو التغييرات القانونية والتنظيمية، وسيتم نشر النسخة المحدثة على هذه الصفحة، ويُنصح المستخدمون بمراجعتها بشكل دوري.
            </p>
          </div>
        </section>

        {/* خط فاصل ناعم */}
        <div className="my-10 border-t border-slate-200/60 dark:border-white/10" />

        {/* حقوق النشر */}
        <section id="copyright" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
            حقوق النشر
          </h2>

          <div className="space-y-4 text-xs sm:text-sm md:text-[15px] font-medium leading-[2] text-[#2c3e50] dark:text-slate-200">
            <p>
              جميع الحقوق المتعلقة بمنصة إبرام ومحتوياتها، بما في ذلك النصوص والتصاميم والشعارات والأيقونات والواجهات والمواد البرمجية، محفوظة للمنصة أو لأصحاب الحقوق المعنيين.
            </p>
            <p>
              لا يجوز نسخ أي جزء من محتوى المنصة أو إعادة إنتاجه أو نشره أو تعديله أو توزيعه أو استخدامه لأغراض تجارية دون الحصول على إذن خطي مسبق من صاحب الحق، ما لم تسمح القوانين المعمول بها بخلاف ذلك.
            </p>
            <p>
              وتظل أسماء المنتجات والشعارات والعلامات التجارية الخاصة بالأطراف الأخرى ملكًا لأصحابها.
            </p>
            <p>
              إذا كان لديك استفسار يتعلق بشروط الاستخدام أو سياسة الخصوصية أو حقوق الملكية الفكرية، يمكنك التواصل مع فريق إبرام عبر قنوات التواصل الرسمية المعتمدة للمنصة.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
