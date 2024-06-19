import { query } from "../Database/db.js";
import { date } from "../utils/func.js";

const getNotes = async (req, res) => {
    try {
        const notes = await query (`SELECT * FROM notes`);
        return res.status(200).json({success : true, data: notes });
    } catch (error) {
        console.error("Message: ", error);
        return res.status(500).json({msg: "Terjadi kesalahan"});
    }
};

const addNotes = async (req, res) => {
    try {
        const {title, note} = req.body;
        await query ("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, date(), note])
        return res.status(200).json({msg : "Note ditambahkan"});
    } catch (error) {
        return res.status(500).json({msg : "Terjadi kesalahan"});
    }
}

const getbyidNotes = async (req, res) => {
    const {id} = req.params
    try {
        const result = await query("SELECT*FROM notes where id = (?) ", [id])
        return res.status(200).json (result);
    } catch (error) {
        return res.status(500).json ({msg : "Gagal"});
    }
};

const updateNotes = async (req, res) => {
    const {id} = req.params;
    const {title, note} = req.body;

    try {
        console.log(id)
        await query ("UPDATE notes SET title = ?, datetime = ? ,note = ? WHERE id = ?",[title, date(), note, id]);
        return res.status(200).json ({msg : "Berhasil diubah"});
    } catch (error) {
        return res.status(500).json ({msg : "terjadi kesalahan"});
    }
};

const deleteNotes = async (req, res) => {
    const {id} = req.params;
    try {
        await query ("DELETE FROM notes WHERE id = ?", [id]);
        return res.status(200).json ({msg: "Berhasil hapus"});
    } catch (error) {
        return res.status(500).json ({msg: "Terjadi kesalahan"});
    }
}

export {getNotes, addNotes, getbyidNotes, updateNotes, deleteNotes};