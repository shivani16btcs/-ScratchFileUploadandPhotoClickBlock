// const multer = require("multer");
// const MIME_TYPE_MAP = {
//   "image/png": "png",
//   "image/jpeg": "jpeg",
//   "image/jpg": "jpg",
// };
// const Storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error("Invalid mime type");
//     if (isValid) {
//       error = null;
//     }
//     callback(error, '../uploads');
//   },
//   filename: function (req, file, callback) {
//     const name = file.fieldname.toLowerCase().split(" ").join("-");
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });
// var Upload = multer({ storage: Storage }).single("File");

// module.exports = {
// async singleUpload(req, res) {
//  await Upload(req, res, function (err) {
//     // if (err) {
//     //   console.log(err);
//     // } else {
//     //   res.send({
//     //     success: true
//     //   });
//     // }
//     if(err)
//     return 'err'
//     else
//     return 'sucess'
//   });
// }
// }
