// configs
  const API_ROOT = "https://merchants.api.utrust.com/api/stores/orders" // OR "https://merchants.api.sandbox-utrust.com/api/stores/orders" (for sandbox)
  const API_KEY = // Add your API_KEY here OR fetch it from environment variables;

  // order params
  const orderParams = {
      data: {
          type: "orders",
          attributes: {
              order: {
                  reference: "order-51367",
                  amount: {
                      total: "10.00",
                      currency: "EUR",
                  },
                  return_urls: {
                      return_url: "http://example.com/success",
                  }
              },
              customer: {
                  email: 'customer@example.com',
                  country: 'US'
              },
          },
      },
  }

  // utrust api
  const utrustApi = {
      createOrder: (params, token) =>
          fetch(API_ROOT + "/stores/orders/", {
              method: "POST",
              headers: {
                  "content-type": "application/vnd.api+json",
                  authorization: "Bearer " + API_KEY,
              },
              body: JSON.stringify(params),
          }).then(response => response.json()),
  }

  utrustApi
  .createOrder(orderParams)
  .then(response => response.data.attributes.redirect_url)
