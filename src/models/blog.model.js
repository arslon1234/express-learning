import { Schema, model } from "mongoose";

const blogSchema = new Schema(
   {
    title: {
        type: String,
        unique: true
    },
    content: String
   }
)
export const Blog = model('Blog', blogSchema)