//Trade of between query performance vs consistency

//1. approach:  Using References ( Normalizations) - CONSISTENCY

let author = {
  name: "Zeljko Sehovac",
};
let course = {
  author: "id",
};

//2. approach:  Using Embedded Documents ( Denormalization ) -> PERFORMANCE
let courseNew = {
  name: { name: "id" },
};

//3 approach: Hybrid

let authorHybrid = {
  name: "Mosh",
  // 50 other properties
};

let courseHybrid = {
  author: {
    id: "ref",
    name: "Mosh",
  },
};
