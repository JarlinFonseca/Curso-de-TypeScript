type PaymentMethodType = 'debito' | 'credito' | 'efectivo';
interface IPaymentMethod { paymentMethod: PaymentMethodType }




interface IProductoBase {
    price: number;
    paymenytMethod: IPaymentMethod['paymentMethod'];
    nameClient: string;

}

type ProductoBaseType = {
    price: number;
    paymenytMethod: PaymentMethodType
    nameClient: string;
}

// Herencia
interface IFisica extends IProductoBase {
    productName: string;
    clientAddress: string;
    quantity: number;
}
type VirtualType =  ProductoBaseType & { 
    templateName: string;
    format: 'jpg' | 'png' | 'pdf';
}

class ProductoVirtual implements VirtualType {
    price: number = 500;
    paymenytMethod: PaymentMethodType = 'efectivo';
    nameClient: string = 'Jarlin';
    templateName: string = 'folleto1';
    format: 'jpg' | 'png' | 'pdf' = 'pdf'
}

class ProductoFisico implements IFisica {
    price: number = 500;
    paymenytMethod: PaymentMethodType = 'efectivo';
    nameClient: string =  'Jarlin';
    productName: string = 'folleto';
    quantity: number = 1000;
    clientAddress: string = 'Street 101';
}