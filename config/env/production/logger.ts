"use strict";

import { winston }  from "@strapi/logger";

module.exports = {
  transports: [
    new winston.transports.Console({
      level: "error",
    }),
  ],
};