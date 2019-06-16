const fs = require('fs')


const jsonFile = 'notes.json'

const getNotes = () => {
    return 'Your Notes'
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log("New note added")
    } else {
        console.log("New title duplicate")
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(jsonFile)
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync(jsonFile, dataJson)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filterdNotes = notes.filter(note => note.title !== title)
    if (notes.length === filterdNotes.length) {
        console.log('No notes found')
    } else {
        saveNotes(filterdNotes)
        console.log('Notes Deleted')
    }
}


module.exports = {
    addNotes,
    removeNote
};