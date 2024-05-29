import { pool } from "../config/db.mysql.js";

export const mostrarMarca = async(req,res) => {
    let id =req.params['id'];

    try {
        const respuesta = await pool.query(`CALL sp_MostrarMarca(${id});`);
        res.json({"res": respuesta});
    } catch (err) {
        res.json({"erro": err})
        
    }
}

export const listarMarca = async(req,res) => {

    try {
        const respuesta = await pool.query(`CALL sp_ListarMarca`);
        res.json({"res": respuesta});
    } catch (err) {
        res.json({"erro": err})
        
    }
}

export const crearMarca = async(req,res) => {
    const descripcion = req.body.descripcion;
    try {
        const respuesta = await pool.query(`CALL sp_CrearMarca('${descripcion}');`);
        if(respuesta[0].affectedRows == 1){
            res.json({"res": "Marca Creada"});
        }else{
            res.json({"error": "No se creo la Marca"});
        }
        
    } catch (err) {
        res.json({"erro": err})
        
    }
}

export const modificarMarca = async(req,res) => {
    let id = req.body.id;
    let descripcion = req.body.descripcion;
    try {
        const respuesta = await pool.query(`CALL sp_ModificarMarca(${id},'${descripcion}');`);
        if(respuesta[0].affectedRows == 1){
            res.json({"res": "Marca modificada"});
        }else{
            res.json({"error": "No se modifico la Marca"});
        }
        
    } catch (err) {
        res.json({"erro": err})
        
    }
}

export const eliminarMarca = async(req,res) => {
    let id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL sp_EliminarMarca(${id});`);
        if(respuesta[0].affectedRows == 1){
            res.json({"res": "Marca eliminada"});
        }else{
            res.json({"error": "No se elimino la Marca"});
        }
        
    } catch (err) {
        res.json({"erro": err})
        
    }
}

