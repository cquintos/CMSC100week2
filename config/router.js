var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
       router.route('/student')
             .get(student.find);
       return router;
};

module.exports = function(router){
       router.route('/teacher')
              .get(teacher.find)
              .post(teacher.add);
       return router;
};