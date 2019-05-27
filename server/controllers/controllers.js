

const Producto = require ('../models/productos');
const fs = require ('fs');
const WS = fs.createWriteStream ('post.csv')



const scrapeControl = {}

WS.write(`Action(SiteID=Spain|Country=ES|Currency=EUR|Version=745);ItemID;CustomLabel;*Category;StoreCategory;*Title;*ConditionID;*C:Marca;C:MPN;Product:EAN;PicURL;*Description;*Format;*Duration;*StartPrice;*Quantity;*Location;ShippingProfileName;ReturnProfileName;PaymentProfileName;Relationship;RelationshipDetails \n`)

scrapeControl.getScrapers = async (req,res)=>{ 
       res.json ({
            ok:true,
            producto
           });
           //console.log(producto);
        }

scrapeControl.createScraper = async(req,res)=>{

       // 1.requerimos el body y lo almacenamos en una variable

       body = req.body
       console.log('recibido');

       
       // 2. Hacemos la llamada al modelo Producto creando una variable
    let producto = new Producto({
              // asignamos a las propiedades del modelo los datos procedentes del body
              
              titulo: body.titulo,
              precio: body.precio,
              marca: body.marca,
              categoria: body.categoria,
              caracteristicas: body.caracteristicas,
              imagenes: body.imagenes
            })
         
      WS.write(`add;;;${producto.categoria};;${producto.titulo};1000;${producto.marca};No aplicable;No aplicable;${producto.imagenes};${producto.caracteristicas};Fixed Price;GTC;${producto.precio};3;33865;Fija:Correos: carta(Gratis),3 días laborables;Devoluciones aceptadas,Comprador,14 días#0;PayPal:Pago inmediato;;\n`,'UTF8')

       console.log(producto);
       // 3. Guardamos el producto en la base de datos de mongodb
    producto.save((err, productoDB) => {
   
            if (err) {
               return res.status(400).json({
                   ok: false,
                   err
               });
           }
   
            res.json({
               ok: true,
               producto: productoDB
           });
       })

        
    
};
scrapeControl.getScraper = (req,res)=>{
    
}
scrapeControl.editScraper = (req,res)=>{
 
}
scrapeControl.deleteScraper = (req,res)=>{
    
}



module.exports = scrapeControl