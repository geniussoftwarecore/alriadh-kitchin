import { useQuery } from "@tanstack/react-query";
import { ContactRequest } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Loader2, Phone, Mail, MessageSquare, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Admin() {
  const { data: requests, isLoading } = useQuery<ContactRequest[]>({
    queryKey: ["/api/contact"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8 font-tajawal" dir="rtl">
      <div className="container mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-primary mb-2">لوحة إدارة الطلبات</h1>
          <p className="text-muted-foreground">عرض وإدارة طلبات التواصل الواردة من الموقع</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests?.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {request.serviceType === 'kitchen' ? 'تفصيل مطابخ' :
                     request.serviceType === 'window' ? 'شبابيك المنيوم' :
                     request.serviceType === 'maintenance' ? 'صيانة وتجديد' : 'أخرى'}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Clock className="w-3 h-3" />
                    {request.createdAt && format(new Date(request.createdAt), "d MMMM yyyy", { locale: ar })}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary">{request.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href={`tel:${request.phone}`} className="hover:text-accent transition-colors font-medium">
                    {request.phone}
                  </a>
                </div>
                {request.message && (
                  <div className="bg-secondary/30 p-4 rounded-xl relative">
                    <MessageSquare className="w-4 h-4 text-accent absolute top-3 right-3 opacity-20" />
                    <p className="text-sm leading-relaxed pr-6">{request.message}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          {requests?.length === 0 && (
            <div className="col-span-full text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed border-primary/10">
              <p className="text-muted-foreground text-lg">لا توجد طلبات تواصل حالياً</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}