import { Link, router } from '@inertiajs/react';
import dayjs from 'dayjs';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem, LiftWithInspections } from '@/types';
import { parseLiftWithInspections } from '@/lib/utils';
import AppLayout from '@/layouts/app-layout';
const Show = ({ lift }: { lift: LiftWithInspections }) => {
    const [parsedLift, allInspectionsNewestFirst, recentInspection] = parseLiftWithInspections(lift);
    const shortAddress = parsedLift.address
        .replace(/bulvāris/i, 'b.')
        .replace(/prospects/i, 'pr.')
        .replace(/gatve/i, 'g.')
        .replace(/Annas Meierovica/i, 'A.M.')
        .replace(/Annas Brigaderes/i, 'A. Brigaderes')
        .replace(/ iela/i, '');
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Lifts',
            href: '/lifts',
        },
        {
            title: `${shortAddress}`,
            href: '/lifts',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Show lift" />
            <div className="px-4 sm:px-6 lg:px-8">
                <br />
                <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>{parsedLift.regNumber}</h1>
                Code: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.entryCode}</span>
                <br />
                {/* Address: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.address}</span> */}
                Address: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{shortAddress}</span>
                <br />
                Year: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.installationYear} g.</span>
                <br />
                Factory number: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.factoryNumber}</span>
                <br />
                Load: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.load} kg.</span>
                <br />
                Speed: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.speed} m/s</span>
                <br />
                Floors: <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{parsedLift.floorsServiced}</span>
                <br />
                <br />
                {/* <pre>{JSON.stringify(parsedLift, null, 2)}</pre> */}
                {recentInspection && (
                    <>
                        <h5 className="mb-2" style={{ fontWeight: 600 }}>
                            Last Inspection Results
                        </h5>
                        <Link href={route('inspections.show', recentInspection.id)}>
                            <h6 style={{ fontWeight: 600 }}>{recentInspection.protocolNumber}</h6>
                        </Link>
                        <p>
                            Insp. start - <span style={{ fontWeight: 600 }}>{recentInspection.dateStart}</span>
                        </p>
                        <p>
                            Insp. Next - <span style={{ fontWeight: 600 }}>{recentInspection.dateNext}</span>
                        </p>
                        <p>
                            Insp. Next Type - <span style={{ fontWeight: 600 }}>{recentInspection.nextType}</span>{' '}
                        </p>
                    </>
                )}
                {recentInspection.nonCompliances1.length > 0 && (
                    <>
                        <p style={{ fontWeight: 600 }}>Neatbilsības 1: </p>
                        <ul style={{ fontSize: '14px', width: '100%' }}>
                            {recentInspection.nonCompliances1.map((value, index) => (
                                <li className="ml-2" key={index}>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {recentInspection.nonCompliances2.length > 0 && (
                    <>
                        <p style={{ fontWeight: 600 }}>Neatbilsības 2: </p>
                        <ul style={{ fontSize: '14px', width: '100%' }}>
                            {recentInspection.nonCompliances2.map((value, index) => (
                                <li className="ml-2" key={index}>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {recentInspection.nonCompliances3.length > 0 && (
                    <>
                        <p style={{ fontWeight: 600 }}>Neatbilsības 3: </p>
                        <ul style={{ fontSize: '14px', width: '100%' }}>
                            {recentInspection.nonCompliances3.map((value, index) => (
                                <li className="ml-2" key={index}>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <br />
                <a
                    // className="mt-2 inline-block rounded bg-purple-600 px-2 py-1 font-semibold text-white" href={parsedLift.birUrl} target="_blank">
                    href={parsedLift.birUrl}
                    className="mr-2 inline-block rounded-sm bg-purple-600 px-2 py-0.5 font-semibold text-gray-200 no-underline hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                >
                    {' '}
                    BIR
                </a>
                <Link
                    href={route('lifts.edit', lift.id)}
                    className="mr-2 inline-block rounded-sm bg-emerald-800 px-2 py-0.5 font-semibold text-gray-200 no-underline hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                >
                    Edit
                </Link>
                <Link
                    href={route('lifts.checklist', lift.id)}
                    className="mr-2 inline-block rounded-sm bg-fuchsia-800 px-2 py-0.5 font-semibold text-gray-200 no-underline hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                >
                    PL
                </Link>
                <div className="mt-4"></div>
                {/* <Link
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xl font-bold text-white"
                    onClick={() =>
                        router.delete(`/lifts/${lift.id}`, {
                            onBefore: () => confirm('Чем лифт тебе мешает? Точно удалить?'),
                        })
                    }
                >
                    Delete
                </Link> */}
            </div>
        </AppLayout>
    );
};

export default Show;
