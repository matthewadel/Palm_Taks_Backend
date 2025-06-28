import { z } from "zod";

const handleInsightsSchema = z.object({
    body: z
        .object({
            notes: z
                .string()
                .min(3, { message: "Notes must be at least 3 characters long" })
                .max(32, { message: "Notes must be at most 32 characters long" })
                .optional(),
            sleep: z.number({ required_error: "sleep hours is required" })
                .min(0, { message: "Sleep hours must be at least 0" })
                .max(12, { message: "Sleep hours must be at most 24" }),
            mood: z.number({ required_error: "Mood id is required" })
        })
        .strict()
});

export const insightsSchema = { handleInsightsSchema }