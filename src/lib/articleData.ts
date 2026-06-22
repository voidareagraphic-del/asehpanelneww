// src/lib/articleData.ts

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  category: { en: string; fa: string };
  title: { en: string; fa: string };
  excerpt: { en: string; fa: string };
  author: { en: string; fa: string };
  date: { en: string; fa: string };
  readTime: { en: string; fa: string };
  accent: "green" | "blue" | "purple" | "ice";
  sections: {
    en: ArticleSection[];
    fa: ArticleSection[];
  };
}

export const ARTICLES: Article[] = [
  {
    slug: "pir-vs-pur-thermal-performance",
    category: { en: "Engineering", fa: "مهندسی" },
    title: {
      en: "PIR vs PUR: Thermal Performance Under Extreme Cold",
      fa: "PIR در برابر PUR: عملکرد حرارتی در سرمای شدید",
    },
    excerpt: {
      en: "A comprehensive analysis of High Index PIR insulation versus standard PUR foam in sub-zero applications, including real-world thermal conductivity data at -40°C.",
      fa: "تحلیل جامع عایق PIR با شاخص بالا در برابر فوم PUR استاندارد در کاربردهای زیر صفر، شامل داده‌های هدایت حرارتی دنیای واقعی در -40°C.",
    },
    author: { en: "Engineering R&D", fa: "تحقیق و توسعه مهندسی" },
    date: { en: "March 2026", fa: "خرداد ۱۴۰۵" },
    readTime: { en: "8 min", fa: "۸ دقیقه" },
    accent: "purple",
    sections: {
      en: [
        {
          heading: "What Are PIR and PUR Foams?",
          body: "Polyisocyanurate (PIR) and Polyurethane (PUR) are both rigid foam insulation materials widely used in sandwich panel manufacturing. While they share a similar base chemistry, their molecular structure — and therefore their performance characteristics — differ significantly. PIR panels use a higher proportion of isocyanate, creating a more thermally stable, fire-resistant foam with a higher lambda value at low temperatures.",
        },
        {
          heading: "Thermal Conductivity at Sub-Zero Temperatures",
          body: "The key metric in cold storage panel selection is thermal conductivity (λD), measured in W/m·K. Standard PUR foam achieves a λD of approximately 0.025–0.028 W/m·K at room temperature. High Index PIR maintains a λD of 0.022 W/m·K — and crucially, this value remains stable even at -40°C operating conditions. PUR foam typically shows a 12–18% increase in thermal conductivity at cryogenic temperatures, significantly reducing its effective insulation performance.",
        },
        {
          heading: "Fire Performance: A Decisive Difference",
          body: "PIR forms a dense, stable carbonized char layer when exposed to flame. This char acts as a structural barrier, slowing flame propagation and preventing the foam from dripping. PUR foam, by contrast, is more susceptible to melting and dripping under fire conditions. For industrial cold storage and clean room applications where fire regulations are strict, PIR panels rated BS1D0 are typically specified as the minimum standard.",
        },
        {
          heading: "Long-Term Dimensional Stability",
          body: "In extreme cold environments, foam dimensional stability over time directly affects joint integrity and thermal performance. PIR foam demonstrates superior resistance to thermal cycling — repeated exposure to temperature swings from ambient to -40°C — with minimal shrinkage or deformation. PUR panels may show micro-cracking at joints after extended cold cycling, creating potential thermal bridges.",
        },
        {
          heading: "Which to Choose for Your Project?",
          body: "For any cold storage application below -20°C, pharmaceutical cold chain, or clean room, High Index PIR is the recommended specification. The premium in material cost is offset by lower energy consumption over the building's lifetime and reduced maintenance. PUR remains a cost-effective option for non-critical ambient temperature applications such as office partitions and light industrial wall cladding where fire classification BS3D0 or better is acceptable.",
        },
      ],
      fa: [
        {
          heading: "فوم‌های PIR و PUR چیستند؟",
          body: "پلی ایزوسیانورات (PIR) و پلی اورتان (PUR) هر دو مواد عایق فوم سخت هستند که به طور گسترده در ساخت پانل ساندویچ استفاده می‌شوند. هرچند پایه شیمیایی مشابهی دارند، ساختار مولکولی آن‌ها — و در نتیجه ویژگی‌های عملکردی‌شان — تفاوت قابل توجهی دارند. پانل‌های PIR از نسبت بالاتری از ایزوسیانات استفاده می‌کنند که یک فوم پایدارتر از نظر حرارتی، مقاوم‌تر در برابر آتش با مقدار لامبدای بهتر در دماهای پایین ایجاد می‌کند.",
        },
        {
          heading: "هدایت حرارتی در دماهای زیر صفر",
          body: "معیار کلیدی در انتخاب پانل سردخانه، هدایت حرارتی (λD) است که بر حسب W/m·K اندازه‌گیری می‌شود. فوم استاندارد PUR در دمای اتاق به λD تقریباً 0.025 تا 0.028 W/m·K دست می‌یابد. PIR با شاخص بالا λD 0.022 W/m·K را حفظ می‌کند — و مهم‌تر از همه، این مقدار حتی در شرایط عملکرد -40°C پایدار می‌ماند. فوم PUR معمولاً در دماهای برودتی 12 تا 18 درصد افزایش در هدایت حرارتی نشان می‌دهد که عملکرد عایق مؤثر آن را به طور قابل توجهی کاهش می‌دهد.",
        },
        {
          heading: "عملکرد در برابر آتش: تفاوتی تعیین‌کننده",
          body: "PIR در معرض شعله یک لایه کربنی متراکم و پایدار تشکیل می‌دهد. این لایه کربنی به عنوان یک سد سازه‌ای عمل می‌کند، انتشار شعله را کند می‌کند و از چکیدن فوم جلوگیری می‌کند. فوم PUR در مقابل، در شرایط آتش بیشتر مستعد ذوب شدن و چکیدن است. برای کاربردهای سردخانه صنعتی و کلین‌روم که در آن مقررات آتش سخت است، پانل‌های PIR با رتبه‌بندی BS1D0 معمولاً به عنوان حداقل استاندارد تعیین می‌شوند.",
        },
        {
          heading: "پایداری ابعادی بلندمدت",
          body: "در محیط‌های سرمای شدید، پایداری ابعادی فوم در طول زمان مستقیماً بر یکپارچگی درز و عملکرد حرارتی تأثیر می‌گذارد. فوم PIR مقاومت برتری در برابر چرخه‌های حرارتی — قرار گرفتن مکرر در معرض نوسانات دما از محیط تا -40°C — با حداقل انقباض یا تغییر شکل نشان می‌دهد. پانل‌های PUR ممکن است پس از چرخه‌های سرمای طولانی‌مدت ترک‌خوردگی ریز در درزها نشان دهند که پل‌های حرارتی بالقوه‌ای ایجاد می‌کند.",
        },
        {
          heading: "کدام را برای پروژه خود انتخاب کنید؟",
          body: "برای هر کاربرد سردخانه‌ای زیر -20°C، زنجیره سرمای داروسازی یا کلین‌روم، PIR با شاخص بالا مشخصات توصیه‌شده است. هزینه اضافی مواد با مصرف انرژی کمتر در طول عمر ساختمان و کاهش تعمیرات و نگهداری جبران می‌شود. PUR همچنان یک گزینه مقرون‌به‌صرفه برای کاربردهای دمای محیطی غیرحیاتی مانند پارتیشن‌های اداری و روکش دیوار صنعتی سبک باقی می‌ماند.",
        },
      ],
    },
  },
  {
    slug: "how-sandwich-panels-are-made",
    category: { en: "Manufacturing", fa: "تولید" },
    title: {
      en: "How Modern Sandwich Panels Are Made",
      fa: "نحوه ساخت پانل‌های ساندویچ مدرن",
    },
    excerpt: {
      en: "Inside the continuous production line — from raw steel coil and PIR foam injection to CNC cutting and automated quality inspection.",
      fa: "درون خط تولید پیوسته — از کویل فولاد خام و تزریق فوم PIR تا برش CNC و بازرسی کیفیت خودکار.",
    },
    author: { en: "Production Team", fa: "تیم تولید" },
    date: { en: "April 2026", fa: "تیر ۱۴۰۵" },
    readTime: { en: "6 min", fa: "۶ دقیقه" },
    accent: "green",
    sections: {
      en: [
        {
          heading: "The Continuous Production Method",
          body: "Unlike batch manufacturing, continuous production lines produce sandwich panels in a single uninterrupted process — from raw steel coil to finished panel. This method eliminates dimensional inconsistencies, ensures uniform foam density distribution, and enables precise control of every layer. ASEH Panel operates two fully-automated continuous lines, making it one of Asia's highest-capacity sandwich panel producers.",
        },
        {
          heading: "Stage 1: Steel Coil Preparation and Roll Forming",
          body: "The process begins with galvanized steel coils — typically AZ120 or Z120 coating weight — fed into precision roll-forming machines. These form the steel into the required profile (flat, 5-rib, 3-rib, or micro-rib depending on the panel type) with tolerances within ±0.5mm. Surface treatment and pre-coating, applied at the steel mill, ensures corrosion resistance for the life of the building.",
        },
        {
          heading: "Stage 2: PIR Foam Injection and Lamination",
          body: "The top and bottom steel skins travel along the production line and enter the foam injection station, where high-pressure mixing heads dispense a precisely metered mixture of isocyanate and polyol — the two components that react to form PIR foam. The mixture expands between the steel skins under controlled temperature and pressure, achieving a target density of 40 ± 2 kg/m³. Pentane, a Kyoto Protocol-compliant blowing agent, drives the expansion.",
        },
        {
          heading: "Stage 3: Automated Quality Control",
          body: "Every panel passes through a battery of automated inspection stations. Thickness gauges verify the foam core depth at multiple points. Thermal cameras detect voids or density irregularities. Edge probes check joint geometry for the tongue-and-groove or flat edge profile. Data from each inspection point is logged in real-time and tied to the panel's serial number, enabling full traceability from production to installation.",
        },
        {
          heading: "Stage 4: CNC Cutting and Final Output",
          body: "Once the continuous laminated panel exits the press section and the foam has fully cured, CNC cutting stations slice the panel to the specified length — accurate to ±2mm — without stopping the production line. Edge profiling creates the precise tongue-and-groove geometry required for cold storage and clean room applications. Panels are then stacked, labeled, and prepared for shipping.",
        },
      ],
      fa: [
        {
          heading: "روش تولید پیوسته",
          body: "بر خلاف تولید دسته‌ای، خطوط تولید پیوسته پانل‌های ساندویچ را در یک فرآیند بدون وقفه واحد تولید می‌کنند — از کویل فولاد خام تا پانل تمام‌شده. این روش ناسازگاری‌های ابعادی را حذف می‌کند، توزیع یکنواخت چگالی فوم را تضمین می‌کند و کنترل دقیق هر لایه را امکان‌پذیر می‌سازد. آسه پانل دو خط پیوسته کاملاً خودکار را اداره می‌کند و آن را به یکی از تولیدکنندگان پانل ساندویچ با بالاترین ظرفیت در آسیا تبدیل می‌کند.",
        },
        {
          heading: "مرحله ۱: آماده‌سازی کویل فولاد و رول فرمینگ",
          body: "فرآیند با کویل‌های فولاد گالوانیزه — معمولاً وزن پوشش AZ120 یا Z120 — شروع می‌شود که به داخل ماشین‌های رول فرمینگ دقیق تغذیه می‌شوند. این ماشین‌ها فولاد را به پروفیل مورد نیاز (صاف، ۵ دنده، ۳ دنده یا ریب میکرو بسته به نوع پانل) با تلرانس‌های ±0.5 میلی‌متر شکل می‌دهند. عملیات سطح و پیش‌پوشش، که در کارخانه فولاد اعمال می‌شود، مقاومت در برابر خوردگی را برای عمر ساختمان تضمین می‌کند.",
        },
        {
          heading: "مرحله ۲: تزریق فوم PIR و لمینیشن",
          body: "پوسته‌های فولادی بالا و پایین در امتداد خط تولید حرکت می‌کنند و وارد ایستگاه تزریق فوم می‌شوند، جایی که هدهای اختلاط فشار بالا مخلوطی دقیقاً اندازه‌گیری‌شده از ایزوسیانات و پلیول — دو جزء که برای تشکیل فوم PIR واکنش می‌دهند — توزیع می‌کنند. مخلوط بین پوسته‌های فولادی در دما و فشار کنترل‌شده منبسط می‌شود و به چگالی هدف 40 ± 2 kg/m³ دست می‌یابد. پنتان، یک عامل دمنده مطابق با پروتکل کیوتو، انبساط را هدایت می‌کند.",
        },
        {
          heading: "مرحله ۳: کنترل کیفیت خودکار",
          body: "هر پانل از یک مجموعه ایستگاه‌های بازرسی خودکار عبور می‌کند. گیج‌های ضخامت عمق هسته فوم را در چندین نقطه تأیید می‌کنند. دوربین‌های حرارتی خلاها یا ناهنجاری‌های چگالی را شناسایی می‌کنند. پروب‌های لبه هندسه درز برای پروفیل زبانه و شیار یا لبه صاف را بررسی می‌کنند. داده‌های هر نقطه بازرسی به صورت بلادرنگ ثبت می‌شوند و به شماره سریال پانل مرتبط می‌شوند که ردیابی کامل از تولید تا نصب را ممکن می‌سازد.",
        },
        {
          heading: "مرحله ۴: برش CNC و خروجی نهایی",
          body: "پس از اینکه پانل لمینیت‌شده پیوسته از بخش پرس خارج شد و فوم کاملاً سخت شد، ایستگاه‌های برش CNC پانل را به طول مشخص — با دقت ±2 میلی‌متر — بدون توقف خط تولید برش می‌دهند. پروفیل‌بندی لبه هندسه دقیق زبانه و شیار مورد نیاز برای کاربردهای سردخانه و کلین‌روم را ایجاد می‌کند. سپس پانل‌ها روی هم قرار می‌گیرند، برچسب‌گذاری می‌شوند و برای حمل‌ونقل آماده می‌شوند.",
        },
      ],
    },
  },
  {
    slug: "smart-cold-storage-iot-guide",
    category: { en: "Technology", fa: "فناوری" },
    title: {
      en: "Smart Cold Storage: IoT Integration Guide",
      fa: "سردخانه هوشمند: راهنمای یکپارچه‌سازی IoT",
    },
    excerpt: {
      en: "How to integrate temperature monitoring, energy management, and real-time performance analytics into ASP-CS cold storage panel systems.",
      fa: "نحوه یکپارچه‌سازی نظارت دما، مدیریت انرژی و تحلیل عملکرد بلادرنگ در سیستم‌های پانل سردخانه ASP-CS.",
    },
    author: { en: "Systems Engineering", fa: "مهندسی سیستم" },
    date: { en: "May 2026", fa: "مرداد ۱۴۰۵" },
    readTime: { en: "10 min", fa: "۱۰ دقیقه" },
    accent: "blue",
    sections: {
      en: [
        {
          heading: "Why Smart Cold Storage Matters",
          body: "Modern cold storage facilities face increasing pressure to reduce energy consumption, comply with stricter food safety regulations, and demonstrate real-time chain-of-custody documentation. IoT-enabled monitoring transforms a passive insulated envelope into an active data-generating asset, enabling predictive maintenance, automated alarm response, and energy optimization — often reducing refrigeration energy costs by 15–25%.",
        },
        {
          heading: "Sensor Placement in ASP-CS Panel Systems",
          body: "The ASP-CS tongue-and-groove joint system accommodates embedded sensor runs without compromising thermal performance. Temperature sensors (±0.1°C accuracy) should be positioned at: (1) midpoint of each wall panel face at the coldest operational height, (2) at T&G joints on north-facing walls, where thermal bridging is highest, and (3) ceiling panels at the centre-span and perimeter. Humidity sensors protect against condensation-related joint degradation. All sensors should use wireless mesh protocols (Zigbee or Z-Wave) to avoid cable penetrations through the panel envelope.",
        },
        {
          heading: "Energy Management Integration",
          body: "Integrating the sensor network with your building energy management system (BEMS) enables demand-responsive refrigeration control. When outdoor ambient temperature drops (monitored via external sensors), compressor staging can be optimised to run at lower duty cycles. Pre-cooling algorithms — triggered by occupancy schedules — allow thermal mass to absorb load during off-peak electricity tariff periods. This load-shifting strategy, combined with the high thermal mass of 150mm ASP-CS panels, typically extends compressor-off periods by 40–60 minutes in standard ambient conditions.",
        },
        {
          heading: "Real-Time Analytics and Alerting",
          body: "A properly configured IoT dashboard should surface: temperature excursion alerts with geo-stamped timestamps (essential for HACCP documentation), door opening events correlated with temperature recovery curves, compressor duty cycle trends over rolling 30-day windows, and joint temperature differential mapping to identify emerging thermal bridges. Cloud-connected systems can push alerts to facility managers via SMS or push notification within 90 seconds of a threshold breach.",
        },
        {
          heading: "Integration with ASP-CS: Step-by-Step",
          body: "Step 1: During panel installation, run sensor cabling through the pre-routed conduit channels in ASP-CS panels. Step 2: Install wireless mesh repeaters in the ceiling panels at 8–10m intervals. Step 3: Commission the gateway unit (Ethernet or LTE backup) and verify sensor mesh connectivity with <200ms latency. Step 4: Configure alert thresholds in the monitoring platform — typically ±2°C from setpoint for warning, ±4°C for critical alarm. Step 5: Integrate BEMS API with the monitoring platform and test demand-response logic in a manual override mode before enabling automation.",
        },
      ],
      fa: [
        {
          heading: "چرا سردخانه هوشمند اهمیت دارد",
          body: "تأسیسات سردخانه مدرن با فشار فزاینده‌ای برای کاهش مصرف انرژی، رعایت مقررات ایمنی غذایی سخت‌گیرانه‌تر و ارائه مستندات زنجیره حضانت بلادرنگ روبرو هستند. نظارت با قابلیت IoT یک پوسته عایق غیرفعال را به یک دارایی مولد داده فعال تبدیل می‌کند و نگهداری پیش‌بینانه، پاسخ خودکار به آلارم و بهینه‌سازی انرژی را ممکن می‌سازد — اغلب هزینه‌های انرژی تبرید را ۱۵ تا ۲۵ درصد کاهش می‌دهد.",
        },
        {
          heading: "قرارگیری سنسور در سیستم‌های پانل ASP-CS",
          body: "سیستم اتصال زبانه و شیار ASP-CS کانال‌های سنسور تعبیه‌شده را بدون به خطر انداختن عملکرد حرارتی تطبیق می‌دهد. سنسورهای دما (دقت ±0.1°C) باید در موارد زیر قرار گیرند: (۱) نقطه میانی هر وجه پانل دیواری در ارتفاع عملکردی سردترین، (۲) در درزهای T&G روی دیوارهای رو به شمال، جایی که پل حرارتی بالاترین است، و (۳) پانل‌های سقف در مرکز دهانه و محیط. سنسورهای رطوبت از تخریب درز مرتبط با تراکم محافظت می‌کنند. همه سنسورها باید از پروتکل‌های مش بی‌سیم (Zigbee یا Z-Wave) برای اجتناب از نفوذ کابل از طریق پوسته پانل استفاده کنند.",
        },
        {
          heading: "یکپارچه‌سازی مدیریت انرژی",
          body: "یکپارچه‌سازی شبکه سنسور با سیستم مدیریت انرژی ساختمان (BEMS) کنترل تبرید پاسخگو به تقاضا را ممکن می‌سازد. وقتی دمای محیطی خارجی کاهش می‌یابد (نظارت از طریق سنسورهای خارجی)، مراحل کمپرسور می‌تواند برای کار در چرخه‌های وظیفه کمتر بهینه شود. الگوریتم‌های پیش‌سرمایش — که توسط برنامه‌های اشغال فعال می‌شوند — به جرم حرارتی اجازه می‌دهند بار را در دوره‌های تعرفه برق خارج از اوج جذب کند. این استراتژی جابجایی بار، همراه با جرم حرارتی بالای پانل‌های ASP-CS 150 میلی‌متری، معمولاً دوره‌های خاموش کمپرسور را ۴۰ تا ۶۰ دقیقه در شرایط محیطی استاندارد افزایش می‌دهد.",
        },
        {
          heading: "تجزیه‌وتحلیل بلادرنگ و هشداردهی",
          body: "یک داشبورد IoT به درستی پیکربندی‌شده باید نشان دهد: هشدارهای خروج دما با مهرهای زمانی جغرافیایی (ضروری برای مستندسازی HACCP)، رویدادهای باز شدن در مرتبط با منحنی‌های بازیابی دما، روندهای چرخه وظیفه کمپرسور در پنجره‌های ۳۰ روزه متحرک، و نقشه‌برداری اختلاف دمای درز برای شناسایی پل‌های حرارتی در حال ظهور. سیستم‌های متصل به ابر می‌توانند در عرض ۹۰ ثانیه پس از نقض آستانه، هشدارها را از طریق SMS یا اعلان فشار به مدیران تأسیسات ارسال کنند.",
        },
        {
          heading: "یکپارچه‌سازی با ASP-CS: مرحله به مرحله",
          body: "مرحله ۱: در حین نصب پانل، کابل‌کشی سنسور را از طریق کانال‌های کانال پیش‌مسیریابی‌شده در پانل‌های ASP-CS اجرا کنید. مرحله ۲: رپیترهای مش بی‌سیم را در پانل‌های سقف با فواصل ۸ تا ۱۰ متری نصب کنید. مرحله ۳: واحد دروازه (اترنت یا پشتیبان LTE) را راه‌اندازی کنید و اتصال مش سنسور را با تأخیر <200 میلی‌ثانیه تأیید کنید. مرحله ۴: آستانه‌های هشدار را در پلتفرم نظارتی پیکربندی کنید — معمولاً ±2°C از نقطه تنظیم برای هشدار، ±4°C برای آلارم بحرانی. مرحله ۵: API BEMS را با پلتفرم نظارتی یکپارچه کنید و منطق پاسخ به تقاضا را در حالت لغو دستی آزمایش کنید قبل از فعال کردن اتوماسیون.",
        },
      ],
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
