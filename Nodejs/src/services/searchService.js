/** @format */

import db, { sequelize } from "../models/index";
const { Op } = require("sequelize");
let searchItem = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let speciality;
      if (query) {
        speciality = await db.Specialty.findAll({
          where: {
            name: {
              [Op.iLike]: `%${query}%`,
            },
          },
          attributes: {
            exclude: ["image"],
          },
        });
      } else {
        speciality = await db.Specialty.findAll({
          attributes: {
            exclude: ["image"],
          },
        });
      }

      resolve(speciality);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  searchItem: searchItem,
};
