import { isValidPhoneNumber } from "react-phone-number-input";
import { boolean, string, z } from "zod";


export const FeedbackSchema = z.object({
    sender_name: string({
        required_error: "Заполните поле",
    }),
    sender_phone: string({
        required_error: "Заполните поле!"
    }).refine(isValidPhoneNumber, { message: "Неверный номер телефона" }),
    sender_email: string().email("Заполните поле!"),
    acceptTerms: boolean().default(false),
})