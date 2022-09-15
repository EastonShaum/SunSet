// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";

export default async function sendEmail(){

  
  const courier = CourierClient({ authorizationToken: "pk_prod_KQ3Z7S5W8QMQTBG6TFPQS6X8X6TJ" });
  
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