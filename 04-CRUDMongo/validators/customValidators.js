const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log('Could not load MongoDB!!!', err))


const courseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    name: { type: String, required: true },
    author: String,
    tags: {
        type: Array,
        validate: { //This is a custom validator that promt us to have at least one tag!!
            validator: function (value) {
                return value.length > 0;

            },
            message: "A Course have to have at least one tag!!"

        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,


    price: {
        type: Number,
        required: function () {
            return this.isPublished
        },
        min: 10,
        max: 255


    }

})
const Course = mongoose.model('Course', courseSchema)



async function createCourse() {
    const course = new Course({
        name: 'React native Course test ',
        author: 'Zeljkotttt',
        tags: [],
        isPublished: true,
        price: 14,
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