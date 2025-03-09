import { Lift, LiftWithInspections, ParsedInspection, ParsedLift } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function parseLift(lift: Lift): ParsedLift {
    const parsedLift: ParsedLift = {
        manager: lift.lift_manager_id,
        regNumber: lift.reg_number,
        birUrl: lift.bir_url,
        type: lift.type,
        category: lift.category,
        factoryNumber: lift.factory_number,
        model: lift.model,
        speed: lift.speed,
        load: lift.load,
        manufacturer: lift.manufacturer,
        installer: lift.installer,
        instYear: lift.installation_year,
        floorsServiced: lift.floors_serviced,
        addressCountry: lift.address_country,
        addressCity: lift.address_city,
        address: lift.address,
        addressPostalCode: lift.address_postal_code,
        googleCoordinates: lift.google_coordinates,
        buildingSeries: lift.building_series,
        notes: lift.notes,
        inspectionStatus: lift.inspection_status,
        entryCode: lift.entry_code,
        nextInspectionDate: dayjs(lift.next_inspection_date).format('DD.MM.YYYY'),
    };

    return parsedLift;
}
export function parseLiftWithInspections(
    liftWithInspections: LiftWithInspections,
): [parsedLift: ParsedLift, allInspectionsNewestFirst: ParsedInspection[], recentInspection: ParsedInspection] {
    const parsedLift: ParsedLift = {
        manager: liftWithInspections.lift_manager_id,
        regNumber: liftWithInspections.reg_number,
        birUrl: liftWithInspections.bir_url,
        type: liftWithInspections.type,
        category: liftWithInspections.category,
        factoryNumber: liftWithInspections.factory_number,
        model: liftWithInspections.model,
        speed: liftWithInspections.speed,
        load: liftWithInspections.load,
        manufacturer: liftWithInspections.manufacturer,
        installer: liftWithInspections.installer,
        instYear: liftWithInspections.installation_year,
        floorsServiced: liftWithInspections.floors_serviced,
        addressCountry: liftWithInspections.address_country,
        addressCity: liftWithInspections.address_city,
        address: liftWithInspections.address,
        addressPostalCode: liftWithInspections.address_postal_code,
        googleCoordinates: liftWithInspections.google_coordinates,
        buildingSeries: liftWithInspections.building_series,
        notes: liftWithInspections.notes,
        inspectionStatus: liftWithInspections.inspection_status,
        entryCode: liftWithInspections.entry_code,
        nextInspectionDate: dayjs(liftWithInspections.next_inspection_date).format('DD.MM.YYYY'),
    };

    const allInspectionsNewestFirst = liftWithInspections.inspections
        .sort((insp1, insp2) => dayjs(insp2.date_start).unix() - dayjs(insp1.date_start).unix())
        .map((inspection) => {
            return {
                id: inspection.id,
                protocolNumber: inspection.protocol_number,
                liftId: inspection.lift_id,
                result: inspection.inspection_result,
                type: inspection.inspection_type,
                expert: inspection.expert,
                manager: inspection.lift_manager,
                nextType: inspection.inspection_next_type,
                dateStart: dayjs(inspection.date_start).format('DD.MM.YYYY'),
                dateEnd: dayjs(inspection.date_end).format('DD.MM.YYYY'),
                dateNext: dayjs(inspection.date_next).format('DD.MM.YYYY'),
                dateNextNormal: dayjs(inspection.date_next_normal).format('DD.MM.YYYY'),
                label: inspection.label,
                birNumber: inspection.bir_number,
                participants: inspection.participants ? JSON.parse(inspection.participants) : null,
                nonCompliances0: inspection.non_compliances_0 ? JSON.parse(inspection.non_compliances_0) : null,
                nonCompliances1: inspection.non_compliances_1 ? JSON.parse(inspection.non_compliances_1) : null,
                nonCompliances2: inspection.non_compliances_2 ? JSON.parse(inspection.non_compliances_2) : null,
                nonCompliances3: inspection.non_compliances_3 ? JSON.parse(inspection.non_compliances_3) : null,
                extraCheckReason: inspection.extra_check_reason ? JSON.parse(inspection.extra_check_reason) : null,
                notCheckedForced: inspection.not_checked_forced ? JSON.parse(inspection.not_checked_forced) : null,
                notes: inspection.notes ? JSON.parse(inspection.notes) : null,
                notesForProtokol: inspection.notes_for_protokol ? JSON.parse(inspection.notes_for_protokol) : null,
            };
        });

    const recentInspection = allInspectionsNewestFirst[0];
    return [parsedLift, allInspectionsNewestFirst, recentInspection];
}
