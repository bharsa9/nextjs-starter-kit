import { z } from "zod";

export type userCreateProps = z.infer<typeof userCreateSchema>;
export type userUpdateProps = z.infer<typeof userUpdateSchema>;
export type BlogCreateProps = z.infer<typeof blogCreateSchema>;
export type CommentCreateProps = z.infer<typeof commentCreateSchema>;

const userCreateSchema = z.object({
  email: z.string().email({ message: "Invalid email" }).describe("user email"),
  first_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "First name must only contain letters" })
    .min(3, { message: "First name is required" })
    .describe("user first name"),
  last_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "Last name must only contain letters" })
    .min(3, { message: "Last name is required" })
    .describe("user last name"),
  profile_image_url: z
    .string()
    .url({ message: "Invalid URL" })
    .optional()
    .describe("user profile image URL"),
  user_id: z.string().describe("user ID"),
});

const userUpdateSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" })
    .nonempty({ message: "Email is required" })
    .describe("user email"),
  first_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "First name must only contain letters" })
    .describe("user first name"),
  last_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "Last name must only contain letters" })
    .describe("user last name"),
  profile_image_url: z
    .string()
    .url({ message: "Invalid URL" })
    .optional()
    .describe("user profile image URL"),
  user_id: z.string().describe("user ID"),
});

const blogCreateSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }).describe("blog title"),
  content: z.string().min(10, { message: "Content is required" }).describe("blog content"),
  category: z.string().describe("main category"),
  subcategory: z.string().describe("subcategory"),
  author_id: z.string().describe("author user ID"),
});

const commentCreateSchema = z.object({
  content: z.string().min(1, { message: "Comment cannot be empty" }).describe("comment content"),
  blog_id: z.string().describe("blog ID"),
  user_id: z.string().describe("user ID"),
  side: z.enum(["side1", "side2"]).describe("which side of the argument"),
});

export type UserRole = "admin" | "user" | "judge";

export type Blog = {
  id: string;
  title: string;
  content: string;
  category: string;
  subcategory: string;
  author_id: string;
  created_at: Date;
  updated_at: Date;
  side1_score: number;
  side2_score: number;
};

export type Comment = {
  id: string;
  content: string;
  blog_id: string;
  user_id: string;
  side: "side1" | "side2";
  created_at: Date;
  updated_at: Date;
  points: number;
};

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_image_url?: string;
  role: UserRole;
};
