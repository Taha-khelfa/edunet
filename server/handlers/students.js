const db = require('../database/db');
exports.getCoursesEnrolled = async (req, res, next) => {
    try{
        const {id} = req.params 

        const student = await db.Student.findOne({where : {id : id}})

        if(!student){
            res.status(404).json('No student with this id');
        }
        
        const subscribe = await db.Course_Student.findAll({ where :
                {
                    studentId: id
                }
        });
        res.status(201).json({subscribe, student});
    }
    catch(err) {
        res.status(400);
        next(err)
    }
}