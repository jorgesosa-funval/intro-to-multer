import pool from "../bd/Pool.js"
import multer from "multer"

const index = (req) => {


}

const show = (req) => {


}
/* metodo para crear usuarios */
const store = async (req) => {
    try {
        const { body: { nombre, email, password } } = req;
        const sql = 'INSERT INTO users (`nombre`, `email`, `password`) VALUES (?,?,?)';
        await pool.execute(sql, [nombre, email, password]);
        return { success: "user created successfully" }
    } catch (error) {
        throw error
    }

}
const update = (req) => {


}

const updateProfileImage = async (req) => {
    try {

        const sql = 'UPDATE users set picture = ? where id = ?';
        await pool.execute(sql, [req.file.filename, req.params.id]);

        return { success: "user updated successfully" }
    } catch (error) {
        throw error
    }
}

const destroy = (req) => {


}
/* congig to umpload a file */
const createProfileImageName = (file) => {
    const ext = (file.originalname).split('.')
    const imageName = Date.now() + "." + ext[ext.length - 1]

    return imageName;
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const imageName = createProfileImageName(file)
        cb(null, imageName)
    }
})
const MIMETYPE = ['image/png', 'image/jpeg'];
const upload = multer({
    fileFilter: (req, file, cb) => {
        if (MIMETYPE.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(`Only ${MIMETYPE.join(', ')} mimetypes are allowed`, false)
        }
    },
    limits: {
        fileSize: 5000000
    },
    storage: storage

})


export { index, store, updateProfileImage, upload }