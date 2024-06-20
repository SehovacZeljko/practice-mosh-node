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

// async function deleteCourse(id) {


//     const course = await Course.deleteOne({ _id: id })

//     console.log(course, 'Course updated successfuly');
// }


async function deleteCourse() {


    const course = await Course.deleteMany({ isPublished: false })

    console.log(course, 'Course updated successfuly');
}


deleteCourse('666a1f310a7fb4e3891a57f5')