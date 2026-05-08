import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body using the schema
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Store the message in the storage
      const message = await storage.createMessage(validatedData);
      
      // Return success response
      return res.status(201).json({
        message: "Message received successfully",
        data: message
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      
      // Handle validation errors
      if (error instanceof Error) {
        return res.status(400).json({
          message: "Invalid data provided",
          error: error.message
        });
      }
      
      // General error handling
      return res.status(500).json({
        message: "An unexpected error occurred",
      });
    }
  });

  // API route to get all messages (for admin purposes if needed)
  app.get("/api/messages", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getMessages();
      return res.status(200).json({
        messages
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
      return res.status(500).json({
        message: "An unexpected error occurred",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
