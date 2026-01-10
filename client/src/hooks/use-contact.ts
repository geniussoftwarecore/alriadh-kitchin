import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "البيانات المدخلة غير صحيحة");
        }
        throw new Error("حدث خطأ أثناء إرسال الطلب");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "تم استلام طلبك بنجاح!",
        description: "سيتواصل معك فريقنا في أقرب وقت ممكن.",
        variant: "default",
        className: "bg-green-600 text-white border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "خطأ في الإرسال",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
