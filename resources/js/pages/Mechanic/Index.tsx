import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Mechanic } from '@/types';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Mechanics',
        href: '/mechanics',
    },
];

const Index = ({ mechanics }: { mechanics: Mechanic[] }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Mechanics" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
                    {mechanics.map((mech) => {
                        return (
                            <div key={mech.id} className="mb-2">
                                <h2 className="font-semibold">{mech.name}</h2>
                                <p className="text-xs font-bold">{mech.company}</p>
                                <p>{mech.phone}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
};

export default Index;
