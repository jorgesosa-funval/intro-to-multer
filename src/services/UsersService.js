import pool from "../bd/Pool.js"


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
const destroy = (req) => {


}


export { index, store }