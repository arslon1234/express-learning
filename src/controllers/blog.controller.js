
import { blogLists } from "../db/index.js";

export const blogController = {
   getAll(req,res,next){
    try{
        res.status(200).send({data: blogLists})
    }catch(err){
        next(err)
    }
   },
   create(req, res, next){
    try{
        const body = req.body
        let id = blogLists.length + 1
        const newBlog = {id, ...body}
        blogLists.push(newBlog)
        res.json(newBlog)
    }catch(err){
        next(err)
    }
   },
   delete(req, res, next) {
    try {
        const id = parseInt(req.params.id); 
        const initialLength = blogLists.length;
        blogLists = blogLists.filter((item) => item.id !== id);
        if (initialLength === blogLists.length) {
            return res.status(404).send("Blog topilmadi");
        }
        res.send("Successfully deleted!");
    } catch (err) {
        next(err);
    }
},
}