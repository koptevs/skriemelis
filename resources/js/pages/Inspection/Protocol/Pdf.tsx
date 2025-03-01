import React from 'react';
import type { Lift } from '@/types';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import PdfHeader from './Partials/PdfHeader';
import PdfProtokolsNr from './Partials/PdfProtokolsNr';
import Rekviziti from './Partials/Rekviziti';
import RegistracijasNumurs from './Partials/RegistracijasNumurs';
import ParbaudesVeids from './Partials/ParbaudesVeids';
import Normativi from './Partials/Normativi';
import ParbaudesRezultati from './Partials/ParbaudesRezultati';
import ZinasParLiftu from './Partials/ZinasParLiftu';
import LiftaTips from './Partials/LiftaTips';
import Celtspeja from './Partials/Celtspeja';
import Vertejumi from './Partials/Vertejumi';
import Novertejums from './Partials/Novertejums';
import NeatbilstibuApraksti from './Partials/NeatbilstibuApraksti';
import Sledziens from './Partials/Sledziens';
import NakosaParbaude from './Partials/NakosaParbaude';
import IekartaMarketa from './Partials/IekartaMarketa';
import ArParbaudesRezult from './Partials/ArParbaudesRezult';
import Footer from './Partials/Footer';
import SecondPageHeader from './Partials/SecondPageHeader';
import { sizes } from './variables';
import SecondPageTable from './Partials/SecondPageTable';
import SecondPageFooter from './Partials/SecondPageFooter';

const { pagePaddingLeft, pagePaddingRight } = sizes;
// Create styles
const styles = StyleSheet.create({
    page: {
        paddingTop: '10mm',
        paddingBottom: '10mm',
        paddingRight: pagePaddingRight,
        paddingLeft: pagePaddingLeft,
    },
});

// Create Document Component
export default function ({ inspection, lift, lift_manager, mechanic }: { inspection: any; lift: Lift[]; lift_manager: any; mechanic: any }) {
    const { reg_number: regNr, factory_number: factoryNr } = lift[0];
    const {
        protocol_number: protocolNumber,
        inspection_type: inspectionType,
        inspection_next_type: inspection_next_type,
        expert: expert,
        date_start: dateStart,
        date_end: dateEnd,
        date_next: date_next,
        date_next_normal: date_next_normal,
        label: label,
        bir_number: bir_number,
        inspection_result: inspection_result,
        participants: participants,
        non_compliances_0: non_compliances_0,
        non_compliances_1: non_compliances_1,
        non_compliances_2: non_compliances_2,
        non_compliances_3: non_compliances_3,
        extra_check_reason: extra_check_reason,
        not_checked_forced: not_checked_forced,
        notes: notes,
        notes_for_protokol: notes_for_protokol,
    } = inspection;

    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <SecondPageHeader protocolNumber={protocolNumber} />
                    <SecondPageTable />
                    <SecondPageFooter dateStart={dateStart} dateEnd={dateEnd} />
                </Page>
                <Page size="A4" style={styles.page}>
                    {/* <Text>{JSON.stringify(regNr)}</Text> */}
                    {/* <Text>{JSON.stringify(inspection)}</Text> */}
                    {/*<Text>{JSON.stringify(inspectionType)}</Text>*/}
                    {/*<Text>{inspectionType}</Text>*/}
                    <PdfHeader />
                    <PdfProtokolsNr protocolNumber={protocolNumber} />
                    <Rekviziti />
                    <RegistracijasNumurs />
                    <ParbaudesVeids inspectionType={inspectionType} />
                    <Normativi />
                    <ZinasParLiftu regNr={regNr} factoryNr={factoryNr} />
                    <LiftaTips />
                    <Celtspeja />
                    {/* <div style={{ height: "20px" }}></div> */}
                    <ParbaudesRezultati />
                    <Vertejumi />
                    <Novertejums />
                    <NeatbilstibuApraksti />
                    <Sledziens />
                    <NakosaParbaude dateStart={dateStart} dateEnd={dateEnd} />
                    <IekartaMarketa />
                    <ArParbaudesRezult dateStart={dateStart} dateEnd={dateEnd} />
                    <Footer />
                </Page>
            </Document>
        </PDFViewer>
    );
}
