import PHLocationMap from '@images/ph-location.png'
import AbjLocationMap from '@images/abj-location.png'
import PHChurch from '@images/ph-church.jpg'

export const branchesInformation = [
    {
        id: 1,
        region: 'South South',
        cities: [
            {
                id: 'portharcourt',
                name: 'Port Harcourt',
                address: '3 Ezimgbu Street, off Mummy Road',
                phoneNumbers: ['0809 438 9579'],
                locationImg: PHLocationMap,
                churchImg: PHChurch,
                pageImg: PHChurch,
            },
            {
                id: 'asaba',
                name: 'Asaba',
                address: '3 Ezimgbu Street, off Mummy Road',
                phoneNumbers: ['0809 438 9579'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
            },
        ],
    },
    {
        id: 2,
        region: 'South East',
        cities: [
            {
                id: 'owerri',
                name: 'Owerri',
                address: '3 Ezimgbu Street, off Mummy Road',
                phoneNumbers: ['0708 393 0791', '0809 438 9579'],
                locationImg: PHLocationMap,
                pageImg: PHChurch,
            },
        ],
    },
    {
        id: 3,
        region: 'South West',
        cities: [
            {
                id: 'lagos',
                name: 'Lagos',
                address: '3 Ezimgbu Street, off Mummy Road',
                locationImg: PHLocationMap,
                pageImg: PHChurch,
            },
        ],
    },
    {
        id: 4,
        region: 'North West',
        cities: [
            {
                id: 'kaduna',
                name: 'Kaduna',
                address: '3 Ezimgbu Street, off Mummy Road',
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
            },
        ],
    },
    {
        id: 5,
        region: 'North Central',
        cities: [
            {
                id: 'jos',
                name: 'Jos',
                address: '3 Ezimgbu Street, off Mummy Road',
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
            },
            {
                id: 'abuja',
                name: 'Abuja',
                address: 'Serob Hotel, Idris Gidado street, Wuye',
                phoneNumbers: ['0708 393 0791', '0809 438 9579'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
            },
        ],
    },
    {
        id: 6,
        region: 'North East',
        cities: [
            {
                id: 'adamawa',
                name: 'Adamawa',
                address: 'Serob Hotel, Idris Gidado street, Wuye',
                phoneNumbers: ['0708 393 0791', '0809 438 9579'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
            },
        ],
    },
]

export const getCityInformation = (branchId) =>
    branchesInformation
        .flatMap((branch) => branch.cities)
        .find((city) => city.id === branchId)
