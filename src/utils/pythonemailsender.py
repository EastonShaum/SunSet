import os
from trycourier import Courier

client = Courier(auth_token=os.environ["COURIER_AUTH_TOKEN"])

resp = client.send(
  event="courier-quickstart",
  recipient="aman@courier.com",
  data={
    "favoriteAdjective": "awesomeness"
  },
  profile={
    "email": "aman@courier.com"
  }
)