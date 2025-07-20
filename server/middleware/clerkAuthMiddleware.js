import ClerkExpressRequireAuth from "@clerk/clerk-sdk-node";

const clerkAuthMiddleware = ClerkExpressRequireAuth({
  apiKey: process.env.CLERK_API_KEY,
  apiVersion: 2,
  secretKey: process.env.CLERK_SECRET_KEY,
});

export default clerkAuthMiddleware;
