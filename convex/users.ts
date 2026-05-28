// convex/users.ts

import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    passwordHash: v.string()
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("users", {
      ...args,
      role: "user",
      isVerified: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});