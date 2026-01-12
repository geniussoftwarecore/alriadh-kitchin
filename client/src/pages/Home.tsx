import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ChefHat, Hammer, Wrench, LayoutGrid, CheckCircle2, Star, Trophy, Users, Shield, Lightbulb, Recycle, Clock, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Provided images mapping
import kitchenImg1 from "@assets/IMG-20251226-WA0041_1768063365671.jpg";
import kitchenImg2 from "@assets/IMG-20251226-WA0042(1)_1768063365672.jpg";
import kitchenImg3 from "@assets/IMG-20251226-WA0043_1768063365673.jpg";
import windowImg from "@assets/IMG-20251226-WA0044(1)_1768063365674.jpg";
import galleryImg1 from "@assets/IMG-20251226-WA0012_1768073924010.jpg";
import galleryImg2 from "@assets/IMG-20251226-WA0017_1768073936601.jpg";
import galleryImg3 from "@assets/IMG-20251226-WA0025_1768073950332.jpg";
import galleryImg4 from "@assets/IMG-20251226-WA0050_1768073975275.jpg";
import galleryImg5 from "@assets/333_1768077537150.jpeg";
import galleryImg6 from "@assets/444_1768077537151.jpeg";
import galleryImg7 from "@assets/888_1768077537152.jpeg";
import galleryImg8 from "@assets/iii_1768077537153.jpeg";
import galleryImg9 from "@assets/تصميم_بدون_عنوان_(4)_1768077609849.png";
import galleryImg10 from "@assets/تصميم_بدون_عنوان_(3)_1768077641647.png";
import galleryImg11 from "@assets/تصميم_بدون_عنوان_(2)_1768077641648.png";
import galleryImg12 from "@assets/تصميم_بدون_عنوان_(1)_1768077641649.png";
import galleryImg13 from "@assets/WhatsApp_Image_2026-01-10_at_11.38.37_PM_1768077730451.jpeg";

// New images
import bbbImg from "@assets/bbb_1768250009045.jpeg";
import cccImg from "@assets/ccc_1768250009046.jpeg";
import eeeImg from "@assets/eee_1768250009047.jpeg";
import hhhImg from "@assets/hhh_1768250009048.jpeg";
import kkkImg from "@assets/kkk_1768250009049.jpeg";
import kkkkImg from "@assets/kkkk_1768250009050.jpeg";
import llllImg from "@assets/llll_1768250009051.jpeg";
import ppppImg from "@assets/pppp_1768250009052.jpeg";
import qqqImg from "@assets/qqq_1768250009053.jpeg";
import ttttImg from "@assets/tttt_1768250009053.jpeg";
import vvvImg from "@assets/vvv_1768250009054.jpeg";
import wwwImg from "@assets/www_1768250009055.jpeg";
import xxxImg from "@assets/xxx_1768250009056.jpeg";
import zzzImg from "@assets/zzz_1768250009057.jpeg";

const allProjectImages = [
  bbbImg, cccImg, eeeImg, hhhImg,
  kkkImg, kkkkImg, llllImg, ppppImg,
  qqqImg, ttttImg, vvvImg, wwwImg,
  xxxImg, zzzImg,
  galleryImg5, galleryImg6, galleryImg7, galleryImg8,
  galleryImg9, galleryImg10, galleryImg11, galleryImg12,
  galleryImg13,
  galleryImg1, galleryImg2, galleryImg3, galleryImg4,
  kitchenImg1, kitchenImg2, kitchenImg3, windowImg
];

const serviceDetails = {
  kitchens: {
    title: "تفصيل مطابخ عصرية",
    description: "نصمم مطابخ تجمع بين الأناقة والوظيفة، مع التركيز على استغلال المساحات بأحدث التقنيات لعام 2026.",
    features: [
      "تصاميم بلمسات خشبية طبيعية ورخام فاخر",
      "أنظمة إضاءة ذكية مدمجة وتقنيات توفير المساحة",
      "خامات مقاومة للرطوبة والحرارة وسهلة التنظيف",
      "حلول تخزين مخفية وأدراج هيدروليكية متطورة"
    ],
    image: kitchenImg1
  },
  windows: {
    title: "شبابيك المنيوم عازلة",
    description: "أنظمة نوافذ متطورة توفر عزلًا فائقًا للصوت والحرارة مع لمسات جمالية عصرية.",
    features: [
      "ألمنيوم عالي الكثافة ومقاوم للصدمات والعوامل الجوية",
      "زجاج مزدوج (Double Glazing) لتقليل استهلاك الطاقة",
      "تصاميم نحيفة (Slim Frames) لزيادة الإضاءة الطبيعية",
      "أنظمة إغلاق محكمة للأمان التام ومنع تسرب الغبار"
    ],
    image: windowImg
  },
  maintenance: {
    title: "صيانة وتجديد شامل",
    description: "نعيد الحياة لمطبخك القديم عبر خدمات صيانة احترافية وتحديثات تجعل المساحة تبدو كأنها جديدة.",
    features: [
      "تغيير المفصلات والمقابض بأنواع عالمية الجودة",
      "صيانة أسطح الرخام وتلميعها واستبدال الأجزاء التالفة",
      "تحديث أنظمة الإضاءة وإضافة اكسسوارات ذكية",
      "فحص دوري وشامل لضمان سلامة جميع الوحدات"
    ],
    image: kitchenImg2
  },
  design: {
    title: "تصاميم معمارية خاصة",
    description: "خدمات هندسية وتصاميم معمارية مخصصة تحول رؤيتك إلى واقع ملموس بدقة هندسية عالية.",
    features: [
      "مخططات ثلاثية الأبعاد (3D) قبل البدء في التنفيذ",
      "تنسيق متكامل بين الإضاءة والديكور والوظيفة",
      "استشارات هندسية لاختيار أفضل الخامات والألوان",
      "إدارة شاملة للمشروع من التصميم حتى التسليم"
    ],
    image: kitchenImg3
  }
};

function ServiceDetailModal({ serviceKey, children }: { serviceKey: keyof typeof serviceDetails, children: React.ReactNode }) {
  const data = serviceDetails[serviceKey];
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] font-tajawal" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-2">{data.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-md border border-border">
            <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {data.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 rounded-xl text-lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            اطلب استشارة لهذا القسم
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-tajawal overflow-x-hidden" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Unsplash kitchen image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/20 z-0" />
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop" 
            alt="Modern Kitchen Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center md:text-right pt-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-white font-bold mb-8 shadow-xl shadow-accent/30"
            >
              <Star className="w-4 h-4 ml-2 fill-current" />
              الخيار الأول لتفصيل المطابخ في الرياض
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              نصمم <span className="text-accent underline decoration-white/20 underline-offset-8">مطبخ العمر</span> <br />
              بإتقان لا يضاهى
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-md">
              خبرة 16 عاماً في تحويل المساحات إلى تحف فنية. نجمع بين أحدث التقنيات الألمانية وأرقى التصاميم العصرية بضمان حقيقي.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="h-16 px-10 text-xl font-bold rounded-full bg-accent hover:bg-accent/90 shadow-2xl shadow-accent/40 hover:-translate-y-1 transition-all active:scale-95 group"
              >
                ابدأ مشروعك الآن
                <CheckCircle2 className="mr-2 h-6 w-6 transition-transform group-hover:rotate-12" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="h-16 px-10 text-xl font-bold rounded-full border-2 border-white/50 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all active:scale-95"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                تصفح أعمالنا
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Card (Desktop only) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute bottom-20 left-20 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white max-w-xs"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent rounded-full p-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-sm opacity-80">تقييم العملاء</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            "تجربة رائعة مع مصنع الرياض للمطابخ، دقة في المواعيد وجودة ممتازة في التركيب."
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">خدماتنا المتميزة</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">
              نقدم حلولاً متكاملة لتجهيز منزلك بأفضل المطابخ والنوافذ، مع التركيز على الجودة والتفاصيل الدقيقة.
            </p>
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <Button 
                variant="outline" 
                className="rounded-full border-primary/20 hover:bg-primary hover:text-white"
                onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
              >
                معرض الصور
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-primary/20 hover:bg-primary hover:text-white"
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              >
                من نحن
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceDetailModal serviceKey="kitchens">
              <div className="cursor-pointer">
                <ServiceCard 
                  icon={<ChefHat className="w-8 h-8" />}
                  title="تفصيل مطابخ"
                  description="تصاميم عصرية وكلاسيكية تناسب جميع الأذواق والمساحات، باستخدام أجود أنواع الألمنيوم والرخام."
                  delay={0.1}
                />
              </div>
            </ServiceDetailModal>
            <ServiceDetailModal serviceKey="design">
              <div className="cursor-pointer">
                <ServiceCard 
                  icon={<Hammer className="w-8 h-8" />}
                  title="تصميم مخصص"
                  description="نقدم حلولاً هندسية وتصاميم ثلاثية الأبعاد مبتكرة تحاكي تطلعاتكم وتلبي احتياجاتكم."
                  delay={0.2}
                />
              </div>
            </ServiceDetailModal>
            <ServiceDetailModal serviceKey="maintenance">
              <div className="cursor-pointer">
                <ServiceCard 
                  icon={<Wrench className="w-8 h-8" />}
                  title="صيانة وتجديد"
                  description="خدمات صيانة شاملة للمطابخ القديمة، تغيير المفصلات، وتجديد المظهر بالكامل."
                  delay={0.3}
                />
              </div>
            </ServiceDetailModal>
            <ServiceDetailModal serviceKey="windows">
              <div className="cursor-pointer">
                <ServiceCard 
                  icon={<LayoutGrid className="w-8 h-8" />}
                  title="شبابيك المنيوم"
                  description="تفصيل وتركيب شبابيك المنيوم عازلة للصوت والحرارة بتصاميم عصرية تناسب واجهة منزلك."
                  delay={0.4}
                />
              </div>
            </ServiceDetailModal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                {/* Unsplash kitchen craftsmanship image */}
                <img 
                  src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Work" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-wider mb-2 block">من نحن</span>
              <h2 className="text-4xl font-bold text-primary mb-6">الخبرة والجودة تجتمعان تحت سقف واحد</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                نحن لا نقوم فقط بتركيب المطابخ، بل نصنع تجربة معيشية متكاملة. التزامنا بالجودة ورضا العملاء هو ما يميزنا عن غيرنا في السوق السعودي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Trophy, title: "16 سنة خبرة", desc: "سنوات من الإتقان والتميز في السوق" },
                  { icon: Users, title: "فريق محترف", desc: "مهندسون وفنيون ذوي كفاءة عالية" },
                  { icon: CheckCircle2, title: "ضمان الجودة", desc: "ضمان شامل على جميع أعمالنا" },
                  { icon: Star, title: "سرعة التنفيذ", desc: "نلتزم بالمواعيد المحددة بدقة" },
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10 divide-x-reverse">
            {[
              { number: "16+", label: "سنوات خبرة" },
              { number: "527+", label: "مشروع منجز" },
              { number: "426+", label: "عميل سعيد" },
              { number: "100%", label: "ضمان جودة" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">معرض أعمالنا</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">تصفح مجموعة من مشاريعنا المنفذة بدقة وإتقان.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProjectImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <img src={img} alt={`Project ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] h-[90vh] flex items-center justify-center p-0 overflow-hidden bg-black/90">
                    <DialogTitle className="sr-only">Project Image {i}</DialogTitle>
                    <img src={img} alt={`Project ${i}`} className="max-w-full max-h-full object-contain" />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">تواصل معنا اليوم</h2>
              <p className="text-muted-foreground text-lg mb-10">
                جاهز لبدء مشروع مطبخك الجديد؟ أو لديك استفسار؟ فريقنا جاهز للرد على جميع تساؤلاتك وتقديم الاستشارة المناسبة.
              </p>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">موقعنا</h4>
                    <p className="text-muted-foreground">RENA8734, 8734 شارع عبد الملك العصامي, الرياض, 12872, SA</p>
                    <a 
                      href="https://google.com/maps/search/الصناعيه%20القديم/@24.640493392944336,46.75239944458008,17z?hl=en" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent text-sm font-semibold mt-2 inline-flex items-center gap-1"
                    >
                      عرض على الخريطة
                      <span className="text-lg">📍</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">اتصل بنا</h4>
                    <p className="text-muted-foreground mb-1">متواجدون يومياً من 8 صباحاً حتى 10 مساءً</p>
                    <a href="tel:0501755938" className="text-2xl font-bold text-primary hover:text-accent transition-colors dir-ltr block">
                      0501755938
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent shrink-0" />
                  <a href="mailto:alhmyqanykhtab30@gmail.com" className="text-lg font-bold text-primary hover:text-accent transition-colors break-all">
                    alhmyqanykhtab30@gmail.com
                  </a>
                </div>
              </div>

              {/* Map Embed Placeholder - Static Image for visual */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => window.open("https://google.com/maps/search/الصناعيه%20القديم/@24.640493392944336,46.75239944458008,17z?hl=en", "_blank")}
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
