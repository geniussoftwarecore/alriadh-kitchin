import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ChefHat, Hammer, Wrench, LayoutGrid, CheckCircle2, Star, Trophy, Users } from "lucide-react";

export default function Home() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-tajawal overflow-x-hidden" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Unsplash kitchen image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop" 
            alt="Modern Kitchen Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center md:text-right pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 font-bold mb-6 backdrop-blur-sm">
              ✨ الجودة الأولى في الرياض
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              تفصيل مطابخ المنيوم <br />
              <span className="text-accent">بتصاميم عصرية</span> في الرياض
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              نحول مطبخ أحلامك إلى واقع بجودة لا تضاهى. تصاميم مبتكرة، خامات ممتازة، وضمان يدوم لسنوات.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToContact}
                className="h-14 px-8 text-lg font-bold rounded-full bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                احجز موعد استشارة مجانية
              </Button>
              <Button 
                variant="outline"
                className="h-14 px-8 text-lg font-bold rounded-full border-white/30 text-primary bg-white hover:bg-white/90 shadow-lg"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                اكتشف خدماتنا
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
            "تجربة رائعة مع البيت العربي، دقة في المواعيد وجودة ممتازة في التركيب."
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<ChefHat className="w-8 h-8" />}
              title="تفصيل مطابخ"
              description="تصاميم عصرية وكلاسيكية تناسب جميع الأذواق والمساحات، باستخدام أجود أنواع الألمنيوم والرخام."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Hammer className="w-8 h-8" />}
              title="تركيب احترافي"
              description="فريق متخصص لتركيب المطابخ بدقة عالية لضمان المتانة والشكل الجمالي المتكامل."
              delay={0.2}
            />
            <ServiceCard 
              icon={<Wrench className="w-8 h-8" />}
              title="صيانة وتجديد"
              description="خدمات صيانة شاملة للمطابخ القديمة، تغيير المفصلات، وتجديد المظهر بالكامل."
              delay={0.3}
            />
            <ServiceCard 
              icon={<LayoutGrid className="w-8 h-8" />}
              title="شبابيك المنيوم"
              description="تفصيل وتركيب شبابيك المنيوم عازلة للصوت والحرارة بتصاميم عصرية تناسب واجهة منزلك."
              delay={0.4}
            />
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
              <span className="text-accent font-bold tracking-wider mb-2 block">لماذا نحن؟</span>
              <h2 className="text-4xl font-bold text-primary mb-6">الخبرة والجودة تجتمعان تحت سقف واحد</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                نحن لا نقوم فقط بتركيب المطابخ، بل نصنع تجربة معيشية متكاملة. التزامنا بالجودة ورضا العملاء هو ما يميزنا عن غيرنا في السوق السعودي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Trophy, title: "15 سنة خبرة", desc: "سنوات من الإتقان والتميز في السوق" },
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
              { number: "15+", label: "سنوات خبرة" },
              { number: "760+", label: "مشروع منجز" },
              { number: "640+", label: "عميل سعيد" },
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
