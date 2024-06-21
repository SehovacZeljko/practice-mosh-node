const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not load MongoDB!!!", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

//-------------------------------------Referencing the other document
// new mongoose.Schema({
//     name: String,
//     author: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Author",
//     },
//   })
//   This code creates a new Mongoose schema. A schema defines the structure of the documents within a collection in MongoDB.

//   name: String: This defines a name field of type String for the document.
//   author: This defines an author field that will store an ObjectId reference to another document in the Author collection.
//   type: mongoose.Schema.Types.ObjectId: This specifies that the author field will store an ObjectId.
//   ref: "Author": This tells Mongoose that the ObjectId stored in author will reference a document in the Author collection.

//--------------------------------------------------------------------------------------

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = course.save();
  console.log(course);
}

async function listCourses() {
  const courses = await Course.find().select("name");
  console.log(course);
}

//createAuthor("Zeljko new", "My Bio two ", "My Website");
createCourse("React Course", "66741cb659281b282e21fc20");
//listCourses()
