import { Company } from "./Company";
import { Customer } from "./Customer";
import { Invoiceltem } from "./Invoiceltem";

export class   Invoice{
    id!:string;
    company!:Company;
    customer!:Customer;
    items!:Invoiceltem[];

}