const products= [
    {id:`1`,
    category:`tablas`,
    name:`Pzyel Board`,
    price: 500,
    img:`https://internetfusion.imgix.net/768004.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=550&h=550`,
    stock: 20,
    description: `Tabla Pzyel Voyager para grandes olas`,
},
{   id:`2`,
    category:`accesorios`,
    name:`Quillas FCS`,
    price: 100,
    img:`https://www.surfmarket.org/images/stories/virtuemart/product/fcs-pc2-green.jpg`,
    stock: 30,
    description: `Quillas FCS clasicas`,
},
{   id:`3`,
    category:`tablas`,
    name:`Pod Mod Board`,
    price: 400,
    img:`https://www.mundo-surf.com/54027-large_default/tabla-de-surf-torq-channel-island-pod-mod-x-lite.jpg`,
    stock: 10,
    description: `Tabla All Merrick para olas chicas`,
}  

]

export const getProducts = () => {
    console.log(1)

    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(products)} , 500 )
    })
   // reject("mensaje de error")
}

export const getProductById= (productId) => {
    return new Promise((resolve)=>{ //uso el metodo de arrazs find para encontrar el que tiene el mismo id, nombre del arreglo.find( item=> item.propiedadigual a algo )
       setTimeout(()=>{ resolve(products.find(prod => prod.id === productId))}, 500 ) // un igual es asignar
    })
}

//getProducts().then(products -> console.log(products)).catch(error -> console.log(error))

export const getProductsbyCategory= (productCategory) => {
    console.log(2)
    return new Promise((resolve)=>{ //uso el metodo de arrazs find para encontrar el que tiene el mismo id, nombre del arreglo.find( item=> item.propiedadigual a algo )
       setTimeout(()=>{ resolve(products.filter(prod => prod.category === productCategory))}, 500 ) // un igual es asignar
    })
}
