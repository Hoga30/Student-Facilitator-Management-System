import facilitatorModel from "../models/facilitatormodel.js";

const facilitatorController = {
    createNewFacilitator : async(req,res)=>{
        try{
            const newFacilitator = await facilitatorModel.create(req.body)
            res.status(201).json({
                message:"student created successfully!!!",
                facilitator:newFacilitator
            })
        }catch(error){
            console.log(error.message)
            res.status(500).json({
                message:"Internal server error"
            })
        }
    },
    getAllFacilitator : async (req,res)=>{
        try{
            const getFacilitator =await facilitatorModel.find()
            res.status(200).json({
                message:"students retrieved successfully",
                student:getFacilitator
            })
        }catch (error){
            console.log(error.message)
            res.status(500).json({
                message:"Internal server Error"
            })
        }
    },
    getFacilitatorId : async (req,res)=>{
        const retrievedFacilitator = await facilitatorModel.findById(req.params.id)
        try{
            
            
                res.status(200).json(retrievedFacilitator)
            }
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            })
          }
    },
    getFacilitatorByEmail:async(req,res)=>{
       
        try {
          
            const retrievedFacilitator = await facilitatorModel.findOne({email:req.params.email})
              res.status(200).json(retrievedFacilitator)
          }
        catch (error) {
          res.status(500).json({
              message:"Internal Server Error"
          })
        }
      },
      updateFacilitator: async(req,res)=>{
        
        try {
            const updatedFacilitator = await facilitatorModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
                res.status(200).json(updatedFacilitator);
                facilitator:updatedFacilitator
            }
            
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    },
    deleteFacilitator: async(req,res)=>{
        const id =req.params.id;
            const deletedFacilitator = await facilitatorModel.findByIdAndDelete(id);
        try {
            
                res.status(200).json(deletedFacilitator)
            }
            
         catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    }
}
export default facilitatorController