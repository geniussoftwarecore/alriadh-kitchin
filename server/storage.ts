import { db } from "./db";
import {
  contactRequests,
  type InsertContactRequest,
  type ContactRequest
} from "@shared/schema";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getAllContactRequests(): Promise<ContactRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [newItem] = await db.insert(contactRequests).values(request).returning();
    return newItem;
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return await db.select().from(contactRequests).orderBy(contactRequests.createdAt);
  }
}

export const storage = new DatabaseStorage();
