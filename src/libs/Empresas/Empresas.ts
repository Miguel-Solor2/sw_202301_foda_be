export interface IEmpresa { 
    codigo: string;
    nombre: string;
    status: string;
    created?: Date;//cuando se creo
    updated?: Date;//cuando se actualizo
    observacion?: string;
    //el signo de interrogancion indica que es un dato opcional
}
//La interface es una estructura que define el tipo de dato
//obliga a que la variable tenga todos los atributos que estan en la interface

export class Empresas {
   
    private empresas : IEmpresa[];
    constructor(){//funcion predeterminada para inicializar
        this.empresas = [];
    }
    add(nuevaEmpresa : IEmpresa) {
        const date = new Date();
        const nueva: IEmpresa = {
            ...nuevaEmpresa, 
        codigo: (Math.random()* 1000).toString()+new Date().getTime().toString(),//creacion de un codigo aleatorio
        created: date,
        updated: date
        }
        this.empresas.push(nueva);
        return true;
    }
    getAll(){
        return this.empresas;
    }
    update (updateEmpresa: IEmpresa){
        const newEmpresas: IEmpresa[] = this.empresas.map((emp)=>{
            if (emp.codigo === updateEmpresa.codigo) {
                return {...emp, ...updateEmpresa, updated: new Date()};
            }
            return emp;
        });
        this.empresas = newEmpresas;
        return true;
    }
}
