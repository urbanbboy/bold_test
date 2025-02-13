"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { PhoneInput } from "@/components/ui/phone-input";
import ruLabels from "react-phone-number-input/locale/ru.json";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { FeedbackSchema } from "./schema";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LinkButtonWithIcon } from "@/components/atoms/link-button-with-icon";
import { toast } from "sonner";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";


export const FeedbackForm = () => {
    const [openTerms, setOpenTerms] = useState(false)

    const showTerms = () => {
        setOpenTerms(prev => !prev)
    }

    const form = useForm<z.infer<typeof FeedbackSchema>>({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            sender_name: '',
            sender_phone: '',
            sender_email: '',
            acceptTerms: false,
        }
    })

    const onSubmit = (data: z.infer<typeof FeedbackSchema>) => {
        console.log(data)
        toast.success('Успешно отправлено')
    }

    return (
        <Card className="bg-[#18181A] border-none md:p-8 rounded-3xl">
            <CardHeader className="font-bold text-white text-xl md:text-3xl">
                Заполните форму и получите предложение
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-5">
                            <FormField
                                control={form.control}
                                name="sender_name"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start">
                                        <FormLabel className="text-left text-slate-400">Имя</FormLabel>
                                        <FormControl className="w-full">
                                            <Input
                                                {...field}
                                                type="name"
                                                placeholder="Иван Иванов Иванович"
                                                className="border-b-2 bg-transparent"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sender_phone"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start">
                                        <FormLabel className="text-left text-slate-400">Номер телефона</FormLabel>
                                        <FormControl className="w-full">
                                            <PhoneInput
                                                defaultCountry="KG"
                                                international
                                                limitMaxLength
                                                countryCallingCodeEditable={false}
                                                labels={ruLabels}
                                                placeholder="Введите номер телефона"
                                                className="border-b-2"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sender_email"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start">
                                        <FormLabel className="text-left text-slate-400">Электронная почта</FormLabel>
                                        <FormControl className="w-full">
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="Введите электронную почту"
                                                className="border-b-2 bg-transparent"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col xl:flex-row pt-5 gap-5">
                                <FormField
                                    control={form.control}
                                    name="acceptTerms"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-white">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel className="text-sm md:text-md leading-6">
                                                    Я согласен на обработку моих данных в соответствии с{' '}
                                                    <span
                                                        onClick={showTerms}
                                                        className="text-rose-500 underline hover:cursor-pointer"
                                                    >
                                                        политикой конфиденциальности
                                                    </span>
                                                </FormLabel>
                                                <Dialog open={openTerms} onOpenChange={setOpenTerms}>
                                                    <DialogContent>
                                                        <DialogTitle>
                                                            Скибиди Доп Доп Доп
                                                        </DialogTitle>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <LinkButtonWithIcon
                                    type="submit"
                                >
                                    Отправить
                                </LinkButtonWithIcon>
                            </div>

                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
