const{NoteModel}=require('../models/Notes')

const createNote = async (req,res)=>{
    const{content,author} = req.body

    await NoteModel.create({content,author})
    
res.redirect('/');


}

const listNotes =async(req,res)=>{
    const allNotes =await NoteModel.findAll()
    res.json(allNotes)


}


module.exports={createNote,listNotes}