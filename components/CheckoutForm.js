import styles from "../styles/CheckoutForm.module.scss";
import { useState, useContext } from "react";
import Image from "next/image";
import OrderSummary from "./OrderSummary";
import { isValidEmail, isEmpty, isValidPhoneNumber } from "../util/validators";
import ShopContext from "../contexts/shop";
import OrderConfirmationModal from "./OrderConfirmationModal";
import ModalBackground from "./ModalBackground";

const cashOnDeliveryIcon =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633506187/audiophile/shared/desktop/icon-cash-on-delivery_eysijw.svg";

export default function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  const [eMoneyNumber, setEMoneyNumber] = useState("");
  const [eMoneyPin, setEMoneyPin] = useState("");
  const [errors, setErrors] = useState({});

  const { placeOrder, orderSubmitted } = useContext(ShopContext);

  const validateForm = () => {
    const errorsObj = {};
    if (isEmpty(name)) errorsObj.name = "Must not be empty";
    if (isEmpty(email)) {
      errorsObj.email = "Must not be empty";
    } else if (!isValidEmail(email)) {
      errorsObj.email = "Invalid email";
    }
    if (isEmpty(phone)) {
      errorsObj.phone = "Must not be empty";
    } else if (!isValidPhoneNumber(phone)) {
      errorsObj.phone = "Invalid phone number";
    }
    if (isEmpty(address)) errorsObj.address = "Must not be empty";
    if (isEmpty(zip)) errorsObj.zip = "Must not be empty";
    if (isEmpty(city)) errorsObj.city = "Must not be empty";
    if (isEmpty(country)) errorsObj.country = "Must not be empty";
    if (paymentMethod === "e-Money") {
      if (isEmpty(eMoneyNumber)) errorsObj.eMoneyNumber = "Must not be empty";
      if (isEmpty(eMoneyPin)) errorsObj.eMoneyPin = "Must not be empty";
    }
    return {
      valid: Object.keys(errorsObj).length === 0,
      errors: errorsObj,
    };
  };

  const handleSubmit = () => {
    const validationResults = validateForm();
    if (validationResults.valid) {
      placeOrder({
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
      });
    } else {
      setErrors(validationResults.errors);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors((prevState) => {
        return {
          ...prevState,
          name: "",
        };
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prevState) => {
        return {
          ...prevState,
          email: "",
        };
      });
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (errors.phone) {
      setErrors((prevState) => {
        return {
          ...prevState,
          phone: "",
        };
      });
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (errors.address) {
      setErrors((prevState) => {
        return {
          ...prevState,
          address: "",
        };
      });
    }
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
    if (errors.zip) {
      setErrors((prevState) => {
        return {
          ...prevState,
          zip: "",
        };
      });
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    if (errors.city) {
      setErrors((prevState) => {
        return {
          ...prevState,
          city: "",
        };
      });
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    if (errors.country) {
      setErrors((prevState) => {
        return {
          ...prevState,
          country: "",
        };
      });
    }
  };

  const handleEMoneyNumberChange = (e) => {
    setEMoneyNumber(e.target.value);
    if (errors.eMoneyNumber) {
      setErrors((prevState) => {
        return {
          ...prevState,
          eMoneyNumber: "",
        };
      });
    }
  };

  const handleEMoneyPinChange = (e) => {
    setEMoneyPin(e.target.value);
    if (errors.eMoneyPin) {
      setErrors((prevState) => {
        return {
          ...prevState,
          eMoneyPin: "",
        };
      });
    }
  };

  const setPaymentMethodToEMoney = () => {
    setPaymentMethod("e-Money");
  };

  const setPaymentMethodToCash = () => {
    setPaymentMethod("Cash on Delivery");
    setErrors((prevState) => {
      return {
        ...prevState,
        eMoneyNumber: "",
        eMoneyPin: "",
      };
    });
  };

  return (
    <>
      <form className={styles.root}>
        <h1>Checkout</h1>
        <h2>Billing Details</h2>
        <fieldset className={styles.billing_details}>
          <div
            className={`${styles.field} ${
              errors.name ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="name">Name</label>
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.email ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="email">Email Address</label>
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.phone ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="phone">Phone Number</label>
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </fieldset>
        <h2>Shipping Info</h2>
        <fieldset className={styles.shipping_info}>
          <div
            className={`${styles.field} ${
              errors.address ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="address">Your Address</label>
              {errors.address && (
                <span className={styles.error}>{errors.address}</span>
              )}
            </div>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.zip ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="zip">ZIP Code</label>
              {errors.zip && <span className={styles.error}>{errors.zip}</span>}
            </div>
            <input
              type="text"
              name="zip"
              id="zip"
              value={zip}
              onChange={handleZipChange}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.city ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="city">City</label>
              {errors.city && (
                <span className={styles.error}>{errors.city}</span>
              )}
            </div>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={handleCityChange}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.country ? styles.field_with_error : ""
            }`}
          >
            <div className={styles.label_container}>
              <label htmlFor="country">Country</label>
              {errors.country && (
                <span className={styles.error}>{errors.country}</span>
              )}
            </div>
            <input
              type="text"
              name="country"
              id="country"
              value={country}
              onChange={handleCountryChange}
            />
          </div>
        </fieldset>
        <h2>Payment Details</h2>
        <fieldset className={styles.payment_details}>
          <label className={styles.radios_label}>Payment Method</label>
          <div className={styles.radios}>
            <div
              className={`${styles.radio} ${
                paymentMethod === "e-Money" ? styles.radio_checked : ""
              }`}
              onClick={setPaymentMethodToEMoney}
            >
              <input
                type="radio"
                id="e-money"
                name="payment method"
                value="e-Money"
                onChange={setPaymentMethodToEMoney}
                checked={paymentMethod === "e-Money"}
              />
              <label htmlFor="e-money">e-Money</label>
            </div>
            <div
              className={`${styles.radio} ${
                paymentMethod === "Cash on Delivery" ? styles.radio_checked : ""
              }`}
              onClick={setPaymentMethodToCash}
            >
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment method"
                value="Cash on Delivery"
                onChange={setPaymentMethodToCash}
                checked={paymentMethod === "Cash on Delivery"}
              />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
          </div>
          {paymentMethod === "e-Money" ? (
            <>
              <div
                className={`${styles.field} ${
                  errors.eMoneyNumber ? styles.field_with_error : ""
                }`}
              >
                <div className={styles.label_container}>
                  <label htmlFor="e-money-number">e-Money Number</label>
                  {errors.eMoneyNumber && (
                    <span className={styles.error}>{errors.eMoneyNumber}</span>
                  )}
                </div>
                <input
                  type="text"
                  id="e-money-number"
                  name="e-money number"
                  value={eMoneyNumber}
                  onChange={handleEMoneyNumberChange}
                />
              </div>
              <div
                className={`${styles.field} ${
                  errors.eMoneyPin ? styles.field_with_error : ""
                }`}
              >
                <div className={styles.label_container}>
                  <label htmlFor="e-money-pin">e-Money PIN</label>
                  {errors.eMoneyPin && (
                    <span className={styles.error}>{errors.eMoneyPin}</span>
                  )}
                </div>
                <input
                  type="text"
                  name="e-money pin"
                  id="e-money-pin"
                  value={eMoneyPin}
                  onChange={handleEMoneyPinChange}
                />
              </div>
            </>
          ) : (
            <div className={styles.cash_on_delivery_note}>
              <div className={styles.image}>
                <Image
                  src={cashOnDeliveryIcon}
                  alt="cash on delivery"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </fieldset>
      </form>
      <OrderSummary
        handleSubmit={handleSubmit}
        errorsPresent={
          Object.values(errors).filter((err) => err !== "").length > 0
        }
      />
      {orderSubmitted && (
        <ModalBackground>
          <OrderConfirmationModal />
        </ModalBackground>
      )}
    </>
  );
}
