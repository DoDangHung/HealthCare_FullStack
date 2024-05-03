/** @format */

import searchService from "../services/searchService";

let searchItem = async (req, res) => {
  const { query } = req.query;
  try {
    let result = await searchService.searchItem(query);
    res.json(result);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

module.exports = {
  searchItem: searchItem,
};
