import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  serviceType: text("service_type").notNull(), // 'kitchen', 'window', 'maintenance', 'other'
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).pick({
  name: true,
  phone: true,
  serviceType: true,
  message: true,
});

export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
