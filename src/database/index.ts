import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(
  "postgres://postgres:password@localhost:5432/postgres"
);
export const db = drizzle(queryClient);
