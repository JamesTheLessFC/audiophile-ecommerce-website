import { getClient } from "../../lib/sanity";
import {
  isValidEmail,
  isValidPhoneNumber,
  isEmpty,
} from "../../util/validators";

export default function submitOrder(req, res) {
  if (req.method === "POST") {
    const orderDetails = req.body;
    const validationResults = validateOrder(orderDetails);
    if (validationResults.valid) {
      const doc = {
        ...orderDetails,
        _type: "order",
      };
      getClient("readAndWrite")
        .create(doc)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch(() => {
          res.status(500).json({ message: "Something went wrong" });
        });
    } else {
      res.status(400).json({ message: "Invalid order" });
    }
  }
}

const validateOrder = (order) => {
  const {
    name,
    email,
    phone,
    address,
    zip,
    city,
    country,
    paymentMethod,
    eMoneyNumber,
    eMoneyPin,
    items,
    shippingFee,
    grandTotal,
  } = order;
  const errorsObj = {};
  if (!shippingFee) errorsObj.shippingFee = "Must include shipping fee";
  if (!grandTotal) errorsObj.grandTotal = "Must include grand total";
  if (!items || items.length === 0)
    errorsObj.items = "Must include at least 1 item";
  if (!name || isEmpty(name)) errorsObj.name = "Must not be empty";
  if (!email || isEmpty(email)) {
    errorsObj.email = "Must not be empty";
  } else if (!isValidEmail(email)) {
    errorsObj.email = "Invalid email";
  }
  if (!phone || isEmpty(phone)) {
    errorsObj.phone = "Must not be empty";
  } else if (!isValidPhoneNumber(phone)) {
    errorsObj.phone = "Invalid phone number";
  }
  if (!address || isEmpty(address)) errorsObj.address = "Must not be empty";
  if (!zip || isEmpty(zip)) errorsObj.zip = "Must not be empty";
  if (!city || isEmpty(city)) errorsObj.city = "Must not be empty";
  if (!country || isEmpty(country)) errorsObj.country = "Must not be empty";
  if (paymentMethod === "e-Money") {
    if (!eMoneyNumber || isEmpty(eMoneyNumber))
      errorsObj.eMoneyNumber = "Must not be empty";
    if (!eMoneyPin || isEmpty(eMoneyPin))
      errorsObj.eMoneyPin = "Must not be empty";
  }
  return {
    valid: Object.keys(errorsObj).length === 0,
    errors: errorsObj,
  };
};
