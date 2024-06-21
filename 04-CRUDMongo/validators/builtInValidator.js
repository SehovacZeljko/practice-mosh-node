const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log('Could not load MongoDB!!!', err))


const courseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'] // polje mora biti jedno od ovih naznacenih 
    },
    name: { type: String, required: true },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,


    price: {  //additional built in vlaidator if isPublished is true then price is required
        type: Number,
        required: function () {
            return this.isPublished
        },
        min: 10, // min and max value for price validator!!
        max: 255


    }

})
const Course = mongoose.model('Course', courseSchema)



async function createCourse() {
    const course = new Course({
        name: 'React native Course test ',
        author: 'Zeljko test 2',
        tags: ['React', 'Frontend mobile'],
        isPublished: true,
        price: 4,
        category: 'web'
    })
    try {
        const result = await course.save()
        console.log(result);
    } catch (error) {
        console.log("**************", error);
    }


}

createCourse()