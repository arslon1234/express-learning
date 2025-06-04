import { DataSource } from "typeorm";
import { User } from "./entities/user.js";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "arslon0220",
  database: "express_learning",
  synchronize: true, // Jadvalarni avto yaratish (faqat test uchun)
  logging: true, // SQL so‘rovlarini konsolga chiqarish
  entities: [User], // Entitylar ro‘yxati
  migrations: [],
  subscribers: [],
});
