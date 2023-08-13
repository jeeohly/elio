import React from 'react';

interface ElioEvent {
    id: number; 
    title: string;
    date: string;
    location: string;
}

const elio_events: ElioEvent[] = [
    {
        id: 1, 
        title: "Gio asks out Elva",
        date: "6 November 2022",
        location: "Arlington, VA"
    }, 
    {
        id: 2, 
        title: "Elva moves",
        date: "April 2023", 
        location: "VA to NY"
    },
    {
        id: 3, 
        title: "Tofu Tofu Tofu",
        date: "May 2023", 
        location: "NY, NY"
    },
    {
        id: 4, 
        title: "Finding One Piece",
        date: "June 2023",
        location: "Japan",
    },
    {
        id: 5, 
        title: "Otakon",
        date: "29 July 2023",
        location: "DC",
    },
];

export default elio_events