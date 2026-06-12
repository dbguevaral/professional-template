import { z } from "zod";

export const registrationSchema = z.object({
    // Account Step
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),

    // Parent Step
    parentFirstName: z.string().min(2, "Name is too short"),
    parentLastName: z.string().min(2, "Last name is too short"),
    childName: z.string().min(2, "Child's name is required"),
    childAge: z.number().min(1, "Child's age is required")
});

export type RegistrationData = z.infer<typeof registrationSchema>;