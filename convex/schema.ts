// convex/schema.ts

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    image: v.optional(v.string()),
    role: v.union(
      v.literal("user"),
      v.literal("admin")
    ),
    bio: v.optional(v.string()),

    clerkId: v.optional(v.string()),

    isVerified: v.boolean(),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_clerkId", ["clerkId"]),
});