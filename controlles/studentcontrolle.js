import studentModel from "../models/studentmodel.js";

const studentController = {
    createNewStudent : async(req,res)=>{
        try{
            const newStudent = await studentModel.create(req.body)
            res.status(201).json({
                message:"student created successfully!!!",
                student:newStudent
            })
        }catch(error){
            console.log(error.message)
            res.status(500).json({
                message:"Internal server error"
            })
        }
    },
    getAllStudent : async (req,res)=>{
        try{
            const getStudent =await studentModel.find()
            res.status(200).json({
                message:"students retrieved successfully",
                student:getStudent
            })
        }catch (error){
            console.log(error.message)
            res.status(500).json({
                message:"Internal server Error"
            })
        }
    },
    getStudentId : async (req,res)=>{
        const retrievedStudent = await studentModel.findById(req.params.id)
        try{
            
            
                res.status(200).json(retrievedStudent)
            }
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            })
          }
    },
    getStudentByEmail:async(req,res)=>{
       
        try {
          
            const retrievedStudent = await studentModel.findOne({email:req.params.email})
              res.status(200).json(retrievedStudent)
          }
        catch (error) {
          res.status(500).json({
              message:"Internal Server Error"
          })
        }
      },
      updateStudent: async(req,res)=>{
        const updatedStudent = await studentModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
        try {
            
            
                res.status(200).json(updatedStudent)
            }
            
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    },
    deleteStudent: async(req,res)=>{
        const id =req.params.id;
            const deletedStudent = await studentModel.findByIdAndDelete(id);
        try {
            
                res.status(200).json(deletedStudent)
            }
            
         catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    }
}
export default studentController