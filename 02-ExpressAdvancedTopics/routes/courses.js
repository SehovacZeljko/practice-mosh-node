
const express = require('express')
const router = express.Router()
const Joi = require('joi')




const courses = [
    { id: 1, name: 'Some 1' },
    { id: 2, name: 'Some2' },
    { id: 3, name: 'Somee 3' },
    { id: 4, name: 'Some 4' },
    { id: 5, name: 'Somee 5' },
    { id: 6, name: 'Some 6' },

]


const validateInputs = (requestBody) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    })

    return validationRespons = schema.validate(requestBody)



}




router.get("/", (req, res) => {
    // Create the course and return the course object
    res.send(courses);
});

//-----------get individual course and return it 
router.get("/:id", (req, res) => {

    const courseId = parseInt(req.params.id);
    console.log(`hello cours id is ${typeof (req.params.id)}`);
    const course = courses.find((curs) => {
        return curs.id === courseId
    })
    // Create the course and return the course object
    if (!course) {
        res.status(404).send("Course not found!")
    } else { res.send(course); }
});
//-----------------------create post and return it 
router.post("/", (req, res) => {
    // if (!req.body.name || !req.body.name.length < 3) {
    //     res.status(400).send("Invalid Name or name too short")
    //     return
    // }else{

    // const schema = Joi.object({
    //     name: Joi.string().min(3).max(30).required()
    // })

    //const validationRespon = schema.validate(req.body)

    const validationRespon = validateInputs(req.body)


    // console.log("validationRespon", validationRespon.error);
    if (validationRespon.error) {
        res.status(400).send(validationRespon?.error?.details[0]?.message)
        return
    }

    const newCourse = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(newCourse)
    res.send(newCourse)
    // }

});



//----------------------------EDIT name, put request
router.put("/:id", (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find((curs) => curs.id === courseId);

    // If the course is not found, return a 404 error
    if (!course) {
        res.status(404).send("Course not found!");
        return;
    }

    // Validate the request body
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Invalid name or name too short");
        return;
    }

    // Update the course name and return the updated course object
    course.name = req.body.name
    res.send(course);
});




router.delete('/:id', (req, res) => {

    const courseId = parseInt(req.params.id);
    const course = courses.find((curs) => curs.id === courseId);
    if (!course) {
        res.status(404).send("Course not fund!")
        return
    }
    const index = courses.indexOf(course)
    if (index !== -1) {
        courses.splice(index, 1)
        res.send("Course deleted!")
    }


})


module.exports = router

