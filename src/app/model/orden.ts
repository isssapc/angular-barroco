export class Orden {

    id_orden_compra?: number;
    id_cliente?: number;
    cliente?: string;
    fecha_creacion?: string;
    fecha_entrega?: string;
    //lugar_entrega?: string;
    //direccion_entrega?: string;
    id_forma_pago?: number;
    forma_pago?: string;
    //nota?: string;

    constructor() {
        //1= Contado
        this.id_forma_pago = 1;
    }

}
