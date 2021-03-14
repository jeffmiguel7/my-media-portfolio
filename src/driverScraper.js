const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const urls = {
  couples:
    "https://drive.google.com/drive/u/0/folders/1qPRs4x-i-upaRoqmVnVmQxYp5X9TzBl1",
  portrait:
    "https://drive.google.com/drive/u/0/folders/1lwPhJxY9is7YNLZuDSfL-0LoSR9m4fXH",
  wedding:
    "https://drive.google.com/drive/u/0/folders/1JnIJ_kAw-NYGr5ZLgec-dwjMNUKyGRKX",
  engagement:
    "https://drive.google.com/drive/u/0/folders/1_sPYZQk-eUcX5k260iBtKMe6uRYIQb1z",
  family:
    "https://drive.google.com/drive/u/0/folders/1D41yv9jvKBgAJoUKW4WJy-Ni0xYtUTxD",
  maternity:
    "https://drive.google.com/drive/u/0/folders/1cgPEQgQNbTK04oa8hwxIKzu4xK3JJbhe",
};

const createImagesJSON = async (urls) => {
  let allImages = [];

  for ([key, value] of Object.entries(urls)) {
    if (value) {
      const url = value;
      const group = key;

      await axios.get(url).then(async (res) => {
        const groupArrImages = await getFolderData(res.data, group);
        allImages = [...allImages, ...groupArrImages];
      });
    }
  }
  fs.writeFileSync("ListOfImages.json", JSON.stringify(allImages));
};

const getFolderData = async (html, tag) => {
  let data = [];
  const $ = cheerio.load(html);
  $("div[data-id]").each((i, elem) => {
    let src = "https://drive.google.com/uc?export=view&id=";

    data.push({
      tag,
      src: (src += $(elem).attr("data-id")),
    });
  });
  return data;
};

createImagesJSON(urls);
