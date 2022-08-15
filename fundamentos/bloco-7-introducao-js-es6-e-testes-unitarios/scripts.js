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
/* const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.del
  const Rua = order.address.street;
  const numero = order.address.number;
  const apartamento = order.address.apartment;
  return console.log(`Olá ${deliveryPerson}, entrega para ${order.name}, telefone: ${order.phoneNumber}, ${Rua}, nº${numero}, Ap.${apartamento}.`)
}
customerInfo(order); */

const orderModifier = (order) => {
  const cliente = order.name = 'Luiz Silva';
  const valor = order.payment.total = '50';
  const pizza = Object.keys(order.order.pizza);
  const refri = order.order.drinks.coke.type;
  return console.log(`Olá ${cliente}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${refri} é de R$${valor},00`);
}

orderModifier(order);