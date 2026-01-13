import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema } from "@shared/schema";
import type { InsertContactRequest } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const mutation = useCreateContact();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      serviceType: "kitchen",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactRequest) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-primary">أرسل طلبك الآن</h3>
        <p className="text-muted-foreground mt-2">سيتم إرسال طلبك إلى قسم المبيعات لدينا عبر نظام الإدارة الداخلي للتواصل معك</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم الكامل</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسمك هنا" className="bg-secondary/50 h-12 rounded-xl border-border/60 focus:bg-white transition-all" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رقم الجوال</FormLabel>
                  <FormControl>
                    <Input placeholder="05xxxxxxxx" className="bg-secondary/50 h-12 rounded-xl border-border/60 focus:bg-white transition-all" dir="ltr" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع الخدمة</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-secondary/50 h-12 rounded-xl border-border/60 focus:bg-white transition-all">
                        <SelectValue placeholder="اختر نوع الخدمة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="kitchen">تفصيل مطابخ</SelectItem>
                      <SelectItem value="installation">تركيب وصيانة</SelectItem>
                      <SelectItem value="window">شبابيك المنيوم</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الرسالة (اختياري)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="اكتب تفاصيل طلبك هنا..." 
                    className="bg-secondary/50 min-h-[120px] rounded-xl border-border/60 focus:bg-white transition-all resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full h-14 text-lg font-bold rounded-xl bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all hover:-translate-y-1"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                جاري الإرسال...
              </>
            ) : (
              <>
                إرسال الطلب
                <Send className="mr-2 h-5 w-5 rotate-180" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
