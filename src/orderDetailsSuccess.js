export const mockOrderDetails = {
  orderDetails: {
    invoiceNumber: 'QAD234N899BHG',
    branchCode: 'XYZ',
    shareLink: '',
    itemQuantity: '2',
    actions: ['return', 'cancel', 'reorder'],
    orderStatus: [
      {
        seqId: 1,
        status: 'Order Received',
        active: true,
        date: '12 Nov',
        desc: '',
        statusId: 456
      },
      {
        seqId: 2,
        status: 'Order Confirmed',
        active: true,
        date: '12 Nov',
        desc: '',
        statusId: 457
      },
      {
        seqId: 3,
        status: 'Ready For Pickup',
        active: true,
        date: '12 Nov',
        desc: 'Order Picked by delivery partner',
        statusId: 458
      },
      {
        seqId: 4,
        status: 'In Transit',
        active: false,
        date: '',
        desc: '',
        statusId: 459,
        subStatus: [
          {
            status: 'Delivery attempted Shop closed',
            reason: '',
            date: '13 July',
            type: 'done'
          },
          {
            status: 'Delivery attempted Merchant Not available',
            reason: '',
            date: '14 July',
            type: 'alert'
          },
          {
            status: 'Reached nearest hub',
            reason: 'Reached nearest hub',
            date: '15 July',
            type: 'pending'
          }
        ]
      },
      {
        seqId: 5,
        status: 'Out For Delivery',
        active: false,
        date: '12 Nov',
        desc: '',
        statusId: 460
      },
      {
        seqId: 6,
        status: 'Cancelled',
        active: false,
        date: '12 Nov',
        desc: 'Merchant not available',
        statusId: 462
      }
    ],
    deliveryInfo: 'Order delivered by 14th Jun',
    orderNumber: 'DDBP21132321BJHDFB',
    paymentDetails: {
      orderAmount: '2100',
      gstAmount: '100',
      totalAmount: '2200',
      modifiedItemsAmount: '100',
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
      invoiceDetails: {
        invoiceAmount: '2150',
        invoiceTotal: '2700',
        savingsAmount: '200'
      }
    },
    itemDetails: [
      {
        name: 'Ontel 40 tablets',
        description: 'by Galaxo Smith',
        price: '123',
        quantity: '20',
        modifiedQty: '15',
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
      },
      {
        name: 'DOLO 356',
        description: 'by ABC Pharma',
        price: '500',
        quantity: '16',
        PTR: '45',
        mrp: '50',
        discount: {
          amount: '71',
          discountType: [
            {
              discountKey: 'discountValue'
            }
          ]
        }
      }
    ],
    returnRefundDetails: {}
  }
}
