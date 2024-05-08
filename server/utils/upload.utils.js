const crypto = require("crypto");
const multer = require('multer');
const upload = multer({ dest: 'uploads/', })
const util = require('util')

const multerSend = async (req, res, next) => {
    upload.single('file')(req, res, () => { renameFiles(req, res); next() })
}
const multerSingle = util.promisify(multerSend)

const multerArraySend = async (req, res, next) => {
    upload.array('file')(req, res, () => { renameFiles(req, res); next() })
}
const multerArray = util.promisify(multerArraySend)

async function renameFiles(request, response, next) {
    try {
        let files = request.file ? [request.file] : request.files;
        if (files) {
            const promises = [];
            files = files.map((file) => {
                const ext = file.originalname.split('.').pop();
                const newName = `PROC${crypto.randomBytes(3).toString('hex')}T${Date.now()}.${ext}`;
                const newNameFiles = file;
                newNameFiles.newName = newName;
                newNameFiles.oldName = file.originalname;
                newNameFiles.originalname = newName;
                return newNameFiles;
            });
            await Promise.all(promises);
        }
        // next();
        return
    } catch (error) {
        Logger.log('createEntityToken', error, userId)
    }
}


module.exports = {
    multerSingle,
    multerArray,
    renameFiles,
}
