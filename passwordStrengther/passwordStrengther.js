const passwordStrengther=document.querySelector('.password-strengther::after')
const passwordInput=document.querySelector('input[type="text"]')
const passwordCheck=document.querySelector('.password-check')
passwordInput.addEventListener('input',updateStrengter)
function updateStrengter(){
    const assesments=EvaluateAssessment(passwordInput.value)
    let strength=100;

passwordCheck.innerHTML=''
assesments.forEach((assesment)=>{
    if (assesment == null) return;
    strength -= assesment.strengthLost;
const passwordEvaluation=document.createElement('p')
passwordEvaluation.innerHTML=assesment.pwdcheck
passwordCheck.appendChild(passwordEvaluation)
});
passwordStrengther.style.setProperty("--strength-amount", strength);


}
function EvaluateAssessment(password){
    const assesments=[]
    
    assesments.push(lengthAssessment(password))
    assesments.push(lowercaseCharaterAssesment(password))
   assesments.push(uppercaseCharaterAssesment(password))
   assesments.push(specialCharactersAssesment(password))
   assesments.push(NumberAssesment(password))

    return assesments
}
function lengthAssessment(password){
if(password.length < 5){
    return{
        pwdcheck:'password is too short',
        strengthLost:40,
    }
} 
if(password.length < 10){
    return {
        pwdcheck:'password  can be more  longer',
        strengthLost:15,
    }
}

}
function lowercaseCharaterAssesment(password ){
    const characterMatch=password.match(/[a-z]/g)||[]
  
     if(characterMatch.length==0){
        return {
            pwdcheck:'password has no lowercase characters',
            strengthLost:60,
        }
    }
    if(characterMatch.length<=2){
        return {
            pwdcheck:'the password  can take more lowercase characters',
            strengthLost:15,
        };
    }
   
}
function uppercaseCharaterAssesment(password ){
    const characterMatch=password.match(/[A-Z]/g)||[]
  
 if(characterMatch.length===0){
        return {
            pwdcheck:'password has no uppercase characters',
            strengthLost:60,
        }
    }
     if(characterMatch.length < 3){
        return {
            pwdcheck:'the password  can take more uppercase  characters',
            strengthLost:15,
        };
    }
   
}
function specialCharactersAssesment(password){
    
    const characterMatch=password.match(/[^0-9A-Za-z\s]/g) || []
    if(characterMatch.length === 0){
        return {
            pwdcheck:'the password has no special characters',
            strengthLost:30,
        }
    }
     if(characterMatch.length < 3){
        return {
            pwdcheck:'the password can take more special characters',
            strengthLost:15,
        };
    }
    
}
function NumberAssesment(password){
    const numberMatch=password.match(/[0-9]/g)||[]
    if(numberMatch.length ===0){
        return {
            pwdcheck:'the password has no Numbers',
            strengthLost:20,
        }
    } if(numberMatch.length<3){
        return {
            pwdcheck:"the password  can take more numbers",
             strengthLost:15,
        }
    }
    
}