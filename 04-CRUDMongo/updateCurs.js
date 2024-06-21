const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not load MongoDB!!!", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) {
    console.log("Course not found!");
    return;
  }

  // course.name = 'New name'
  // course.isPublished = true
  course.set({ isPublished: true, name: "Newest name!!!" });

  const saveReault = await course.save();
  console.log(saveReault, "Course updated successfuly");
}

updateCourse("667400cc5e4d50b86027c422");
