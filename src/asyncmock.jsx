const products =[
    {
        id: '1' , 
        name: 'Human Grade Mon Ami', 
        price: 7000 ,
        img: '../img/alimento1.png',
        stock: 25, 
        description: 'Descripción alimento 1',
    },
    {
        id: '2' , 
        name: 'Nutrique Healthy Weight' , 
        price: 11000 ,
        img: '../img/alimento2.png',
        stock: 25, 
        description: 'Descripción alimento 2',

    },
    {
        id: '3' , 
        name: 'Nutrique BabyCat' , 
        price: 5600 ,
        img: '../img/alimento3.png',
        stock: 25, 
        description: 'Descripción alimento 3',

    },
    {
        id: '4' , 
        name: 'Nutrique Urinary Care' , 
        price: 8500 ,
        img: '../img/alimento4.png' ,
        stock: 25, 
        description: 'Descripción alimento 4',

    },
    {
        id: '5', 
        name: 'Snack Catit Creamy' , 
        price: 7500 ,
        img: '../img/alimento5.JPG',
        stock: 25, 
        description: 'Descripción alimento 5',

    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        } ,500)
    })   
}

//Se genera el archivo asyncmock con un array que nuclea la información de los productos "Alimentos y Snacks"
//Se exporta una función llamada getProducts que se resuelve luego de 500ms antes de retornar el array