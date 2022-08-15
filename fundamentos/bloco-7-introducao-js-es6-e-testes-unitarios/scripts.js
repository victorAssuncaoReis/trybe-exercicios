const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
/* console.log(order); */
const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const Rua = order.address.street;
  const numero = order.address.number;
  const apartamento = order.address.apartment;
  return console.log(`Olá ${deliveryPerson}, entrega para ${order.name}, telefone: ${order.phoneNumber}, ${Rua}, nº${numero}, Ap.${apartamento}.`)
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);