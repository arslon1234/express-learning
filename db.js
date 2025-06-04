import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',  // O‘z foydalanuvchi nomingiz bilan almashtiring
  host: 'localhost',           // Agar bulutli xizmat bo‘lsa, hostni o‘zgartiring
  database: 'learn',            // Yaratgan bazangiz nomi
  password: 'arslon0220',      // Parolingizni kiriting
  port: 5432,                  // PostgreSQL standart porti
});

export default pool;