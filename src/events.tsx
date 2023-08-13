import React from 'react';
import evilLotso from './assets/evil_lotso.png';
import sanrioGIF from './assets/2023_Odaiba_Sanrio_Photobooth.gif';
import tofu1 from './assets/tofu_1.png'
import gingerbread from './assets/christmas_2022_gingerbread_house.png'

interface ElioEvent {
    id: number; 
    title: string;
    date: string;
    location: string;
    img: string;
}

const elio_events: ElioEvent[] = [
    {
        id: 1, 
        title: "Gio asks out Elva",
        date: "6 November 2022",
        location: "Arlington, VA",
        img: 'none'
    }, 
    {
        id: 2, 
        title: "Elva moves",
        date: "April 2023", 
        location: "VA to NY",
        img: 'none'
    },
    {
        id: 3, 
        title: "Tofu Tofu Tofu",
        date: "May 2023", 
        location: "NY, NY",
        img: tofu1
    },
    {
        id: 4, 
        title: "Finding One Piece",
        date: "June 2023",
        location: "Japan",
        img: sanrioGIF
    },
    {
        id: 5, 
        title: "Otakon",
        date: "29 July 2023",
        location: "DC",
        img: evilLotso
    },
];

export default elio_events