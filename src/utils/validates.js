export const validateCradentials = ( email, Password) =>
{
   const IsEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/.test(email);
   const IspasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(Password);

   if(!IsEmailValid) 
   {
    //  return 1;
     return "Email is not valid";
   }
    
   if(!IspasswordValid) 
   {
      //  return 2;
       return "Password is not valid";
   }

    return null;
}