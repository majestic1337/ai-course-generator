import { defineConfig } from "drizzle-kit";
import { BaseEnvironment } from "./configs/BaseEnvironment";

const env = new BaseEnvironment();

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./schema/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:js2OXUq8pwuN@ep-little-salad-a5q8p87p.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
