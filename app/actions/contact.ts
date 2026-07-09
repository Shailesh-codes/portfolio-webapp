"use server";

import { supabase } from "@/lib/supabase";

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export async function submitContactAction(input: ContactInput) {
  try {
    const { name, email, message } = input;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.warn("Supabase URL is not configured. Simulating successful submit.");
      return { success: true, simulated: true };
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          message,
          status: "unread",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Submit contact action exception:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

export async function getContactsAction(password: string) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123"; // Fallback/default for easy setup

    if (password !== adminPassword) {
      return { success: false, error: "Unauthorized: Invalid password" };
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      // Mock data if Supabase is not configured yet, to let the user preview the UI!
      return {
        success: true,
        simulated: true,
        data: [
          {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            message: "Hey Shailesh, I love your portfolio! Let's collaborate on a Next.js project. I need a developer who understands robust backend APIs and gorgeous glassmorphism designs.",
            created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
            status: "unread",
          },
          {
            id: "2",
            name: "Jane Smith",
            email: "jane.design@gmail.com",
            message: "Hello! Checked your certificates, they look amazing. Do you have availability for full-time remote contracts starting next month?",
            created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
            status: "read",
          },
          {
            id: "3",
            name: "Alex Johnson",
            email: "alex@startup.io",
            message: "Hey Shailesh! Can you help us debug a Supabase RLS issue and migrate our db? Let me know your rates.",
            created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
            status: "replied",
          }
        ],
      };
    }

    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Get contacts action exception:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

export async function updateContactStatusAction(id: string, status: string, password?: string) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== adminPassword) {
      return { success: false, error: "Unauthorized" };
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return { success: true, simulated: true };
    }

    const { data, error } = await supabase
      .from("contacts")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Update status action exception:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

export async function deleteContactAction(id: string, password?: string) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== adminPassword) {
      return { success: false, error: "Unauthorized" };
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return { success: true, simulated: true };
    }

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase delete error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Delete contact action exception:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
