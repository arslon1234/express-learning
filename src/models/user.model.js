import {Schema, model} from 'mongoose'

const userScheme =  new Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true
        },
        password: Number,
        phone: {
            type: String,
        },
        address: String
    },
    {
        timestamps: true
    }
)
export const User = model("User", userScheme)