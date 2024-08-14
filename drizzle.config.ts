import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schemas",
  out: "./src/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:password@localhost:5432/postgres",
  },
});
