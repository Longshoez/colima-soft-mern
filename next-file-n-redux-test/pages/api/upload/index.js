import { IncomingForm } from "formidable"
import { promises as fs } from "fs"

let mv = require('mv')

export const config = {
  api: {
    bodyParser: false,
  }
}

//get extension, this regex divides the string into 5 parts
//[extension, extension without dot, extension length, filename, and groups] <- not sure what this means 
//so we extract the first value of the array

const extension = /(?:\.([^.]+))?$/

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    console.log(form)
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      console.log(fields, files)
      console.log(files.file.filepath)

      let oldPath = files.file.filepath
      const { newFilename, originalFilename } = files.file
      let ext = extension.exec(originalFilename)[0]

      let newPath = `./public/uploads/profilePicture/${newFilename, "id"}${ext}`

      //not sure what this is exactly doing
      mv(oldPath, newPath, function (err) { })
      res.status(200).json({ fields, files })
    })
  })
}
