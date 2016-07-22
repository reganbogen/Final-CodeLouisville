var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({name: 'Rage-O-Saurus Rex' , show: true, capacity: "250" , workshop: false});
      Course.create({name: 'Food Fight' , show: true, capacity: "300" , workshop: false});
      Course.create({name: 'Tricky FOx' , show: true, capacity: "60" , workshop: false});
      Course.create({name: 'Finger Puppets' , show: false, capacity: "30" , workshop: true});
      Course.create({name: 'Sock Puppets' , show: false, capacity: "30" , workshop: true});
      Course.create({name: 'Shadow Puppets' , show: false, capacity: "30", workshop: true});
    }
  })
}

exports.createDefaultCourses = createDefaultCourses;