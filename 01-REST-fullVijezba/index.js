const express = require('express');
const Joi = require('joi')
const app = express()
app.use(express.json())

const courses = [
    { id: 1, name: 'Some Name 1' },
    { id: 2, name: 'Some Name 2' },
    { id: 3, name: 'Some Name 3' },
    { id: 4, name: 'Some Name 4' },
    { id: 5, name: 'Some Name 5' },
    { id: 6, name: 'Some Name 6' },

]


const validateInputs = (requestBody) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    })

    return validationRespon = schema.validate(requestBody)



}


app.get("/", (req, res) => {
    console.log(res);
    res.send("Hello freom server ");
});

app.get("/api/courses", (req, res) => {
    // Create the course and return the course object
    res.send(courses);
});

//-----------get individual course and return it 
app.get("/api/courses/:id", (req, res) => {

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
app.post("/api/courses", (req, res) => {
    // if (!req.body.name || !req.body.name.length < 3) {
    //     res.status(400).send("Invalid Name or name too short")
    //     return
    // }else{

    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    })

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
app.put("/api/courses/:id", (req, res) => {
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




app.delete('/api/courses/:id', (req, res)=>{

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


//-------------listenr for port 3000 - process.env.PORT  is not set 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening..." + port));
