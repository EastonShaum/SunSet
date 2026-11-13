// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";

export default async function sendEmail(){

  
  const courier = CourierClient({ authorizationToken: process.env.REACT_APP_COURIER_AUTH_TOKEN });
  
  const { requestId } = await courier.send({
  message: {
    to: { 
    },
    template: "QC73PEZ63D4X3XGR7JNFEHVHKF92",
    data: {
      variables: "awesomeness",
    },
  },
});

//"eastonshaum@gmail.com"
}