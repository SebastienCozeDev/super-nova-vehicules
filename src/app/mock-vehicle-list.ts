import { Vehicle } from "./vehicle";

export const VEHICLES: Vehicle[] = [
    {
        id: 1,
        price: 55900,
        name: 'Super Nova BoxTruck',
        shortDescription: 'Le Super Nova BoxTruck est le parfait véhicule de transport populaire auprès de tous.',
        picture: 'https://cdn1.epicgames.com/ue/product/Screenshot/BoxTruckPromotional-1920x1080-286ce6e2e2fadd0712b6e0a063970e3e.png?resize=1&w=1920',
        types: ['essence', 'diesel'],
        release: new Date(),
    },
    {
        id: 2,
        price: 44650,
        name: 'Super Nova Hatchback',
        shortDescription: 'La Super Nova Hatchback est parfaitement conçu la ville.',
        picture: 'https://cdn1.epicgames.com/ue/product/Screenshot/HatchbackPromotional-1920x1080-c8875a7ad8654978f7fd21bf9dba72ba.png?resize=1&w=1920',
        types: ['essence', 'diesel'],
        release: new Date(),
    },
    {
        id: 3,
        price: 42900,
        name: 'Super Nova Pickup',
        shortDescription: 'Le Super Nova Pickup est parfait pour faire des petits escapades en nature.',
        picture: 'https://cdn1.epicgames.com/ue/product/Screenshot/PickupPromotional-1920x1080-2e76c6b74aa8836a0e7066718f526d74.png?resize=1&w=1920',
        types: ['essence', 'diesel'],
        release: new Date(),
    },
    {
        id: 4,
        price: 206890,
        name: 'Super Nova SportCar',
        shortDescription: 'Si vous aimez la vitesse, la Super Nova SportCar est parfaite pour vous.',
        picture: 'https://cdn1.epicgames.com/ue/product/Screenshot/SportsCarPromotional-1920x1080-d383f6de03ad3067e14064ad9360adf8.png?resize=1&w=1920',
        types: ['full hybrid', 'essence'],
        release: new Date(),
    },
    {
        id: 5,
        price: 37200,
        name: 'Super Nova SUV',
        shortDescription: 'Le Super Nova SUV est parfait pour une utilisation mi-citadine et mi-rurale.',
        picture: 'https://cdn1.epicgames.com/ue/product/Screenshot/SUVPromotional-1920x1080-47840dc09c2d2fcf4a3b986ea16962c8.png?resize=1&w=1920',
        types: ['essence', 'diesel'],
        release: new Date(),
    },
];