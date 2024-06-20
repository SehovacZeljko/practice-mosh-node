
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log('Could not load MongoDB!!!', err))



const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now }, //additional built in vlaidator if isPublished is true then price is required
    isPublished: Boolean

})
const Course = mongoose.model('Course', courseSchema)


/////------------------------Create Course in database
async function createCourse() {
    const course = new Course({
        name: 'React native Course test ',
        author: 'Zeljko',
        tags: ['React', 'Frontend mobile'],
        isPublished: true

    })

    const result = await course.save()
    console.log(result);

}

createCourse()


///------------------Query Courses from database -----------------------

// async function getCurses(){

// const courses = await Course.find()

// console.log('courses:',courses);


// }


//---------------------------------Add filters to query--------------------

// async function getCurses() {

//     const courses = await Course.find({ author: 'Mosh', isPublished: true })
//         .limit(10).sort({ name: 1 }).select({ name: 1, tags: 1, isPublished: 1 })
//     console.log('courses:', courses);


// }


//--------------------------------Comparisson qery operators

// async function getCurses() {

//     //  eq (equal)
//     //  ne (not equal)
//     //  gte (greater than)
//     //  lt (less than)
//     //  lte (less then or equal to)
//     //  in
//     //  nin ( not in )

//     const courses = await Course.find({
//         price: { $gte: 10 }     //   in use case:   {$in :[10,15,20]}
//     })
//         .limit(10)
//     console.log('courses:', courses);


// }

//--------Logical query operators

// async function getCurses() {
//     // or
//     // and
//     const courses = await Course.find()
//         .or([{ author: "Mosh" }, { isPublished: true }])
//         .limit(10)
//     console.log('courses:', courses);


// }

//------------------query regular expressions


// // async function getCurses() {

// //     const courses = await Course
// //     // starts with Mosh
// //     .find({ author: /^Mosh/})

// //     // ends with Hemedani
// //     .find({ author: /Mosh$/i})    //  i   is for case sensitive


// // //-------contains Mosh

// // .find({ author: /.*Mosh.*/i})

// //         .limit(10)
// //     console.log('courses:', courses);


// // }



// getCurses()