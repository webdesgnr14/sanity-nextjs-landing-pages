const sanityClient = require("@sanity/client");
const dateFormat = require("dateformat");
const today = dateFormat(new Date(), "yyyy-mm-dd");

const client = sanityClient({
  projectId: "it2nqgkr",
  dataset: "production",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: today,
});

module.exports = client;
