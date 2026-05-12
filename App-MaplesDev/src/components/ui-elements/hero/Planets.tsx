import type { Planet } from './interfaces';

// planets graphics
import { 
    EarthPlanet,
    JupiterPlanet,
    MarsPlanet,
    MercuryPlanet,
    NeptunePlanet,
    PlutoPlanet,
    SaturnPlanet,
    SunPlanet,
    UranusPlanet,
    VenusPlanet,
} from '../../../assets/Pixel-Planets';

export const planets: Planet[] = [
    {
        name: 'Sun',
        image: SunPlanet,
        sizeRatio: 4,
        xPercent: 0.02,
        yPercent: 0.18,
    },

    {
        name: 'Mercury',
        image: MercuryPlanet,
        sizeRatio: 0.35,
        xPercent: 0.1,
        yPercent: 0.4,
    },

    {
        name: 'Venus',
        image: VenusPlanet,
        sizeRatio: 0.7,
        xPercent: 0.21,
        yPercent: 0.34,
    },

    {
        name: 'Earth',
        image: EarthPlanet,
        sizeRatio: 1,
        xPercent: 0.32,
        yPercent: 0.45,
    },

    {
        name: 'Mars',
        image: MarsPlanet,
        sizeRatio: 0.55,
        xPercent: 0.42,
        yPercent: 0.4,
    },

    {
        name: 'Jupiter',
        image: JupiterPlanet,
        sizeRatio: 2.2,
        xPercent: 0.50,
        yPercent: 0.55,
    },

    {
        name: 'Saturn',
        image: SaturnPlanet,
        sizeRatio: 2,
        xPercent: 0.67,
        yPercent: 0.65,
    },

    {
        name: 'Uranus',
        image: UranusPlanet,
        sizeRatio: 1.4,
        xPercent: 0.82,
        yPercent: 0.80,
    },

    {
        name: 'Neptune',
        image: NeptunePlanet,
        sizeRatio: 1.35,
        xPercent: 0.9,
        yPercent: 0.92,
    },

    {
        name: 'Pluto',
        image: PlutoPlanet,
        sizeRatio: 0.25,
        xPercent: 0.99,
        yPercent: 0.9,
    },
];