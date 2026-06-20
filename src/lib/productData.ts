// src/lib/productData.ts
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";

export interface ProductSpec {
  label: string;
  labelFa: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  titleFa: string;
  body: string;
  bodyFa: string;
}

export interface ProductVariant {
  code: string;
  name: { en: string; fa: string };
  description: { en: string; fa: string };
  applications: { en: string[]; fa: string[] };
}

export interface ProductDetail {
  code: string;
  slug: string;
  accent: BrandColor;
  image: string;
  thickness: string;
  specs: ProductSpec[];
  features: ProductFeature[];
  applications: { en: string[]; fa: string[] };
  name: { en: string; fa: string };
  subtitle: { en: string; fa: string };
  description: { en: string; fa: string };
  heroTagline: { en: string; fa: string };
  certBadges: string[];
  whatIsIt?: { en: string; fa: string };
  coreComparison?: {
    pur: { title: { en: string; fa: string }; body: { en: string; fa: string } };
    pir: { title: { en: string; fa: string }; body: { en: string; fa: string } };
    note: { en: string; fa: string };
  };
  productVariants?: ProductVariant[];
  qualityNote?: { en: string; fa: string };
  whyBuy?: { en: string[]; fa: string[] };
  priceFactors?: { en: string[]; fa: string[] };
  whySpecialized?: { en: string; fa: string };
  ctaCustom?: {
    title: { en: string; fa: string };
    body: { en: string; fa: string };
    buttons: Array<{ label: { en: string; fa: string }; href: string; primary: boolean }>;
  };
  faq?: Array<{
    q: { en: string; fa: string };
    a: { en: string; fa: string };
  }>;
}

export const PRODUCTS: ProductDetail[] = [
  {
    code: "ASP-RO",
    slug: "asp-ro",
    accent: "green",
    image: "/images/P01.webp",
    thickness: "30–200mm",
    heroTagline: {
      en: "An advanced solution for roof cladding of industrial and building structures — with effective thermal insulation, high strength, excellent fire resistance, and fast installation.",
      fa: "ساندویچ پانل سقفی آسه پانل، راهکاری پیشرفته برای پوشش سقف سازه‌های صنعتی و ساختمانی است؛ با عایق حرارتی مناسب، استحکام بالا، مقاومت زیاد در برابر آتش و نصب سریع.",
    },
    name: { en: "Roof Panels", fa: "پانل سقفی" },
    subtitle: {
      en: "5-rib & 3-rib profiles | PUR & PIR core",
      fa: "مدل پنج‌گام و سه‌گام | هسته PUR و PIR",
    },
    description: {
      en: "In building and industrial projects, choosing the right roofing material plays a vital role in safety, durability, energy efficiency, and speed of execution. Aseh roof panel, with advanced insulation, high resistance, and functional design, is a modern and reliable alternative to traditional roofing methods.",
      fa: "در پروژه‌های ساختمانی و صنعتی، انتخاب مصالح سقفی مناسب نقش مهمی در ایمنی، دوام، بهره‌وری انرژی و سرعت اجرا دارد. ساندویچ پانل سقفی آسه با ترکیب عایق‌کاری پیشرفته، مقاومت بالا و طراحی کاربردی، می‌تواند جایگزینی مدرن و قابل اعتماد برای روش‌های سنتی پوشش سقف باشد.",
    },
    whatIsIt: {
      en: "Aseh roof panel (ASP-RO / Roof Aseh Panel) is designed to clad roofs of all types of structures. Produced with a Polyurethane (PUR) or Polyisocyanurate (PIR) insulation core, its engineered structure makes it an ideal choice for projects requiring thermal insulation, high durability, and fast execution. Available in 5-rib and 3-rib models.",
      fa: "ساندویچ پانل سقفی آسه با نام تجاری RO ASP / Roof Aseh Panel برای پوشش سقف انواع سازه‌ها طراحی شده است. این محصول با هسته‌ی پلی‌یورتان (PUR) یا پلی‌ایزوسیانورات (PIR) تولید می‌شود و به دلیل ساختار مهندسی‌شده‌ی خود، گزینه‌ای مناسب برای پروژه‌هایی است که به عایق‌کاری حرارتی، دوام بالا و اجرای سریع نیاز دارند.",
    },
    specs: [
      { label: "Thermal Conductivity", labelFa: "ضریب هدایت حرارتی", value: "λD = 0.022 W/m·K" },
      { label: "Fire Rating", labelFa: "درجه مقاومت آتش", value: "BS1D0" },
      { label: "Effective Width", labelFa: "عرض موثر", value: "1000mm" },
      { label: "Thickness Range", labelFa: "محدوده ضخامت", value: "30–200mm" },
      { label: "Density", labelFa: "چگالی", value: "40 ± 2 kg/m³" },
      { label: "Core Type", labelFa: "نوع هسته", value: "PUR / PIR" },
      { label: "Steel Coating", labelFa: "پوشش فولاد", value: "AZ120 / Z120" },
      { label: "Face Sheet", labelFa: "ورق رویه", value: "0.4 – 0.7mm" },
      { label: "Compressive Strength", labelFa: "مقاومت فشاری", value: "≥ 120 kPa" },
    ],
    features: [
      {
        title: "Effective Thermal Insulation",
        titleFa: "عایق حرارتی مناسب و مؤثر",
        body: "PUR or PIR foam core with thermal conductivity of λD = 0.022 W/m·K significantly reduces heat transfer through the roof, improving energy performance and reducing heating and cooling costs year-round.",
        bodyFa: "هسته فوم PUR یا PIR با ضریب هدایت حرارتی λD = 0.022 W/m·K انتقال حرارت از سقف را به‌طور قابل توجهی کاهش می‌دهد و عملکرد انرژی بنا را بهبود می‌بخشد.",
      },
      {
        title: "High Fire Resistance",
        titleFa: "مقاومت بسیار بالا در برابر آتش",
        body: "Certified to BS1D0 — the most stringent European fire standards. PIR core forms a stable char layer under heat, does not melt, does not drip, and self-extinguishes when the ignition source is removed.",
        bodyFa: "تأییدشده طبق استانداردهای آتش BS1D0. هسته PIR در برابر حرارت یک لایه کربنی پایدار تشکیل می‌دهد، ذوب نمی‌شود، قطره نمی‌افتد و پس از حذف منبع اشتعال خودبه‌خود خاموش می‌شود.",
      },
      {
        title: "Lightweight — Reduced Dead Load",
        titleFa: "سبک بودن سازه و کاهش بار مرده",
        body: "The lightweight sandwich structure reduces the dead load on the building frame, enabling smaller structural members, lower foundation costs, and faster overall project delivery.",
        bodyFa: "ساختار سبک ساندویچ بار مرده روی اسکلت ساختمان را کاهش می‌دهد و امکان استفاده از المان‌های سازه‌ای کوچک‌تر و هزینه‌های پایین‌تر فونداسیون را فراهم می‌کند.",
      },
      {
        title: "Fast & Easy Installation",
        titleFa: "نصب سریع و آسان",
        body: "Prefabricated panels arrive ready to install. The 5-rib and 3-rib profiles interlock precisely, dramatically reducing on-site labour time compared to traditional roofing methods.",
        bodyFa: "پانل‌های پیش‌ساخته آماده نصب هستند. پروفیل‌های پنج‌گام و سه‌گام به‌دقت قفل می‌شوند و زمان کار در محل را نسبت به روش‌های سنتی به‌طور چشمگیری کاهش می‌دهند.",
      },
      {
        title: "Multi-Function Roof Capability",
        titleFa: "قابلیت اجرای سقف با عملکرد چندگانه",
        body: "Designed to support multiple functions simultaneously — thermal insulation, structural cladding, and waterproofing — replacing several separate material layers with a single integrated solution.",
        bodyFa: "طراحی‌شده برای پشتیبانی از چندین عملکرد به‌طور همزمان — عایق‌کاری، پوشش سازه‌ای و آب‌بندی — که چندین لایه مصالح جداگانه را با یک راهکار یکپارچه جایگزین می‌کند.",
      },
      {
        title: "Solar-Ready — No Panel Drilling",
        titleFa: "آماده برای خورشیدی — بدون سوراخ‌کاری",
        body: "The rib geometry is engineered to support photovoltaic panel installation without drilling through the panel, preserving the roof's waterproof integrity while enabling green energy retrofits.",
        bodyFa: "هندسه دنده مهندسی‌شده برای نصب پانل‌های فتوولتاییک بدون سوراخ‌کاری در پانل است؛ این ویژگی یکپارچگی آب‌بند سقف را حفظ می‌کند و بازسازی انرژی سبز را ممکن می‌سازد.",
      },
    ],
    applications: {
      en: [
        "Industrial warehouses & factories",
        "Residential buildings",
        "Logistics & storage buildings",
        "Production halls",
        "Industrial & semi-industrial projects",
        "Solar-ready roof structures",
        "Agricultural buildings",
        "Sports arenas & exhibition halls",
      ],
      fa: [
        "سوله‌های صنعتی و کارخانه‌ها",
        "ساختمان‌های مسکونی",
        "انبارها و سازه‌های ذخیره‌سازی",
        "سالن‌های تولید",
        "پروژه‌های صنعتی و نیمه‌صنعتی",
        "سازه‌هایی با نیاز به عایق‌کاری حرارتی و وزن پایین",
        "ساختمان‌های کشاورزی",
        "سالن‌های ورزشی و نمایشگاهی",
      ],
    },
    productVariants: [
      {
        code: "5-rib",
        name: { en: "5-Rib Profile", fa: "مدل پنج‌گام" },
        description: {
          en: "The 5-rib model offers maximum load-bearing capacity and rigidity, ideal for large spans and projects with high structural demands.",
          fa: "مدل پنج‌گام ظرفیت باربری و استحکام حداکثری ارائه می‌دهد و برای دهانه‌های بزرگ و پروژه‌هایی با الزامات سازه‌ای بالا مناسب است.",
        },
        applications: {
          en: ["Large industrial warehouses", "Production halls", "Logistics hubs", "Solar-ready roofs"],
          fa: ["انبارهای صنعتی بزرگ", "سالن‌های تولید", "مراکز لجستیک", "سقف‌های آماده خورشیدی"],
        },
      },
      {
        code: "3-rib",
        name: { en: "3-Rib Profile", fa: "مدل سه‌گام" },
        description: {
          en: "The 3-rib model is optimised for projects requiring lighter weight and easier handling, while still providing excellent insulation and structural performance.",
          fa: "مدل سه‌گام برای پروژه‌هایی که به وزن سبک‌تر و حمل‌ونقل آسان‌تر نیاز دارند بهینه‌سازی شده، در حالی که عایق‌کاری و عملکرد سازه‌ای عالی را حفظ می‌کند.",
        },
        applications: {
          en: ["Residential buildings", "Agricultural structures", "Small & medium warehouses", "Exhibition booths"],
          fa: ["ساختمان‌های مسکونی", "سازه‌های کشاورزی", "انبارهای کوچک و متوسط", "غرفه‌های نمایشگاهی"],
        },
      },
    ],
    whyBuy: {
      en: [
        "Engineered insulation with PUR / PIR core",
        "BS1D0 certified fire resistance",
        "Lightweight — reduces structural dead load",
        "Fast installation vs. traditional roofing",
        "Solar panel ready without drilling",
        "Multi-functional single-layer roofing solution",
        "Suitable for industrial, residential, and agricultural projects",
      ],
      fa: [
        "عایق‌کاری مهندسی‌شده با هسته PUR / PIR",
        "مقاومت آتش گواهی‌شده BS1D0",
        "سبک بودن — کاهش بار مرده سازه",
        "نصب سریع در مقایسه با روش‌های سنتی",
        "آماده برای نصب سلول خورشیدی بدون سوراخ‌کاری",
        "راهکار سقفی یکپارچه با عملکرد چندگانه",
        "مناسب برای پروژه‌های صنعتی، مسکونی و کشاورزی",
      ],
    },
    ctaCustom: {
      title: {
        en: "Looking for the right roof panel for your project?",
        fa: "برای انتخاب بهترین ساندویچ پانل سقفی، با آسه پانل مشورت کنید",
      },
      body: {
        en: "If your project needs roofing with effective thermal insulation, high resistance, and fast installation, Aseh roof panel can be a reliable choice. Our experts are ready to analyse your project needs and propose the best technical solution.",
        fa: "اگر برای پروژه خود به دنبال پوشش سقفی با عایق حرارتی مناسب، مقاومت بالا و اجرای سریع هستید، ساندویچ پانل سقفی آسه می‌تواند انتخابی مطمئن باشد. کارشناسان آسه پانل آماده‌اند تا با بررسی نیاز پروژه، بهترین راهکار فنی را به شما پیشنهاد دهند.",
      },
      buttons: [
        { label: { en: "Get Price", fa: "دریافت قیمت" }, href: "/#contact", primary: true },
        { label: { en: "Technical Consultation", fa: "مشاوره تخصصی" }, href: "/#contact", primary: false },
      ],
    },
    certBadges: ["ISO 9001:2014", "BS EN 14509", "BS1D0", "HACCP Ready"],
  },
  {
    code: "ASP-WA",
    slug: "asp-wa",
    accent: "blue",
    image: "/images/P02.webp",
    thickness: "30–200mm",
    heroTagline: {
      en: "A lightweight, durable, and insulating prefabricated wall panel for modern industrial, commercial, and residential projects.",
      fa: "ساندویچ پانل دیواری آسه با هسته PIR / PUR و ساختار دو لایه فلزی، راهکاری مهندسی برای دیوارهای صنعتی، سردخانه‌ها، ساختمان‌های تجاری، مراکز بهداشتی و پروژه‌های معماری مدرن است.",
    },
    name: { en: "Wall Panels", fa: "پانل دیواری" },
    subtitle: {
      en: "A lightweight, durable and insulating choice for modern projects",
      fa: "انتخابی سبک، مقاوم و عایق برای پروژه‌های مدرن",
    },
    description: {
      en: "A prefabricated wall covering made of two metal sheet layers and a thermal insulation core. Designed to replace traditional masonry with faster installation, lower structural weight, and advanced energy performance.",
      fa: "پوشش ساختمانی پیش‌ساخته‌ای که از دو لایه ورق فلزی و یک هسته عایق حرارتی تشکیل می‌شود. طراحی‌شده برای جایگزینی روش‌های سنتی دیوارسازی با نصب سریع‌تر، کاهش وزن سازه و عملکرد انرژی پیشرفته.",
    },
    whatIsIt: {
      en: "Aseh wall panel is a prefabricated building cladding consisting of two metal sheet layers and a thermal insulation core. Depending on project requirements, PIR or PUR cores are used to achieve the right balance of insulation, strength, and durability. These panels are designed to replace traditional masonry in projects where speed of execution, reduced structural weight, and thermal performance matter.",
      fa: "ساندویچ پانل دیواری آسه یک پوشش ساختمانی پیش‌ساخته است که از دو لایه ورق فلزی و یک هسته عایق حرارتی تشکیل می‌شود. در این محصول، بسته به نیاز پروژه، از هسته‌های PIR یا PUR استفاده می‌شود تا تعادل مناسبی میان عایق‌کاری، استحکام و دوام ایجاد شود. این پانل‌ها برای جایگزینی روش‌های سنتی دیوارسازی طراحی شده‌اند و در پروژه‌هایی که سرعت اجرا، کاهش وزن سازه و عملکرد حرارتی اهمیت دارد، گزینه‌ای کارآمد محسوب می‌شوند.",
    },
    specs: [
      { label: "Thermal Conductivity", labelFa: "ضریب هدایت حرارتی", value: "λ = 0.022 W/m·K" },
      { label: "Thickness Range", labelFa: "محدوده ضخامت", value: "30–200mm" },
      { label: "Density", labelFa: "چگالی", value: "40 ± 2 kg/m³" },
      { label: "Core Type", labelFa: "نوع هسته", value: "PIR / PUR" },
      { label: "Face Sheet", labelFa: "جنس ورق", value: "Galvanised / Aluzinc / Aluminium" },
      { label: "Structure", labelFa: "ساختار", value: "Double metal sheet" },
    ],
    features: [
      {
        title: "Lightweight — Reduced Dead Load",
        titleFa: "وزن سبک و کاهش بار مرده",
        body: "The lightweight sandwich structure significantly reduces the dead load on the building frame, enabling smaller structural members and lower foundation costs.",
        bodyFa: "ساختار سبک ساندویچ بار مرده روی اسکلت ساختمان را به‌طور چشمگیری کاهش می‌دهد و امکان استفاده از المان‌های سازه‌ای کوچک‌تر و هزینه‌های پایین‌تر فونداسیون را فراهم می‌کند.",
      },
      {
        title: "Advanced Thermal Insulation",
        titleFa: "عایق‌بندی حرارتی پیشرفته",
        body: "Thermal conductivity of λ = 0.022 W/m·K delivers exceptional heat retention, reducing year-round energy consumption for heating and cooling.",
        bodyFa: "ضریب هدایت حرارتی λ = 0.022 W/m·K عایق‌بندی استثنایی ارائه می‌دهد و مصرف انرژی سالانه برای گرمایش و سرمایش را کاهش می‌دهد.",
      },
      {
        title: "Fast Installation",
        titleFa: "نصب سریع و کاهش زمان اجرا",
        body: "Prefabricated panels arrive ready to install, dramatically cutting on-site labour time and enabling faster project completion compared to traditional masonry.",
        bodyFa: "پانل‌های پیش‌ساخته آماده نصب هستند و زمان کار در محل را به‌طور چشمگیری کاهش می‌دهند و امکان اتمام سریع‌تر پروژه نسبت به دیوارسازی سنتی را فراهم می‌کنند.",
      },
      {
        title: "High Mechanical Strength",
        titleFa: "مقاومت مکانیکی بالا",
        body: "The composite metal-foam-metal structure delivers high rigidity and impact resistance, ensuring the wall maintains its integrity under demanding environmental and operational conditions.",
        bodyFa: "ساختار کامپوزیت فلز-فوم-فلز سختی و مقاومت در برابر ضربه بالایی ارائه می‌دهد و اطمینان می‌دهد که دیوار تحت شرایط محیطی و عملیاتی سخت یکپارچگی خود را حفظ کند.",
      },
      {
        title: "Environmental Protection",
        titleFa: "پوشش حفاظتی در برابر عوامل محیطی",
        body: "Galvanised, Aluzinc, or Aluminium face sheets provide a robust protective barrier against moisture, corrosion, UV exposure, and other environmental stressors.",
        bodyFa: "ورق‌های رویه گالوانیزه، آلوزینک یا آلومینیوم سد حفاظتی محکمی در برابر رطوبت، خوردگی، تابش UV و سایر عوامل محیطی فراهم می‌کنند.",
      },
      {
        title: "Versatile for Any Project Type",
        titleFa: "مناسب برای انواع پروژه",
        body: "From heavy industry to residential construction, these panels adapt to a wide range of project types and budgets, with two core options and multiple sheet grades available.",
        bodyFa: "از صنایع سنگین تا ساخت‌وساز مسکونی، این پانل‌ها با طیف گسترده‌ای از انواع و بودجه‌های پروژه سازگار می‌شوند و با دو گزینه هسته و درجات مختلف ورق در دسترس هستند.",
      },
    ],
    applications: {
      en: [
        "Industrial buildings",
        "Warehouses",
        "Cold storage facilities",
        "Residential buildings",
        "Office buildings",
        "Exhibition booths",
        "Temporary structures",
        "Healthcare & medical centres",
      ],
      fa: [
        "ساختمان‌های صنعتی",
        "انبارها",
        "سردخانه‌ها",
        "ساختمان‌های مسکونی",
        "ساختمان‌های اداری",
        "غرفه‌های نمایشگاهی",
        "سازه‌های موقت",
        "مراکز درمانی و بهداشتی",
      ],
    },
    coreComparison: {
      pur: {
        title: { en: "PUR Wall Panel", fa: "پانل دیواری PUR" },
        body: {
          en: "Polyurethane (PUR) foam strikes a good balance between lightweight construction, insulation, and strength, making it a reliable and economical choice for a broad range of general-purpose projects.",
          fa: "فوم پلی‌یورتان (PUR) تعادل خوبی میان سبک بودن، عایق‌کاری و استحکام ایجاد می‌کند و برای بسیاری از پروژه‌های عمومی گزینه‌ای اقتصادی و قابل اعتماد است.",
        },
      },
      pir: {
        title: { en: "PIR Wall Panel", fa: "پانل دیواری PIR" },
        body: {
          en: "Polyisocyanurate (PIR) foam delivers superior thermal resistance and better performance under critical conditions, making it the preferred choice for projects with higher safety and stability requirements.",
          fa: "فوم پلی‌ایزوسیانورات (PIR) عملکرد بهتری در مقاومت حرارتی و شرایط بحرانی دارد و برای پروژه‌هایی که حساسیت بیشتری به ایمنی و پایداری دارند، انتخاب مناسب‌تری است.",
        },
      },
      note: {
        en: "If your project requires stronger insulation and better heat resistance, PIR is the more advanced option. If the priority is good performance at a reasonable cost, PUR delivers.",
        fa: "اگر پروژه شما به عایق‌کاری قوی‌تر و عملکرد بهتر در برابر حرارت نیاز دارد، PIR گزینه پیشرفته‌تری است. اگر اولویت روی کارایی مناسب با هزینه منطقی باشد، PUR هم پاسخ‌گوست.",
      },
    },
    productVariants: [
      {
        code: "WAP",
        name: { en: "Standard Wall Panel", fa: "ساندویچ پانل دیواری استاندارد" },
        description: {
          en: "The standard model is designed for a wide range of projects, offering a combination of strength, thermal insulation, and easy installation.",
          fa: "مدل استاندارد برای طیف وسیعی از پروژه‌ها طراحی شده و ترکیبی از استحکام، عایق حرارتی و نصب آسان ارائه می‌دهد.",
        },
        applications: {
          en: ["Industrial walls", "Cold storage", "Healthcare centres", "Commercial buildings"],
          fa: ["دیوارهای صنعتی", "سردخانه‌ها", "مراکز بهداشتی", "ساختمان‌های تجاری"],
        },
      },
      {
        code: "SFP",
        name: { en: "Secret Fix Wall Panel", fa: "ساندویچ پانل دیواری پیچ مخفی" },
        description: {
          en: "In the secret fix model, screw positions are hidden beneath the overlap, resulting in a cleaner and more seamless final surface — ideal for projects with high aesthetic sensitivity.",
          fa: "در مدل پیچ مخفی، محل اتصال پیچ‌ها زیر اورلپ پنهان می‌شود؛ بنابراین سطح نهایی، نمایی یکپارچه‌تر و زیباتر دارد.",
        },
        applications: {
          en: ["Residential facades", "Hotels", "Shopping centres", "Office buildings", "Railway stations", "Modern architecture projects"],
          fa: ["نمای ساختمان‌های مسکونی", "هتل‌ها", "مراکز خرید", "ساختمان‌های اداری", "ایستگاه‌ها", "پروژه‌های معماری مدرن"],
        },
      },
    ],
    qualityNote: {
      en: "The final quality of a sandwich panel is not determined by the insulation core alone — the face and back metal sheets also play a major role in the product's durability and performance. Aseh wall panels use high-quality Galvanised, Aluzinc, or Aluminium sheets to increase resistance to environmental conditions and extend the product's service life.",
      fa: "کیفیت نهایی ساندویچ پانل فقط به هسته عایق وابسته نیست؛ ورق فلزی رویه و زیره نیز نقش مهمی در دوام و عملکرد محصول دارند. در ساندویچ پانل دیواری آسه از ورق‌های با کیفیت گالوانیزه، آلوزینک یا آلومینیوم استفاده می‌شود تا مقاومت در برابر شرایط محیطی افزایش پیدا کند و عمر مفید محصول بیشتر شود.",
    },
    whyBuy: {
      en: [
        "Products manufactured to match project requirements",
        "Focus on technical quality and durability",
        "Core variety: PIR / PUR",
        "Solutions for industrial, commercial, and building projects",
        "Suitable for walls requiring insulation, fast installation, and strength",
      ],
      fa: [
        "تولید محصول متناسب با نیاز پروژه",
        "تمرکز بر کیفیت فنی و دوام",
        "تنوع در هسته عایق: PIR / PUR",
        "ارائه راهکار برای پروژه‌های صنعتی، تجاری و ساختمانی",
        "مناسب برای دیوارهایی که به عایق‌کاری، سرعت نصب و استحکام نیاز دارند",
      ],
    },
    priceFactors: {
      en: ["Core type (PIR / PUR)", "Panel thickness", "Sheet grade and thickness", "Profile type", "Order volume", "Project location"],
      fa: ["نوع هسته عایق", "ضخامت پانل", "جنس و ضخامت ورق", "نوع پروفیل", "حجم سفارش", "محل پروژه"],
    },
    certBadges: ["ISO 9001:2014", "BS EN 14509", "PIR / PUR"],
  },
  {
    code: "ASP-SF",
    slug: "asp-sf",
    accent: "purple",
    image: "/images/P03.webp",
    thickness: "40–200mm",
    heroTagline: {
      en: "Architectural facade panels with hidden fixing system delivering seamless, premium surfaces.",
      fa: "پانل‌های نمای معماری با سیستم اتصال مخفی برای سطوح یکپارچه و ممتاز.",
    },
    name: { en: "Secret Fix Panels", fa: "پانل سکرت فیکس" },
    subtitle: { en: "Concealed fastener system", fa: "سیستم بست مخفی" },
    description: {
      en: "Architectural facade panels with hidden fixing system delivering seamless, premium surfaces for high-end commercial and hospitality projects.",
      fa: "پانل‌های نمای معماری با سیستم اتصال مخفی برای سطوح یکپارچه و ممتاز برای پروژه‌های تجاری و هتلداری.",
    },
    specs: [
      { label: "Fixing System", labelFa: "سیستم اتصال", value: "Concealed" },
      { label: "Surface Finish", labelFa: "پرداخت سطح", value: "Ultra-smooth" },
      { label: "Fire Rating", labelFa: "درجه مقاومت آتش", value: "BS1D0" },
      { label: "Thickness Range", labelFa: "محدوده ضخامت", value: "40–200mm" },
    ],
    features: [
      {
        title: "Zero Visible Fasteners",
        titleFa: "بدون پیچ و مهره ظاهری",
        body: "The concealed fixing system eliminates visible fasteners from the facade, producing a clean architectural finish that meets premium hotel and office building standards.",
        bodyFa: "سیستم اتصال مخفی پیچ و مهره‌های ظاهری را از نما حذف می‌کند و یک پرداخت معماری تمیز ایجاد می‌کند.",
      },
      {
        title: "Ultra-Smooth Surface",
        titleFa: "سطح فوق‌العاده صاف",
        body: "Ultra-smooth face sheet finish suitable for high-visibility architectural applications. Accepts a wide range of coatings including PVDF and Plastisol.",
        bodyFa: "پرداخت ورق رویه فوق‌العاده صاف برای کاربردهای معماری با دید بالا مناسب است.",
      },
    ],
    applications: {
      en: ["Hotel facades", "Shopping centres", "Office buildings", "Cultural institutions", "Premium residential"],
      fa: ["نماهای هتل", "مراکز خرید", "ساختمان‌های اداری", "مؤسسات فرهنگی", "مسکونی ممتاز"],
    },
    certBadges: ["ISO 9001:2014", "BS EN 14509", "BS1D0"],
  },
  {
    code: "ASP-CS",
    slug: "asp-cs",
    accent: "ice",
    image: "/images/P04.webp",
    thickness: "80–200mm",
    heroTagline: {
      en: "The only sandwich panel manufacturer with refrigeration industry expertise. Engineered for sub-zero cold rooms, above-zero storage, and blast freezing tunnels.",
      fa: "تنها تولیدکننده ساندویچ پانل با دانش فنی صنعت تبرید. طراحی اختصاصی برای سردخانه‌های زیر صفر، بالای صفر و تونل‌های انجماد با تضمین بالاترین راندمان حرارتی.",
    },
    name: { en: "Cold Storage Panels", fa: "پانل سردخانه‌ای" },
    subtitle: {
      en: "Thermal stability and energy cost reduction",
      fa: "پایداری دمایی و کاهش هزینه‌های انرژی",
    },
    description: {
      en: "In the refrigeration industry, a sandwich panel is not just a wall — it is the beating heart of the cold room. Our panels are manufactured with a maximum energy efficiency approach to keep your cold room temperature stable even in the harshest climatic conditions.",
      fa: "در صنعت تبرید، ساندویچ پانل فقط یک دیواره نیست؛ بلکه قلب تپنده سردخانه است. پانل‌های ما با رویکرد «بهره‌وری حداکثری انرژی» تولید می‌شوند تا دمای سردخانه شما حتی در سخت‌ترین شرایط اقلیمی ثابت بماند.",
    },
    whySpecialized: {
      en: "Poor insulation or air leakage at joints means extra pressure on the compressor, accelerated wear of refrigeration equipment, and astronomical electricity bills. At Aseh Panel, with 20 years of experience in the refrigeration industry, we know that even the smallest engineering error in panel selection means losing your investment and products.",
      fa: "ضعیف بودن عایق‌بندی یا نشت هوا در محل اتصالات، به معنای فشار مضاعف به کمپرسور، استهلاک تجهیزات برودتی و قبض‌های برق نجومی است. در آسه پانل، با سابقه ۲۰ ساله در صنعت تبرید، می‌دانیم که کوچک‌ترین خطای مهندسی در انتخاب پانل، یعنی از دست رفتن سرمایه و محصولات شما.",
    },
    specs: [
      { label: "Temperature Range", labelFa: "محدوده دما", value: "-40°C to +15°C" },
      { label: "Thickness Range", labelFa: "محدوده ضخامت", value: "80–200mm" },
      { label: "Effective Width", labelFa: "عرض مفید", value: "1000mm" },
      { label: "Edge System", labelFa: "سیستم لبه", value: "Tongue & Groove" },
      { label: "Core Type", labelFa: "نوع هسته", value: "PUR / PIR" },
      { label: "Face Sheet", labelFa: "نوع ورق", value: "Pre-painted Galvanised" },
      { label: "HACCP", labelFa: "HACCP", value: "Compliant" },
    ],
    features: [
      {
        title: "Unrivalled Thermal Insulation",
        titleFa: "عایق حرارتی بی‌رقیب",
        body: "High-density injected PUR or PIR core minimises the U-Value (heat transfer coefficient) to keep cold room temperatures stable under any climatic condition.",
        bodyFa: "استفاده از هسته تزریقی PUR یا PIR با دانسیته بالا که ضریب انتقال حرارت (U-Value) را به حداقل می‌رساند و دمای سردخانه را در هر شرایط اقلیمی ثابت نگه می‌دارد.",
      },
      {
        title: "Complete Air-Tight Seal (Gas-Tight)",
        titleFa: "هوابندی کامل (Gas-Tight)",
        body: "Precision-engineered Tongue and Groove (T&G) joint design prevents any exchange of warm outside air and cold inside air — eliminating energy waste at connections.",
        bodyFa: "طراحی فاق و زبانه (Tongue and Groove) مهندسی‌شده که مانع از هرگونه تبادل هوای گرم بیرون و سرد داخل می‌شود و هدررفت انرژی در محل اتصالات را حذف می‌کند.",
      },
      {
        title: "Fire Resistance",
        titleFa: "مقاومت بالا در برابر آتش",
        body: "PIR fire-resistance grade models available to protect industrial cold rooms against fire incidents and meet strict safety standards.",
        bodyFa: "ارائه مدل‌های PIR با گرید مقاومت حریق، جهت ایمن‌سازی سردخانه‌های صنعتی در برابر حوادث آتش‌سوزی و رعایت استانداردهای ایمنی سخت‌گیرانه.",
      },
      {
        title: "Long Core Lifespan",
        titleFa: "طول عمر بالای هسته",
        body: "No degradation in foam quality or thickness over years of operation — even in sub-zero cold rooms — ensuring consistent thermal performance throughout the panel's service life.",
        bodyFa: "عدم افت کیفیت و ضخامت فوم در طول سال‌ها بهره‌برداری، حتی در سردخانه‌های زیر صفر، که عملکرد حرارتی یکنواخت را در طول عمر مفید پانل تضمین می‌کند.",
      },
      {
        title: "Moisture & Corrosion Resistance",
        titleFa: "مقاومت در برابر رطوبت و خوردگی",
        body: "Galvanised sheets with specialist oven-baked coating prevent corrosion and rust in the high-humidity environment of cold storage facilities.",
        bodyFa: "ورق‌های گالوانیزه با پوشش رنگ کوره مخصوص که مانع از خوردگی و زنگ‌زدگی در محیط‌های پر رطوبت سردخانه می‌شود.",
      },
    ],
    applications: {
      en: [
        "Sub-zero cold storage warehouses",
        "Above-zero cold storage",
        "Blast freezing tunnels",
        "Food processing plants",
        "Pharmaceutical cold chain",
        "Ice cream & dairy factories",
        "Fish & meat processing",
        "Industrial refrigeration facilities",
      ],
      fa: [
        "سردخانه‌های زیر صفر",
        "سردخانه‌های بالای صفر",
        "تونل‌های انجماد",
        "کارخانه‌های فرآوری غذا",
        "زنجیره سرد دارویی",
        "کارخانه‌های بستنی و لبنیات",
        "پردازش ماهی و گوشت",
        "تأسیسات برودتی صنعتی",
      ],
    },
    ctaCustom: {
      title: {
        en: "Not sure which panel thickness is right for your cold room?",
        fa: "برای انتخاب ضخامت پانل سردخانه خود دچار تردید هستید؟",
      },
      body: {
        en: "Our engineers at Aseh Panel will recommend the optimum thickness based on your operating temperature (sub-zero / above-zero) and regional climate.",
        fa: "مهندسین ما در آسه پانل، بر اساس دمای کاری (زیر صفر / بالای صفر) و اقلیم منطقه شما، بهینه‌ترین ضخامت را پیشنهاد می‌دهند.",
      },
      buttons: [
        { label: { en: "Free Engineering Consultation", fa: "مشاوره رایگان با کارشناس فنی" }, href: "/#contact", primary: true },
        { label: { en: "Get Live Price List", fa: "دریافت لیست قیمت لحظه‌ای" }, href: "/#contact", primary: false },
      ],
    },
    faq: [
      {
        q: {
          en: "What panel thickness is recommended for sub-zero cold rooms?",
          fa: "برای سردخانه زیر صفر، چه ضخامتی از پانل مناسب است؟",
        },
        a: {
          en: "For sub-zero temperatures and blast freezing tunnels, thicknesses of 120 to 200mm are generally recommended to prevent energy loss. We recommend contacting our technical team for precise calculations.",
          fa: "معمولاً برای دمای زیر صفر و تونل‌های انجماد، ضخامت‌های ۱۲۰ تا ۲۰۰ میلی‌متر توصیه می‌شود تا از هدررفت انرژی جلوگیری شود. پیشنهاد می‌کنیم برای محاسبه دقیق، با واحد فنی ما تماس بگیرید.",
        },
      },
      {
        q: {
          en: "Does installation require specialist expertise?",
          fa: "آیا نصب پانل‌های شما به تخصص خاصی نیاز دارد؟",
        },
        a: {
          en: "Yes. Although Aseh Panel panels are easy to install, the final sealing in cold rooms is highly critical. We provide full technical installation guidelines to your execution team.",
          fa: "بله، هرچند پانل‌های آسه پانل نصب آسانی دارند، اما آب‌بندی نهایی در سردخانه‌ها بسیار حساس است. ما دستورالعمل‌های فنی نصب را به تیم اجرایی شما ارائه می‌دهیم.",
        },
      },
      {
        q: {
          en: "What is the difference between PIR and PUR?",
          fa: "تفاوت PIR و PUR در چیست؟",
        },
        a: {
          en: "The main difference is in fire resistance. PIR offers significantly higher fire resistance and is recommended for large industrial cold rooms with strict safety standards.",
          fa: "اصلی‌ترین تفاوت در مقاومت حرارتی است. PIR مقاومت بسیار بالاتری در برابر حریق دارد و برای سردخانه‌های بزرگ صنعتی که استانداردهای ایمنی سخت‌گیرانه‌ای دارند، پیشنهاد می‌شود.",
        },
      },
    ],
    certBadges: ["ISO 9001:2014", "HACCP", "BS EN 14509", "Gas-Tight T&G"],
  },
  {
    code: "ASP-CR",
    slug: "asp-cr",
    accent: "ice",
    image: "/images/P05.webp",
    thickness: "60–120mm",
    heroTagline: {
      en: "Zero-contamination panels for controlled pharmaceutical and semiconductor environments.",
      fa: "پانل‌های بدون آلودگی برای محیط‌های کنترل‌شده دارویی و نیمه‌هادی.",
    },
    name: { en: "Clean Room Panels", fa: "پانل کلین روم" },
    subtitle: { en: "Antibacterial seamless system", fa: "سیستم یکپارچه آنتی باکتریال" },
    description: {
      en: "Zero-contamination panels for controlled environments. Antibacterial surface, seamless joints, HACCP certified.",
      fa: "پانل‌های بدون آلودگی برای محیط‌های کنترل‌شده. سطح ضدباکتری، درزهای یکپارچه، گواهینامه HACCP.",
    },
    specs: [
      { label: "Surface Treatment", labelFa: "عملیات سطح", value: "Antibacterial" },
      { label: "Joint System", labelFa: "سیستم درز", value: "Seamless" },
      { label: "Grade", labelFa: "درجه", value: "Pharmaceutical" },
      { label: "Thickness Range", labelFa: "محدوده ضخامت", value: "50–150mm" },
    ],
    features: [
      {
        title: "Antibacterial Surface",
        titleFa: "سطح ضدباکتری",
        body: "Proprietary antibacterial coating inhibits microbial growth on panel surfaces — critical for pharmaceutical manufacturing and food processing clean rooms.",
        bodyFa: "پوشش ضدباکتری اختصاصی از رشد میکروبی روی سطوح پانل جلوگیری می‌کند.",
      },
      {
        title: "Seamless Joint Technology",
        titleFa: "فناوری درز یکپارچه",
        body: "Precision-engineered joint system creates a completely seamless interior surface with zero particle traps — meeting ISO Class 3 clean room requirements.",
        bodyFa: "سیستم درز مهندسی‌شده یک سطح داخلی کاملاً یکپارچه ایجاد می‌کند.",
      },
    ],
    applications: {
      en: ["Pharmaceutical plants", "Food factories", "Semiconductor fabs", "Biotechnology labs", "Hospital operating rooms", "Mushroom cultivation halls"],
      fa: ["کارخانه‌های دارویی", "کارخانه‌های غذایی", "کارخانه‌های نیمه‌هادی", "آزمایشگاه‌های بیوتکنولوژی", "اتاق‌های عمل بیمارستانی", "سالن‌های پرورش قارچ"],
    },
    certBadges: ["ISO 9001:2014", "HACCP", "Pharmaceutical Grade", "ISO Class 3"],
  },
];

export function getProduct(slug: string): ProductDetail | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
