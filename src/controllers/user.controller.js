import { AppDataSource } from "../data-source.js"
export const userController = {
    async getAll(req, res, next){
        try{
            const userRepository = AppDataSource.getRepository('User')
            const users = await userRepository.find()
            res.send({data: users})
        }catch(err){
            next(err)
        }
    },
    async create(req,res, next){
        try{
            const { email } = req.body
            const userRepository = AppDataSource.getRepository('User')
            const userExist = await userRepository.findOne({where: {email}})
            if(userExist){
                return res.status(400).send({ message: "Email already in use" })
            }
            const savedUser = await userRepository.save(req.body)
            res.status(201).send({data: savedUser})
        }catch(err){
            next(err)
        }
    }
}