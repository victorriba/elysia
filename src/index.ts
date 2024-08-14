import { Elysia } from "elysia";
import { db } from "./database";

const app = new Elysia().decorate("db", db);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
