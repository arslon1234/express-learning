import { Router } from "express";

export const subscribtionRouter = Router()

subscribtionRouter.get('/', (req, res)=> res.send({title: "GET all subscribtion"}))
subscribtionRouter.get('/:id', (req, res)=> res.send({title: "GET subscribtion"}))
subscribtionRouter.post('/', (req, res)=> res.send({title: "CREATE subscribtion"}))
subscribtionRouter.put('/:id', (req, res)=> res.send({title: "UPDATE subscribtion"}))
subscribtionRouter.delete('/:id', (req, res)=> res.send({title: "DELETE subscribtion"}))
subscribtionRouter.get('/user/:id', (req, res)=> res.send({title: "GET user subscribtion"}))
subscribtionRouter.put('/:id/cancel', (req, res)=> res.send({title: "CANCEL subscribtion"}))
subscribtionRouter.put('/:id/cancel', (req, res)=> res.send({title: "CANCEL subscribtion"}))
subscribtionRouter.get('/upcoming-renewals', (req, res)=> res. send({title: "GET upcoming  renewals"}))