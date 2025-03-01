import { Mechanic } from '@/types';
import React from 'react';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

const Index = ({ mechanics }: { mechanics: Mechanic[] }) => {
    return (
        <AuthenticatedLayout header={<h2 className="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-200">Mechanic Index</h2>}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        </AuthenticatedLayout>
    );
};

export default Index;
