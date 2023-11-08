export const mockOrderDetailsBatchOrName = {
  data: {
    orders: [
      {
        order_id: 'OID1',
        item_name: 'dolo',
        batch_details: [
          {
            mrp: 52,
            ptr: 44,
            batch_id: 'B1',
            expiry_date: 'Jan 23',
            returable_qty: 100,
            returnable: false,
            return_reasons: [
              {
                id: 21,
                reason: 'Expiry Return'
              },
              {
                id: 23,
                reason: 'Missing Item'
              }
            ]
          },

          {
            mrp: 53,
            ptr: 45,
            batch_id: 'B2',
            expiry_date: 'Feb 23',
            returable_qty: 100,
            returnable: true
          }
        ]
      },

      {
        order_id: 'OID2',
        item_name: 'dolo',
        batch_details: [
          {
            batch_id: 'B1',
            mrp: 52,
            ptr: 44,
            expiry_date: 'Jan 23',
            returable_qty: 80,
            returnable: true
          },

          {
            batch_id: 'B3',
            mrp: 53,
            ptr: 45,
            expiry_date: 'Mar 23',
            returable_qty: 30,
            returnable: true
          }
        ]
      }
    ]
  },

  pageDetail: {
    total: 2,

    offset: 0,

    limit: 10
  },

  errors: [
    {
      messageCode: 'ERR1',

      message: 'error description'
    }
  ]
}
