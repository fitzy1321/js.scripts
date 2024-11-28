function cookieParser(cookieString) {
  // Return an empty object if cookieString
  // is empty
  if ((cookieString ?? "") === "") return {};

  // Get each individual key-value pairs
  // from the cookie string
  // This returns a new array
  let pairs = cookieString.split(";");
  if (pairs.length === 0) return {};

  // Separate keys from values in each pair string
  // Returns a new array which looks like
  // [[key1,value1], [key2,value2], ...]
  let splittedPairs = pairs.map((cookie) => cookie.split("="));

  // Create an object with all key-value pairs
  const cookieObj = splittedPairs.reduce((obj, cookie) => {
    if (!cookie || cookie.length < 2) return obj;
    // cookie[0] is the key of cookie
    // cookie[1] is the value of the cookie
    // decodeURIComponent() decodes the cookie
    // string, to handle cookies with special
    // characters, e.g. '$'.
    // string.trim() trims the blank spaces
    // auround the key and value.
    const key = decodeURIComponent(cookie[0].trim());
    const val = decodeURIComponent(cookie[1].trim());
    obj[key] = val;
    return obj;
  }, {});
  return cookieObj;
}
