import React from "react";

import { Head, router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export default function Create() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched",
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("Values: ", data);
        // const JSONData = JSON.stringify(values);
        router.post(route("lifts.store"), data, {
            errorBag: "createLift",
        });
    }

    return (
        <div className="flex items-center justify-center">
            {/* {JSON.stringify(inertiaErrors)} */}
            {inertiaErrors && (
                <div>
                    <p>Inertia Errors</p>
                    <p className={"text-sm text-red-600 dark:text-red-400"}>
                        {JSON.stringify(inertiaErrors)}
                    </p>
                </div>
            )}
            {/* helperText={errors.regNumber?.message} */}
            <div className="mt-16 max-w-[500px] rounded-lg border p-4 pb-6 shadow-[0px_0px_20px_-2px_rgba(0,_0,_0,_0.1)]">
                <div className="flex items-center justify-center space-x-2 py-4 font-bold">
                    <Lock
                        size={16}
                        // color="#34756a"
                        // color="hsl(var(--destructive))"
                        strokeWidth={3}
                        className="inline text-orange-600"
                    />
                    <div>SKRIEMELIS (lift managers)</div>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            // placeholder="shadcn"
                                            {...field}
                                            autoComplete="username"
                                            className="min-w-[250px] sm:min-w-[400px]"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {/* Enter your name. */}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            // placeholder="shadcn"
                                            {...field}
                                            autoComplete="email"
                                            className="min-w-[250px] sm:min-w-[400px]"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {/* Enter your name. */}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            autoComplete="current-password"
                                            // placeholder="shadcn"
                                            {...field}
                                            className="min-w-[250px] sm:min-w-[400px]"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {/* Enter your password. */}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            {" "}
                            {/* disabled={!form.formState.isValid} */}
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
