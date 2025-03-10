/* eslint-disable @typescript-eslint/no-unused-vars */
import { type BreadcrumbItem } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { format } from 'date-fns';
import { toast } from 'sonner';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
// import { toast } from '@/hooks/use-toast';
import { Check, ChevronsUpDown, CalendarIcon } from 'lucide-react';

import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Create({ liftManagers }: { liftManagers: { name: string; id: string }[] }) {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [openSelectManager, setOpenSelectManager] = React.useState(false);

    const formSchema = z.object({
        regNumber: z.string().regex(new RegExp(/^[0-9][C,c][L,l][0-9][0-9][0-9][0-9][0-9][0-9]$/), {
            message: 'regNumber is required and must look like 5CL223322',
        }),
        liftManager: z.coerce.number().min(1, {
            message: 'Field is required блин!',
        }),
        type: z.enum(['elektriskais', 'hidrauliskais'], {
            message: "Can be of value 'elektriskais' or 'hidrauliskais'",
        }),
        category: z.enum(['CE', '1', '2', '3'], {
            message: "Can be of value 'CE', '1', '2', '3'",
        }),
        factoryNumber: z.string(),
        model: z.string(),
        speed: z.coerce
            .number({
                message: 'Введите число, запятую замените на точку.',
            })
            .max(2),
        load: z.coerce.number(),
        manufacturer: z.string(),
        installer: z.string(),
        instYear: z.coerce.number().min(1930).max(2025),
        floorsServiced: z.coerce.number(),
        address: z.string(),
        addressCity: z.string(),
        addressCountry: z.string(),
        addressPostalCode: z.string(),
        buildingSeries: z.string(),
        birUrl: z.string(),
        googleCoordinates: z.string(),
        entryCode: z.string(),
        inspectionStatus: z.enum(['X', '0', '1', '2', '3'], {
            message: "Can be of value 'X', '0', '1', '2', '3'",
        }),
        nextInspectionDate: z.date(),
        notes: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onTouched',
        defaultValues: {
            regNumber: '5CL223322',
            factoryNumber: '',
            type: `elektriskais`,
            category: 'CE', //
            model: '',
            speed: 1.0,
            load: 320,
            manufacturer: '',
            installer: '',
            instYear: 2025,
            floorsServiced: 8,
            address: 'Varavīksnes gatve 14',
            addressCity: 'Rīga',
            addressCountry: 'Latvija',
            addressPostalCode: 'LV-1000',
            liftManager: 0,
            googleCoordinates: '',
            birUrl: '',
            buildingSeries: '',
            inspectionStatus: 'X',
            entryCode: '',
            nextInspectionDate: new Date(),
            notes: '',
        },
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    // const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => { //book
    async function onSubmit(data: z.infer<typeof formSchema>) {
        // data.nextInspectionDate = dayjs(data.nextInspectionDate).format('YYYY-MM-DD');
        toast(
            `Lift ${data.regNumber} has been created`,
            {
                description: `${dayjs(new Date()).format('DD MMMM YYYY ( dddd H:mm )')}`,
                action: {
                    label: 'Log data',
                    onClick: () => console.log(data),
                },
                // cancel: {
                //     label: 'Cancel',
                //     onClick: () => console.log('Cancel'),
                // },
            },
            // <pre className="mt-2 w-[340px] rounded-md bg-slate-900 p-4 text-xl">
            //     <p className="text-xs text-white">
            //         Lift added with {'\n'}Reg. number {data.regNumber}
            //         {JSON.stringify(data, null, 2)}
            //     </p>
            // </pre>
        );

        // toast(
        //         {
        //         title: 'You submitted the following values:',
        //         description: (
        //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //                 <code className="text-xs text-white">
        //                     {/* Lift added with {"\n"}Reg. number {data.regNumber} */}
        //                     {JSON.stringify(data, null, 2)}
        //                 </code>
        //             </pre>
        //         ),
        //     }
        // );

        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // const JSONData = JSON.stringify(values);
        router.post(route('lifts.store'), data, {
            errorBag: 'createLift',
        });
    }

    // Object.entries(liftManagers).forEach(([key,value]) => { console.log(key, value) }}   // Just example code

    const serviceCompanies = Object.entries(liftManagers).map(function (entry) {
        return {
            id: entry[0],
            label: `${entry[0]} - ${entry[1]}`,
        };
    });
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Lifts',
            href: '/lifts',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <pre>{JSON.stringify(liftManagers, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(serviceCompanies, null, 2)}</pre> */}
                {/* <div className="flex items-center justify-center"> */}
                {/* {JSON.stringify(typeof inertiaErrors)} */}
                {Object.keys(inertiaErrors).length !== 0 && (
                    <div>
                        <p>Inertia Errors</p>
                        <pre className={'text-sm text-red-600 dark:text-red-400'}>{JSON.stringify(inertiaErrors, null, 2)}</pre>
                    </div>
                )}
                {/* <div className="mt-16 max-w-[500px] rounded-lg border p-4 pb-6 shadow-[0px_0px_20px_-2px_rgba(0,_0,_0,_0.1)]"> */}
                {/* <div className="flex items-center justify-center space-x-2 py-4 font-bold">
                <Lock
                    size={16}
                    // color="#34756a"
                    // color="hsl(var(--destructive))"
                    strokeWidth={3}
                    className="inline text-orange-600"
                />
                <div>SKRIEMELIS</div>
            </div> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="mt-4 mb-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {/* Form field: regNumber */}
                            <FormField
                                control={form.control}
                                name="regNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[12px]">Reg. number</FormLabel>
                                        <FormControl>
                                            <Input
                                                // style={{ fontSize: '12px' }}
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="regNumber"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: liftManager */}
                            <FormField
                                control={form.control}
                                name="liftManager"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Lift Manager
                                            {/* Lift Manager{JSON.stringify(field)} */}
                                        </FormLabel>
                                        {/* ############################################### */}
                                        <Popover open={openSelectManager} onOpenChange={setOpenSelectManager}>
                                            {/* openSelectManager */}
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}
                                                    >
                                                        {field.value
                                                            ? serviceCompanies.find((serviceCompany) => parseInt(serviceCompany.id) === field.value)
                                                                  ?.label
                                                            : 'Select Lift Manager'}
                                                        <ChevronsUpDown className="opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                {/* <PopoverContent className="w-[200px] p-0"> */}
                                                <Command>
                                                    <CommandInput placeholder="Search framework..." className="h-9" />
                                                    <CommandList>
                                                        <CommandEmpty>No Lift Manager found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {serviceCompanies.map((serviceCompany) => (
                                                                <CommandItem
                                                                    value={serviceCompany.label}
                                                                    key={serviceCompany.id}
                                                                    onSelect={() => {
                                                                        form.setValue('liftManager', parseInt(serviceCompany.id));
                                                                        setOpenSelectManager(false);
                                                                    }}
                                                                >
                                                                    {serviceCompany.label}
                                                                    <Check
                                                                        className={cn(
                                                                            'ml-auto',
                                                                            parseInt(serviceCompany.id) === field.value ? 'opacity-100' : 'opacity-0',
                                                                        )}
                                                                    />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        {/* ############################################### */}
                                        {/* <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Lift manager" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {serviceCompanies.map(
                                                    function (serviceCompany) {
                                                        return (
                                                            <SelectItem
                                                                key={
                                                                    serviceCompany.id
                                                                }
                                                                value={
                                                                    serviceCompany.id
                                                                }
                                                            >
                                                                {
                                                                    serviceCompany.label
                                                                }
                                                            </SelectItem>
                                                        );
                                                    }
                                                )}
                                            </SelectContent>
                                        </Select> */}
                                        {/* ######################################### */}
                                        <FormDescription>
                                            {/* You can manage email addresses in your{" "} */}
                                            {/* <Link href="/examples/forms">
                                            email settings
                                        </Link>
                                        . */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: type */}
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={'elektriskais'}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Lift type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={'elektriskais'}>{'Elektriskais'}</SelectItem>
                                                <SelectItem value={'hidrauliskais'}>{'Hidrauliskais'}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {/* You can manage email addresses in your{" "} */}
                                            {/* <Link href="/examples/forms">
                                            email settings
                                        </Link>
                                        . */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: category */}
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift category</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={'CE'}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Lift category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={'CE'}>{'CE'}</SelectItem>
                                                <SelectItem value={'1'}>{'1'}</SelectItem>
                                                <SelectItem value={'2'}>{'2'}</SelectItem>
                                                <SelectItem value={'3'}>{'3'}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {/* You can manage email addresses in your{" "} */}
                                            {/* <Link href="/examples/forms">
                                            email settings
                                        </Link>
                                        . */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: factoryNumber */}
                            <FormField
                                control={form.control}
                                name="factoryNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Factory Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="May be empty"
                                                {...field}
                                                autoComplete="factoryNumber"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter your name. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: model */}
                            <FormField
                                control={form.control}
                                name="model"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift model</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="model"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: speed */}
                            <FormField
                                control={form.control}
                                name="speed"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift speed</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="speed"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: load */}
                            <FormField
                                control={form.control}
                                name="load"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift load</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="load"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: manufacturer */}
                            <FormField
                                control={form.control}
                                name="manufacturer"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift manufacturer</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="manufacturer"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: installer */}
                            <FormField
                                control={form.control}
                                name="installer"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift installer</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="installer"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: instYear */}
                            <FormField
                                control={form.control}
                                name="instYear"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift installation year</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="instYear"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: floorsServiced */}
                            <FormField
                                control={form.control}
                                name="floorsServiced"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift floors serviced</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="floorsServiced"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: address */}
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift address</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="address"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: addressCity */}
                            <FormField
                                control={form.control}
                                name="addressCity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift address City</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="addressCity"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: addressCountry */}
                            <FormField
                                control={form.control}
                                name="addressCountry"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift address Country</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="addressCountry"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: addressPostalCode */}
                            <FormField
                                control={form.control}
                                name="addressPostalCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift addressPostalCode</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="addressPostalCode"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: buildingSeries */}
                            <FormField
                                control={form.control}
                                name="buildingSeries"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift buildingSeries</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="buildingSeries"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter buildingSeries. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: birUrl */}
                            <FormField
                                control={form.control}
                                name="birUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift BIR Url</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="birUrl"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Form field: googleCoordinates */}
                            <FormField
                                control={form.control}
                                name="googleCoordinates"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Google Coordinates</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="googleCoordinates"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Form field: entryCode */}
                            <FormField
                                control={form.control}
                                name="entryCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift entryCode</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="entryCode"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Form field: inspectionStatus */}
                            <FormField
                                control={form.control}
                                name="inspectionStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift inspection status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={'CE'}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Lift inspection status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={'X'}>{'X'}</SelectItem>
                                                <SelectItem value={'0'}>{'0'}</SelectItem>
                                                <SelectItem value={'1'}>{'1'}</SelectItem>
                                                <SelectItem value={'2'}>{'2'}</SelectItem>
                                                <SelectItem value={'3'}>{'3'}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {/* You can manage email addresses in your{" "} */}
                                            {/* <Link href="/examples/forms">email settings</Link>. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
                            {/* Form field: nextInspectionDate */}
                            <FormField
                                control={form.control}
                                name="nextInspectionDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Next Inspection</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={'outline'}
                                                        className={cn(
                                                            'w-[240px] pl-3 text-left font-normal',
                                                            !field.value && 'text-muted-foreground',
                                                        )}
                                                    >
                                                        {/* {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>} */}
                                                        {field.value ? dayjs(field.value).format('DD.MM.YYYY') : <span>Pick a date</span>}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    // fixedWeeks
                                                    // showOutsideDays
                                                    captionLayout="label"
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    // disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        {/* <FormDescription>Your date of birth is used to calculate your age.</FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
                        </div>
                        {/* Form field: notes */}
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lift notes</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder="Tell us a little bit about yourself" className="resize-none" />
                                    </FormControl>
                                    <FormDescription>{/* Enter BIR reg. nr. */}</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            {' '}
                            {/* disabled={!form.formState.isValid} */}
                            Submit
                        </Button>
                    </form>
                    <DevTool control={control} />
                </Form>
            </div>
        </AppLayout>
    );
}
