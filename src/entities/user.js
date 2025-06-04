import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: "increment",
    },
    first_name: {
      type: "varchar",
    },
    last_name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
      unique: true
    },
    gender: {
      type: "varchar",
    },
    country: {
      type: "varchar",
    },
    // car_id: {
    //   type: "int",
    //   nullable: true,
    // },
  },
});
