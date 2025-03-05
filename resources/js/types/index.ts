import { LucideIcon } from 'lucide-react';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export interface Lift {
    id: number;
    lift_manager_id: string;
    reg_number: string;
    bir_url: string;
    type: 'elektriskais' | 'hidrauliskais';
    category: '1' | '2' | '3' | 'CE';
    factory_number: string;
    model: string;
    speed: string;
    load: string;
    manufacturer: string;
    installer: string;
    installation_year: string;
    floors_serviced: string;
    address_country: string;
    address_city: string;
    address: string;
    address_postal_code: string;
    google_coordinates: string;
    building_series: string;
    notes: string;
    inspection_status: string;
    entry_code: string;
    next_inspection_date: string;
    created_at: string;
    updated_at: string;
}

export interface ParsedLift {
    manager: string;
    regNumber: string;
    birUrl: string;
    type: string;
    category: string;
    factoryNumber: string;
    model: string;
    speed: string;
    load: string;
    manufacturer: string;
    installer: string;
    installationYear: string;
    floorsServiced: string;
    addressCountry: string;
    addressCity: string;
    address: string;
    addressPostalCode: string;
    googleCoordinates: string;
    buildingSeries: string;
    notes: string;
    inspectionStatus: string;
    entryCode: string;
    nextInspectionDate: string;
}

export interface Inspection {
    id: number;
    protocol_number: string;
    lift_id: string | null;
    inspection_result: string | null;
    inspection_type: 'Pirmreizējā' | 'Kārtējā' | 'Ārpuskārtas' | 'Atkārtotā' | null;
    inspection_next_type: 'Pirmreizējā' | 'Kārtējā' | 'Ārpuskārtas' | 'Atkārtotā' | null;
    expert: string | null;
    lift_manager: string | null;
    date_start: string | null;
    date_end: string | null;
    date_next: string | null;
    date_next_normal: string | null;
    label: string | null;
    bir_number: string | null;
    participants: string | null;
    non_compliances_0: string | null;
    non_compliances_1: string | null;
    non_compliances_2: string | null;
    non_compliances_3: string | null;
    extra_check_reason: string | null;
    not_checked_forced: string | null;
    notes: string | null;
    notes_for_protokol: string | null;
}
export interface ParsedInspection {
    id: string;
    protocolNumber: string;
    liftId: string | null;
    result: string;
    type: string;
    nextType: string;
    expert: string;
    manager: string;
    dateStart: string;
    dateEnd: string;
    dateNext: string;
    dateNextNormal: string;
    label: string;
    birNumber: string;
    participants: string[];
    nonCompliances0: string[];
    nonCompliances1: string[];
    nonCompliances2: string[];
    nonCompliances3: string[];
    extraCheckReason: string[];
    notCheckedForced: string[];
    notes: string;
    notesForProtokol: string;
}
export interface LiftWithInspections extends Lift {
    inspections: Inspection[];
}
export interface Mechanic {
    id: number;
    name: string;
    personal_code: string;
    company: string;
    phone: string;
    email: string;
    notes: string;
    created_at: string;
    updated_at: string;
}
