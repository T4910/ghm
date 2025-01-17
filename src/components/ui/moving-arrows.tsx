"use client"
import { motion } from "motion/react";

export function MovingArrows () {
  // Animation variants for the arrows\
    const Svg1 = () => (
        <svg viewBox="0 0 83 25" id="svg9806410366">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg2 = () => (
        <svg viewBox="0 0 83 25" id="svg12395467827">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg3 = () => (
        <svg viewBox="0 0 83 25" id="svg9324296673">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg4 = () => (
        <svg viewBox="0 0 83 25" id="svg8670437130">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg5 = () => (
        <svg viewBox="0 0 83 25" id="svg12012092793">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg6 = () => (
        <svg viewBox="0 0 83 25" id="svg10577388505">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg7 = () => (
        <svg viewBox="0 0 83 25" id="svg8731017316">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg8 = () => (
        <svg viewBox="0 0 83 25" id="svg8708120772">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg9 = () => (
        <svg viewBox="0 0 83 25" id="svg10680102227">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg10 = () => (
        <svg viewBox="0 0 83 25" id="svg11908582934">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
        </svg>
    );

    const Svg11 = () => (
        <svg viewBox="0 0 83 25" id="svg10933151117">
            <path d="M 6 0 L 1 0 L 1 3 L 9.5 11.5 L 9.5 13 L 1 21 L 1 25 L 6 25 L 15.5 15 L 15.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 19.5 0 L 14.5 0 L 14.5 3 L 23 11.5 L 23 13 L 14.5 21 L 14.5 25 L 19.5 25 L 29 15 L 29 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 33 0 L 28 0 L 28 3 L 36.5 11.5 L 36.5 13 L 28 21 L 28 25 L 33 25 L 42.5 15 L 42.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 46.5 0 L 41.5 0 L 41.5 3 L 50 11.5 L 50 13 L 41.5 21 L 41.5 25 L 46.5 25 L 56 15 L 56 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 60 0 L 55 0 L 55 3 L 63.5 11.5 L 63.5 13 L 55 21 L 55 25 L 60 25 L 69.5 15 L 69.5 10 Z" fill="rgb(58, 58, 58)" stroke="rgb(58, 58, 58)" strokeMiterlimit="10"></path>
            <path d="M 73.5 0 L 68.5 0 L 68.5 3 L 77 11.5 L 77 13 L 68.5 21 L 68.5 25 L 73.5 25 L 83 15 L 83 10 Z" fill="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" stroke="var(--token-4ef6a81e-bbba-47f6-b328-62e51365a036, rgb(255, 255, 255))" strokeMiterlimit="10"></path>
        </svg>
    );



    return (
        <div className="flex space-x-2">
            <Svg1/>
            <Svg2/>
            <Svg3/>
            <Svg4/>
            <Svg5/>
            <Svg6/>
            <Svg7/>
            <Svg8/>
            <Svg9/>
            <Svg10/>
            <Svg11/>
        </div>
    );
};
