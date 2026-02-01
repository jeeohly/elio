import React from 'react';
import evilLotso from './assets/evil_lotso.png';
import sanrioGIF from './assets/2023_Odaiba_Sanrio_Photobooth.gif';
import tofu1 from './assets/tofu_1.png'
import terraria1 from './assets/08-18-23_terraria.png';
import pumpkins from './assets/pumpkins_2023.png';
import tofuCabin from './assets/tofu_fireplace.jpg';
import balthazar from './assets/balthazar.jpg';
import griffith from './assets/griffith.jpg';
import olga from './assets/olga.jpg';
import pumpkins2 from './assets/pumpkins_2024.png';
import year2 from './assets/2year.jpg';
import stmarks26 from './assets/01-16-26-st_marks.png';
import faoschwarz24 from './assets/12-22-24-faoschwarz.jpg';
import busan25 from './assets/busan25.jpg';
import busan25_2 from './assets/busan25-2.jpg';
import chriswedding from './assets/chriswedding.jpg';
import budakan25 from './assets/budakan25.jpg';
import konban25 from './assets/konban25.jpg';
import italian25 from './assets/randoitalian25.jpg';
import pumpkins3 from './assets/pumpkins_2025.jpg';


interface ElioEvent {
    id: number; 
    title: string;
    date: string;
    location: string;
    img: string | string[];
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
        title: "Elva moves 😢",
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
    {
        id: 6, 
        title: "Defeated Eye Monster",
        date: "18 August 2023",
        location: "Terraria",
        img: terraria1,
    },
    {
        id: 7, 
        title: "Cox farms pumpkins (-.-)",
        date: "14 October 2023",
        location: "west virginia", 
        img: pumpkins,
    },
    {
      id: 8, 
      title: "Cabin Trip",
      date: "17 December 2024",
      location: "somewhere in NY",
      img: tofuCabin,
    },
    {
      id: 9, 
      title: "Snow storm and Balthazar",
      date: "13 February 2024",
      location: "soho",
      img: balthazar,
    },
    {
      id: 10, 
      title: "LA offroad descent",
      date: "25 May 2024",
      location: "LA peak",
      img: griffith,
    },
    {
      id: 11, 
      title: "Olga Wedding",
      date: "30 May 2024",
      location: "Somewhere in NJ",
      img: olga,
    },
    {
      id: 12, 
      title: "Cox farms pumpkins (-.-) 2",
      date: "05 October 2024",
      location: "west virginia", 
      img: pumpkins2,
    },
    {
      id: 13, 
      title: "2 years but little early",
      date: "29 October 2024",
      location: "chelsea", 
      img: year2,
    },
    {
      id: 14, 
      title: "Chris wedding",
      date: "November 2024",
      location: "baltimore", 
      img: chriswedding,
    },
    {
      id: 15, 
      title: "waiting in line for faoschwarz",
      date: "22 December 2024",
      location: "midtown", 
      img: faoschwarz24,
    },
    {
      id: 16, 
      title: "Korea",
      date: "March 2025",
      location: "Korea", 
      img: [busan25, busan25_2],
    },
    {
      id: 17, 
      title: "italian food",
      date: "05 May 2025",
      location: "chelsea", 
      img: italian25,
    },
    {
      id: 18, 
      title: "konban 2nd time",
      date: "11 June 2025",
      location: "chelsea", 
      img: konban25,
    },
    {
      id: 19, 
      title: "Cox farms pumpkins (-.-) 3",
      date: "05 October 2025",
      location: "virginia", 
      img: pumpkins3,
    },
    {
      id: 20, 
      title: "3 years huzzah 🪇",
      date: "29 October 2025",
      location: "chelsea", 
      img: budakan25,
    },
    {
      id: 21, 
      title: "we had pho this day",
      date: "16 January 2026",
      location: "st marks", 
      img: stmarks26,
    },
];

export default elio_events
