import jwt from "jsonwebtoken"
import { User } from '../models/index.js'
export const authContoller = {
   async signup(req,res,next){
        try{
            const body = req.body
            console.log(body.email, 'email')
            const userExists = await User.find({email: body.email})
            console.log(userExists, 'exist')
            if(userExists.length > 0){
                return res.status(403).send('user already exist!')
            }
            const newUser = new User({...body})
            await newUser.save()
            res.status(201).send(newUser)
        }catch(err){
            next(err)
        }
    },
    async signin(req,res,next){
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(404).send('User not found!')
            }
            if(user.password !== password){
                return res.status(400).send('Email or password is wrong')
            }
            const payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                sub: user._id,
                email: user.email,

            }
            const token = jwt.sign(payload, 'dasdadad231', {expiresIn: "1h"})
            res.send({data: {token}})

        }catch(err){
            next(err)
        }
    },
    async deleteUser(req,res,next){
        try{
            const id = req.params.id
            await User.deleteOne({_id: id})
            res.send("User deleted successfully")
        }catch(err){
            next(err)
        }
    },
    async profile(req,res,next){
        try{
            const id = req.query.id
            const user = await User.findById({_id: id})
            if(!user) return res.status(403).send('User not found');
            res.send({user})
        }catch(err){
            next(err)
        }
    },
    async getAll(req, res, next){
        try{
            const users = await User.find({}, "-password")
            res.status(200).json({ data: users });
        }catch(err){
            next(err)
        }
    },
    logout(req, res, next){
        try{
            res.send({message: "Logout successful"})
        }catch(err){
            next(err)
        }
    }
}