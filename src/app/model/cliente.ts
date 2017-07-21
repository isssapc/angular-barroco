export class Cliente {

    id_cliente?: number;
    nombre: string
    email?: string;
    telefono?: string;
    contacto?: string;
    rfc?: string;
    calle_fiscal?: string;
    num_ext_fiscal?: string;
    num_int_fiscal?: string;
    colonia_fiscal?: string;
    cp_fiscal?: string;
    municipio_fiscal?: string;
    estado_fiscal?: string;
    calle_envio?: string;
    num_ext_envio?: string;
    num_int_envio?: string;
    colonia_envio?: string;
    cp_envio: string;
    municipio_envio?: string;
    estado_envio?: string;

    constructor() {
        this.nombre=null;
     }

    public static copiar(cliente: Cliente): Cliente {
        let copia = new Cliente();

        copia.nombre = cliente.nombre;
        copia.email = cliente.email;
        copia.telefono = cliente.telefono;
        copia.contacto = cliente.contacto;
        copia.rfc = cliente.rfc;
        copia.calle_fiscal = cliente.calle_fiscal;
        copia.num_ext_fiscal = cliente.num_ext_fiscal;
        copia.num_int_fiscal = cliente.num_int_fiscal;
        copia.colonia_fiscal = cliente.colonia_fiscal;
        copia.cp_fiscal = cliente.cp_fiscal;
        copia.municipio_fiscal = cliente.municipio_fiscal;
        copia.estado_fiscal = cliente.estado_fiscal;
        copia.calle_envio = cliente.calle_envio;
        copia.num_ext_envio = cliente.num_ext_envio;
        copia.num_int_envio = cliente.num_int_envio;
        copia.colonia_envio = cliente.colonia_envio;
        copia.cp_envio = cliente.cp_envio;
        copia.municipio_envio = cliente.municipio_envio;
        copia.estado_envio = cliente.estado_envio;




        return copia;
    }

}
