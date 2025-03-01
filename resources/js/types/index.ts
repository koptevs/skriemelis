import { LucideIcon } from 'lucide-react';

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
    type: string;
    category: string;
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

export interface Inspection {
    id: number;
    protocol_number: string;
    lift_id: string;
    inspection_type: string;
    inspection_next_type: string;
    expert: string;
    lift_manager: string;
    date_start: string;
    date_end: string;
    date_next: string;
    date_next_normal: string;
    label: string;
    bir_number: string;
    inspection_result: string;
    participants: string;
    non_compliances_0: string;
    non_compliances_1: string;
    non_compliances_2: string;
    non_compliances_3: string;
    extra_check_reason: string;
    not_checked_forced: string;
    notes: string;
    notes_for_protokol: string;
}

export interface LiftWithInspections {
    id: number;
    lift_manager_id: string;
    reg_number: string;
    bir_url: string;
    type: string;
    category: string;
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
