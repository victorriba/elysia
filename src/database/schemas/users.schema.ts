import { integer, numeric, pgTable, varchar } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 50 }).unique(),
});

export const users = pgTable("users", {
  id: varchar("id", { length: 256 }).primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).unique(),
  roleId: varchar("role_id", { length: 256 }).references(() => roles.id),
  credit: numeric("credit"),
});
