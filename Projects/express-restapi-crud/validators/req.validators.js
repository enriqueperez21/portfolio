import mongoose from "mongoose";

const isVariableNotNull = (res, variable, errorMessage)=>{
  if(!variable){
    res.status(400).json({"error": errorMessage})
    return true;
  }
  return false;
}


const isIdValid = (res, id, errorMessage)=>{
  if(mongoose.Types.ObjectId.isValid(id)){
    return false;
  }
  res.status(400).json({"error": errorMessage})
  return true;
}

const isThisIdValid = (id)=>{
  if(mongoose.Types.ObjectId.isValid(id)){
    return true
  }
}

const isAllIdsValid = (res, ids)=>{
  let idErrorMessages = ""
  ids.map(id =>{
    let errorMessageId = "El id: "+ id + " no es reconocido como válido"
    if(!isThisIdValid(id)){
      idErrorMessages += errorMessageId +"-"
    }
  });
  let isSomeIdInvalid = (idErrorMessages !== "")
  if(isSomeIdInvalid){
    res.status(400).json({"error": idErrorMessages})
    return true
  }else{
    return false
  }
}

export const idsValidatorSubcategory = (req, res, next)=>{
  const idsSubcategory = req.body.subcategoriesIds
  const errorMessageNull = "No se ha recibido ningún id, mandar como *subcategoriesIds*"
  if(isVariableNotNull(res, idsSubcategory, errorMessageNull)){return}
  if(isAllIdsValid(res,idsSubcategory)){return}
  next()
}

export const idsValidatorCategory = (req, res, next)=>{
  const idsCategory = req.body.categoriesIds
  const errorMessageNull = "No se ha recibido ningún id, mandar como *categoriesIds*"
  if(isVariableNotNull(res, idsCategory, errorMessageNull)){return}
  if(isAllIdsValid(res,idsCategory)){return}
  next()
}

export const idValidatorSubcategory = (req, res, next)=>{
  const idSubcategory = req.params.id
  const errorMessageNull = "No se ha recibido el, mandar como *id*"
  if(isVariableNotNull(res, idSubcategory, errorMessageNull)){return}
  const errorMessageId = "El id: "+ idSubcategory+ " no es reconocido como válido"
  if(isIdValid(res, idSubcategory, errorMessageId)){return}
  next()
}

export const idValidatorCategory = (req, res, next)=>{
  const idCategory = req.params.id
  const errorMessageNull = "No se ha recibido el id, mandar como *id*"
  if(isVariableNotNull(res, idCategory, errorMessageNull)){return}
  const errorMessageId = "El id: "+ idCategory+ " no es reconocido como válido"
  if(isIdValid(res, idCategory, errorMessageId)){return}
  next()
}