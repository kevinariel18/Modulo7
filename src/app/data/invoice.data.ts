import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice={
    id:'001',
    company:{
        ruc:'121312',
        name:'Clear Minds Consultores',
        address:{
           city:'Quito',
           principalStreet:'Juan Pablo Sanz',
           secondaryStreet:'Iñaquito',
           code:'N-57' ,     

        },

    },
    customer:{
        id:'172323232',
        name:'kevin',
        surname:'Catagña',
        address:{
           city:'Quito',
           principalStreet:'Tejar',
           secondaryStreet:'Cerro Nario',
           code:'N-96' ,     

        },

    },
    items:[
        {id:100,
         product:{
                id:500,
             name:'Papas RAUFLE',
             price:0.50,
             description:'LAS PAPAS MAS SABROSONAS',
             category:{
                id:1,
                name:'Snacks'
             }
             
            },
            quantity:23,

        },
        {id:101,
         product:{
                id:550,
             name:'Doritos',
             price:0.60,
             description:'De queso',
             category:{
                id:2,
                name:'Snacks'
             }
            },
            quantity:50,

        },
        {id:102,
         product:{
                id:580,
             name:'Cachitos',
             price:0.30,
             description:'Para kchudos',
             category:{
                id:3,
                name:'Snacks'
             }
            },
            quantity:100,

        },
    ],


}