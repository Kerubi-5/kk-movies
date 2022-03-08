const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://kk-company.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://kk-legal-application-api/",
  issuer: "https://kk-company.us.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = jwtCheck;
