function log(req, res, next) {
    console.log('Logging');
    next();
}

// function auth(req, res, next) {
//     console.log('Authenticating');
//     next();
// }

module.exports = log;
//module.exports = auth;












// const Joi = require('joi'); 
// const express = require('express');
// const app = express();
// app.use(express.json());

// const courses = [
//     {id:1, name:"course1"},
//     {id:2, name:"course2"},
//     {id:3, name:"course3"},
// ]

// app.post('/api/courses', (req,res) => {
//     const {error} = validateCourse(req.body);
//     if(error) {
//       res.status(400).send(error.details[0].message);
//         return;
//     }
//     const course = {
//         id: courses.length +1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req,res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) res.status(404).send('updated');

//     const {error} = validateCourse(req.body);
//     if(error) {
//         res.status(400).send(error.details[0].message);
//           return;
//       }
//       courses.push(course);
//       res.send(course);
// });
// function validateCourse(course) {
//     const  schema = {
//         name:Joi.string().min(3).required()
//      };
// }//Port
// const port = process.env.PORT  || 3000;

// app.listen(port, () => 
// console.log(`Listening on port ${port}`));