export class Producto {
    id_producto?: number;
    nombre?: string;
    unidad?: string;
    cantidad?: number;
    num_factura?: string;
    id_producto_categoria?: number;
    categoria?: string;
    costo?: number;
    precio_venta?: number;
    descripcion?: string;
    especificaciones?: string;

    constructor() {
        this.nombre=null; 
        this.id_producto_categoria=null;
     }

   
     

    public static copiar(producto: Producto): Producto {
        let copia = new Producto();

        copia.nombre = producto.nombre;
        copia.unidad = producto.unidad;
        copia.cantidad = producto.cantidad;
        copia.num_factura = producto.num_factura;
        copia.id_producto_categoria = producto.id_producto_categoria;
        copia.costo = producto.costo;
        copia.precio_venta = producto.precio_venta;
        copia.descripcion = producto.descripcion;
        copia.especificaciones = producto.especificaciones;
        
        return copia;

    
    }

}