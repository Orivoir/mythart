import { z } from "zod"
import { MIN_LENGTH, MAX_LENGTH } from "../constants/limits"
import { VALIDATION_ERRORS } from "../constants/validation-errors"

export const ChapterSchema = z.object({
    title: z
        .string({
            message: VALIDATION_ERRORS.CHAPTER_TITLE_REQUIRED,
        })
        .min(MIN_LENGTH.TITLE_CHAPTER, {
            message: VALIDATION_ERRORS.CHAPTER_TITLE_TOO_SHORT,
        })
        .max(MAX_LENGTH.TITLE_CHAPTER, {
            message: VALIDATION_ERRORS.CHAPTER_TITLE_TOO_LONG,
        }),
})

export type Chapter = z.infer<typeof ChapterSchema>;

/**
 * A chapter update may contain a new title, content, or both. When a title is
 * supplied, it follows the same constraints as chapter creation.
 */
export const UpdateChapterSchema = ChapterSchema.pick({ title: true })
    .partial()
    .extend({
        content: z.unknown().optional(),
    })

export type UpdateChapter = z.infer<typeof UpdateChapterSchema>
