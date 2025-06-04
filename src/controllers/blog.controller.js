
import { blogLists } from "../db/index.js";
import { Blog } from "../models/index.js";

export const blogController = {
   async getAll(req,res,next){
    try{
        const blogs = await Blog.find()
        console.log(blogs)
        res.status(200).json({ data: blogs });
    }catch(err){
        next(err)
    }
   },
   async create(req, res, next){
    try{
        const body = req.body
        const blog = await Blog.find({title: body.title})
        console.log(blog, 'blog')
        if(blog.length > 0){
            return res.status(403).send('Blog already exist')
        }
        const newBlog = new Blog({...body})
        await newBlog.save()
        res.status(201).send(newBlog)
    }catch(err){
        next(err)
    }
   },
   async delete(req, res, next) {
    try {
        const id = req.params.id
        console.log(id, 'id')
        const blog_id = Blog.findById({_id: id})
        if(!blog_id){
            return res.status(403).send('Blog not found in this ID')
        }
        await Blog.deleteOne({_id: id})
        res.send("Successfully deleted!");
    } catch (err) {
        next(err);
    }
},
}