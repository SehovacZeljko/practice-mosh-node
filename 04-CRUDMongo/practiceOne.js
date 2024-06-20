const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log('Could not load MongoDB!!!', err))


const courseSchema = new mongoose.Schema({
    name: { type: String, required: true }, // add calidation, name is required parametar 
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean

})


const Course = mongoose.model('Course', courseSchema)


async function createCourse() {
    const course = new Course({
        // name: 'React native Course test ',
        author: 'Zeljko',
        tags: ['React', 'Frontend mobile'],
        isPublished: true

    })

    const result = await course.save()
    console.log(result);

}

createCourse()