/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"SecretRotationEvent","type":"object","properties":{"Step":{"enum":["createSecret","finishSecret","setSecret","testSecret"]},"SecretId":{"type":"string"},"ClientRequestToken":{"type":"string"}},"required":["Step","SecretId","ClientRequestToken"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.Step===void 0&&(missing0="Step")||data.SecretId===void 0&&(missing0="SecretId")||data.ClientRequestToken===void 0&&(missing0="ClientRequestToken")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.Step!==void 0){let data0=data.Step;const _errs2=errors;if(!(data0==="createSecret"||data0==="finishSecret"||data0==="setSecret"||data0==="testSecret")){validate10.errors=[{instancePath:instancePath+"/Step",schemaPath:"#/properties/Step/enum",keyword:"enum",params:{allowedValues:schema11.properties.Step.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.SecretId!==void 0){const _errs3=errors;if(typeof data.SecretId!=="string"){validate10.errors=[{instancePath:instancePath+"/SecretId",schemaPath:"#/properties/SecretId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs3===errors}else{var valid0=true}if(valid0){if(data.ClientRequestToken!==void 0){const _errs5=errors;if(typeof data.ClientRequestToken!=="string"){validate10.errors=[{instancePath:instancePath+"/ClientRequestToken",schemaPath:"#/properties/ClientRequestToken/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs5===errors}else{var valid0=true}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};