function isIPv4Address(inputString) {
  // Split the string by dots
  const parts = inputString.split(".");
  // Check if there are 4 parts and all are numbers 0-255
  return (
    parts.length === 4 &&
    parts.every((part) => {
      return (
        /^\d+$/.test(part) &&
        parseInt(part, 10) >= 0 &&
        parseInt(part, 10) <= 255
      );
    })
  );
}

// Validates and prints the IP address
function validateIPAddress(ip) {
  const result = isIPv4Address(ip);
  console.log(`The IP address ${ip} is ${result ? "valid" : "invalid"}`);
}

validateIPAddress("172.16.254.1");
validateIPAddress("172.316.254.1");
validateIPAddress(".254.255.1");
