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
                address: '2 Ezimgbu Link Road, off Mummy Road by GRA junction',
                phoneNumbers: ['0803 674 7620', '0805 878 5840'],
                locationImg: PHLocationMap,
                churchImg:
                    'https://res.cloudinary.com/dzkevoeey/image/upload/v1737978878/ph-branch_cjb0dx.webp',
                pageImg:
                    'https://res.cloudinary.com/dzkevoeey/image/upload/v1737978518/ph-banner_bupe8q.webp',
                description:
                    'Come and join us to worship at church every sundays as we connect to our spiritual father Prophet Shepherd Bushiri',
            },
            {
                id: 'akwaibom',
                name: 'Akwa Ibom',
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx'],
                locationImg: PHLocationMap,
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
                description: '',
            },
        ],
    },
    {
        id: 2,
        region: 'North Central',
        cities: [
            {
                id: 'abuja',
                name: 'Abuja',
                address: 'Serob Hotel, Idris Gidado street, Wuye',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
                description: '',
            },
            {
                id: 'jos',
                name: 'Jos',
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
                description: '',
            },
        ],
    },
    {
        id: 3,
        region: 'South East',
        cities: [
            {
                id: 'owerri',
                name: 'Owerri',
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: PHLocationMap,
                pageImg: PHChurch,
                description: '',
            },
            {
                id: 'enugu',
                name: 'Enugu',
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: PHLocationMap,
                pageImg: PHChurch,
                description: '',
            },
        ],
    },
    {
        id: 4,
        region: 'South West',
        cities: [
            {
                id: 'lagos',
                name: 'Lagos',
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: PHLocationMap,
                pageImg: PHChurch,
                description: '',
            },
        ],
    },
    {
        id: 5,
        region: 'North West',
        cities: [
            {
                id: 'kaduna',
                name: 'Kaduna',
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
                description: '',
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
                address: 'coming soon',
                phoneNumbers: ['080x xxx xxxx', '080x xxx xxxx'],
                locationImg: AbjLocationMap,
                pageImg: PHChurch,
                description: '',
            },
        ],
    },
]

export const getCityInformation = (branchId) =>
    branchesInformation
        .flatMap((branch) => branch.cities)
        .find((city) => city.id === branchId)
