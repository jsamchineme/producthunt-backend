import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const extension = file.mimetype.split("/")[1];
      cb(null, file.fieldname + '-' + Date.now() + `.${extension}`)
    }
});
   
export const upload = multer({ storage })