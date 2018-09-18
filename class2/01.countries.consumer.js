const countryInfo = require("../exercises/country-info");

countryInfo.getCountryInfo("AR", (err, data) => {
  if (err) {
    err.log(err);
  } else {
    console.log(data);
  }
});

countryInfo.getCountryInfoByName("Argentina", (err, data) => {
  if (err) {
    err.log(err);
  } else {
    console.log(data);
  }
});
