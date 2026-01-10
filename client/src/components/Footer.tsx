import logoUrl from "@assets/haron's_logo_1768065683367.png";
import { Phone, MapPin, Mail, Instagram, Twitter, Facebook, Video, MessageSquare } from "lucide-react";
import { SiTiktok, SiInstagram, SiSnapchat, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-20 pb-10 rounded-t-[3rem] mt-20 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src={logoUrl} 
              alt="Riyadh Kitchens Factory" 
              className="h-16 w-auto brightness-0 invert [mix-blend-mode:lighten]" 
            />
            <p className="text-gray-400 leading-relaxed text-lg">
              نحن في مصنع الرياض للمطابخ نقدم أفضل حلول المطابخ والألمنيوم في المملكة، بخبرة تمتد لأكثر من 15 عاماً من الإبداع والتميز.
            </p>
            <div className="flex gap-4">
              <a href="https://vm.tiktok.com/ZSHKt68gecydY-UQkPA/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiTiktok className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/reel/DTQWzWzjLuk/?igsh=MWV6b3EwdjlqMjZ4eA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.snapchat.com/add/mtbkhlrydlswdyh?share_id=2B-W8BsLJmY&locale=ar-EG" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiSnapchat className="w-5 h-5" />
              </a>
              <a href="https://x.com/alriadhfactory?s=11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">روابط سريعة</h4>
            <ul className="space-y-4">
              {['الرئيسية', 'خدماتنا', 'عن الشركة', 'معرض الأعمال', 'اتصل بنا'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:w-3 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">خدماتنا</h4>
            <ul className="space-y-4">
              {[
                { label: 'تفصيل مطابخ مودرن', id: '#services' },
                { label: 'مطابخ كلاسيك', id: '#services' },
                { label: 'شبابيك المنيوم', id: '#services' },
                { label: 'صيانة وتركيب', id: '#services' },
                { label: 'استشارات تصميم', id: '#services' }
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-right w-full flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:w-3 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">معلومات التواصل</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span className="text-gray-400">
                  RENA8734, 8734 شارع عبد الملك العصامي, الرياض, 12872, SA
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <a href="tel:0501755938" className="text-gray-400 hover:text-white dir-ltr">
                  0501755938
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <a href="mailto:alhmyqanykhtab30@gmail.com" className="text-gray-400 hover:text-white">
                  alhmyqanykhtab30@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} مصنع الرياض للمطابخ. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
