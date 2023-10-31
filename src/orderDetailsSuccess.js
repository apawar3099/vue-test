export const mockOrderDetails = {
  orderDetails: {
    invoiceNumber: 'QAD234N899BHG',
    itemQuantity: '2',
    actions: ['return', 'cancel', 'reorder'],
    orderStatus: [
      {
        seqId: 1,
        status: 'Order Recieved',
        active: true,
        date: '12 Nov',
        desc: '',
        statusId: 456
      },
      {
        seqId: 2,
        status: 'Order Confirmed',
        active: false,
        date: '',
        desc: '',
        statusId: 457
      },
      {
        seqId: 3,
        status: 'Ready For Pickup',
        active: false,
        date: '',
        desc: '',
        statusId: 458
      },
      {
        seqId: 4,
        status: 'In Transit',
        active: false,
        date: '',
        desc: '',
        statusId: 459
      },
      {
        seqId: 5,
        status: 'Out For Delivery',
        active: false,
        date: '',
        desc: '',
        statusId: 460
      }
    ],
    deliveryInfo: 'Order delivered by 14th Jun',
    orderNumber: 'DDBP21132321BJHDFB',
    paymentDetails: {
      orderAmount: '2100',
      gstAmount: '100',
      totalAmount: '2200',
      totalDiscount: {
        schemeDiscount: '123',
        cartDiscount: '111',
        total: '234'
      },
      modeOfPayment: [
        {
          mode: 'UPI',
          amount: '123',
          transactionId: '123EEHJJXD7892XD'
        },
        {
          mode: 'CREDIT BALANCE',
          amount: '123'
        }
      ],
      invoideDetails: {
        invoiceAmount: '2150',
        invoiceTotal: '2700',
        savingsAmount: ''
      }
    },
    itemDetails: [
      {
        description: 'Ontel 40 tablets by Galaxo Smith',
        price: '123',
        quantity: '20',
        itemDiscount: '20',
        PTR: '12',
        mrp: '15',
        discount: {
          amount: '45',
          discountType: [
            {
              discountKey: 'discountValue'
            }
          ]
        }
      }
    ]
  }
}
