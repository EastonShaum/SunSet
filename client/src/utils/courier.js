// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";

//const fetch = require('node-fetch');

export default async function sendEmail(){


const courier = CourierClient({ authorizationToken: "pk_prod_J4GT6J46CE439VGQHHNRQRKCWNDQ" });

// const { requestId } = await courier.send({
//   message: {
//     to: {
//       email: "sunsetleadsmarketing@gmail.com",
//     },
//     template: "QR21W0DA9K4PHNHSXPDF2H2CM3VT",
//     data: {
//       recipientName: "Brian Bennett Or Easton",
//     },
//   },
// });


const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "https://api.courier.com/send"
  },
  body: JSON.stringify({
    "message": {
      to: {
        email: "sunsetleadsmarketing@gmail.com",
      },
      template: "QR21W0DA9K4PHNHSXPDF2H2CM3VT",
      data: {
        recipientName: "Brian Bennett Or Easton",
      },
    }
  })
};

fetch('https://www.api.courier.com/send', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//"eastonshaum@gmail.com"
}