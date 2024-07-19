import pool from "../bd/Pool.js"
import multer from "multer"

const index = async (req, res, next) => {
    try {
        const sql = 'SELECT * FROM users';
        const [respose] = await pool.execute(sql);
        res.status(200).json(respose)
    } catch (error) {
        res.status(500).json(error)
    }

}

const show = (req) => {


}
/* metodo para crear usuarios */
const store = async (req, res, next) => {
    try {
            const { body: { id, nombre, email, password } } = req;
            const sql = 'INSERT INTO users (`id`,`nombre`, `email`, `password`) VALUES (?,?,?)';
            await pool.execute(sql, [id, nombre, email, password]);
            res.status(200).json({ success: "user created successfully" })

    } catch (error) {
        res.status(500).json(error)
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