const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log('Could not load MongoDB!!!', err))


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean

})


const Course = mongoose.model('Course', courseSchema)

// async function updateCourse(id) {
//     // const resonse = await Course.update(id, {
//     //     $set: { author: 'JAck', isPublished: true }

//     // })

//     const resonse = await Course.updateOne({ _id: id }, {
//         $set: { name: 'ffffaf', isPublished: false }
//     })

//     console.log(resonse, 'Course updated successfuly');
// }


async function updateCourse(id) {
    // const resonse = await Course.update(id, {
    //     $set: { author: 'JAck', isPublished: true }

    // })

    const resonse = await Course.findByIdAndUpdate(id, {
        $set: { name: 'ffrrrrrr', isPublished: true }
    }, { new: true })

    console.log(resonse, 'Course updated successfuly');
}


updateCourse('666a1f310a7fb4e3891a57f5')