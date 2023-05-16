const products =[
    {
        id: '1' , 
        name: 'Human Grade Mon Ami', 
        price: 7000 ,
        img: '../img/alimento1.png',
        stock: 25, 
        description: 'Alimento natural para gatos de todo tipo',
        category: 'alimentos'
    },
    {
        id: '2' , 
        name: 'Nutrique Healthy Weight' , 
        price: 11000 ,
        img: '../img/alimento2.png',
        stock: 25, 
        description: 'Alimento para mantenimiento de peso saludable',
        category: 'alimentos'

    },
    {
        id: '3' , 
        name: 'Nutrique BabyCat' , 
        price: 5600 ,
        img: '../img/alimento3.png',
        stock: 25, 
        description: 'Alimento para cachorros de 0 a 6 meses',
        category: 'alimentos'

    },
    {
        id: '4' , 
        name: 'Nutrique Urinary Care' , 
        price: 8500 ,
        img: '../img/alimento4.png' ,
        stock: 25, 
        description: 'Alimento medicinal para cuidados renales',
        category: 'alimentos'

    },
    {
        id: '5', 
        name: 'Snack Catit Creamy' , 
        price: 7500 ,
        img: '../img/alimento5.JPG',
        stock: 25, 
        description: 'Snack de crema varios sabores: atún, salmón, pavo',
        category: 'alimentos'

    },

    {
        id: '6', 
        name: 'Juguete Ratita Naranja' , 
        price: 450 ,
        img: '../img/toy1.png',
        stock: 25, 
        description: 'Ratita confeccionada de hilo sisal color naranja',
        category: 'juguetes'

    },

    {
        id: '7', 
        name: 'Juguete Ratitas Peludas' , 
        price: 450 ,
        img: '../img/toy2.png',
        stock: 25, 
        description: 'Ratitas peludas con piel sintética',
        category: 'juguetes'

    },

    {
        id: '8', 
        name: 'Juguete interactivo' , 
        price: 12600 ,
        img: '../img/toy3.png',
        stock: 25, 
        description: 'Juguete interactivo con pelotitas',
        category: 'juguetes'

    },

    {
        id: '9', 
        name: 'Rascador Ambar' , 
        price: 26750 ,
        img: '../img/gym2.jpg',
        stock: 25, 
        description: 'Rascador multiplataforma con dos cuchas',
        category: 'gym'

    },

    {
        id: '10', 
        name: 'Rascador Gray' , 
        price: 32450 ,
        img: '../img/gym5.jpeg',
        stock: 25, 
        description: 'Rascador multiplataforma con dos cuchas y hamaca',
        category: 'gym'

    },

    {
        id: '11', 
        name: 'Rascador KING' , 
        price: 45760,
        img: '../img/gym5.jpg',
        stock: 25, 
        description: 'Rascador multipataforma tamaño XXL',
        category: 'gym'

    },

    {
        id: '12', 
        name: 'Catlitter aglomerante' , 
        price: 370,
        img: '../img/higiene1.png',
        stock: 25, 
        description: 'Piedritas sanitarias tradicionales 3kg',
        category: 'higiene'

    },

    {
        id: '13', 
        name: 'Piedritas ALTA GAMA' , 
        price: 45760,
        img: '../img/higiene2.png',
        stock: 25, 
        description: 'Granulado higiénico para gatos tradicional 3kg',
        category: 'higiene'

    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        } ,500)
    })   
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products.find(prod=> prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === category))
      }, 500)
    })
  }
  

  
//Se genera el archivo asyncmock con un array que nuclea la información de los productos y sus categorías
//Se define y exporta una función llamada getProducts que se resuelve luego de 500ms antes de retornar el array
//Se define exporta una función llamada getProductId para encontrar un producto determinado x ID
//Se define exporta una función llamada getProductCategory para encontrar un producto determinado x Categoria