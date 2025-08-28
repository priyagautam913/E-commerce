const allowedOrigins = require("./allowedOrigins");
const corsOptions = {
  origin: (origin, cb) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error("NOT ALOWED BY CORS"));
    }
  },
};
module.exports = corsOptions;
