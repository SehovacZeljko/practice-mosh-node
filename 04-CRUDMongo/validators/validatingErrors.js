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
            isAsync: true,
            // validator: function (value, callback) {
            //     setTimeout(() => {
            //         // Do some async work
            //         const result = value && value.length > 0;
            //         callback(result)
            //     }, 4000);


            // },// na internetu nasao rijesenje koje radi
            validator: function (value) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        // Do some async work
                        const result = value && value.length > 0;
                        resolve(result);
                    }, 4000);
                });
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
        tags: null,
        isPublished: true,
        price: 14,
        category: '-'
    })
    try {
        const result = await course.save()
        console.log(result);
    } catch (error) {
        for (field in error.errors) {

            console.log("**************", error.errors[field].message);
        }
    }


}

createCourse()