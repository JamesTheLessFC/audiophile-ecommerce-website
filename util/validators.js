import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

export const isValidPhoneNumber = (phone) => {
  try {
    const parsedPhone = phoneUtil.parse(phone, "US");
    return phoneUtil.isValidNumberForRegion(parsedPhone, "US");
  } catch (err) {
    return false;
  }
};

// export const isValidEmail = (email) => {
//   const emailRegex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (email.match(emailRegex)) return true;
//   else return false;
// };

export const isValidEmail = (emailAddress) => {
  const sQtext = "[^\\x0d\\x22\\x5c\\x80-\\xff]";
  const sDtext = "[^\\x0d\\x5b-\\x5d\\x80-\\xff]";
  const sAtom =
    "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+";
  const sQuotedPair = "\\x5c[\\x00-\\x7f]";
  const sDomainLiteral = "\\x5b(" + sDtext + "|" + sQuotedPair + ")*\\x5d";
  const sQuotedString = "\\x22(" + sQtext + "|" + sQuotedPair + ")*\\x22";
  const sDomain_ref = sAtom;
  const sSubDomain = "(" + sDomain_ref + "|" + sDomainLiteral + ")";
  const sWord = "(" + sAtom + "|" + sQuotedString + ")";
  const sDomain = sSubDomain + "(\\x2e" + sSubDomain + ")*";
  const sLocalPart = sWord + "(\\x2e" + sWord + ")*";
  const sAddrSpec = sLocalPart + "\\x40" + sDomain; // complete RFC822 email address spec
  const sValidEmail = "^" + sAddrSpec + "$"; // as whole string

  const reValidEmail = new RegExp(sValidEmail);

  return reValidEmail.test(emailAddress);
};

export const isEmpty = (field) => {
  return field.trim() === "";
};
