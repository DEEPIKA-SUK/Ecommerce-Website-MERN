import bcrypt from 'bcryptjs';

const data ={
    users:[
        {
            name:'ABCD',
            email:'admin@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'EFG',
            email:'a@gmail.com',
            password: bcrypt.hashSync('123',8),
            isAdmin:false,
        },
        
    ],
    products:[
        {
            
            name:'boAt Bassheads 100',
            category:'wired earphones',
            image:'/images/p1.jpg',
            price:2000,
            countInStock:10,
            brand:'boAt',
            rating:3.5,
            numReviews:8,
            description:'boAt Bassheads 100 in ear wired earpones wit Mic',
        },
        {
            
            name:'nokia essential wireless earphones n headpones',
            category:'wireless earphones',
            image:'/images/p2.jpg',
            price:12000,
            countInStock:10,
            brand:'nokia',
            rating:4.5,
            numReviews:10,
            description:'nokia essential wireless earphones n headpones',
        },
        {
            
            name:'Mi sports bluetooth wireless earphones',
            category:'wireless earphones',
            image:'/images/p3.jpg',
            price:20000,
            countInStock:20,
            brand:'Mi',
            rating:4.5,
            numReviews:10,
            description:'Mi sports bluetooth wireless earphones',
        },
        {
            
            name:'Sennheiser HD 458 BT Over Ear Wireless Headphones',
            category:'wireless headphones',
            image:'/images/p4.jpg',
            price:50000,
            countInStock:0,
            brand:'Senneiser',
            rating:5,
            numReviews:100,
            description:'Sennheiser HD 458 BT Over Ear Wireless Headphones with Active Noise Cancellation Headphone',
        },
        {
            
            name:'Sennheiser PC 3 Chat On-Ear Headphone',
            category:'Chat On-Ear Headphone',
            image:'/images/p5.jpg',
            price:15000,
            countInStock:50,
            brand:'Sennheiser',
            rating:4.5,
            numReviews:10,
            description:'Sennheiser PC 3 Chat On-Ear Headphone',
        },
        {
            
            name:'sony_wh_1000xm4_negro_auriculares_inalambrico_01_l',
            category:'headpones',
            image:'/images/p6.jpg',
            price:16000,
            countInStock:0,
            brand:'Sony',
            rating:4.5,
            numReviews:10,
            description:'sony_wh_1000xm4_negro_auriculares_inalambrico_01_l',
        },
    ],
};
export default data;