export class Orden {

    id_orden_compra?: number;
    id_cliente?: number;
    cliente?: string;
    fecha_creacion?: string;
    fecha_entrega?: string;
    id_compra_entrega?: number;
    //direccion_entrega?: string;
    id_forma_pago?: number;
    forma_pago?: string;
    nota?: string;

    constructor() {
        //1= Contado
        //this.id_cliente=null;
        this.id_forma_pago = 1;
        this.id_compra_entrega = null;
    }

}
