export function performLoginOperation(userCredential) {
	return (dispatch) => {
		//ajax call 
         var url = '/api/console.php/login/username/password'
         //tempory send UserId, token for testing
         var parameters = "";
         var callback = function(res){
            var response = JSON.parse(res);
            /*response = {
                        "success" : 212,
                        "perms" : {"1001":{"roles":[{"id":"8","role":"ADMIN"}}
            

            }*/

             //check for error
              if(response.hasOwnProperty('error')){
                //  throw error
                //  toastr.error(ServerErrorMessages.getError(response.error).message, ServerErrorMessages.getError(response.error).title); 
                  dispatch({
                             type: "LOGIN_FAIL"
                            
                          });
              }else if(response.hasOwnProperty('info')){
            //check for message
            //      toastr.warning(ServerInfoMessages.getInfo(response.info).message, ServerInfoMessages.getInfo(response.info).title); 
                  dispatch({
                             type: "LOGIN_FAIL"
                            
                          });
              }else if(response.hasOwnProperty('success')){
            //get result

                  //toastr.success(ServerSuccessMessages.getSuccess(response.success).message, ServerSuccessMessages.getSuccess(response.success).title); 
                  dispatch({
                             type:"LOGIN_SUCCESS",
                             payload:{
                                 'userID': userCredential.userid,
                                 'perms': JSON.parse(response.perms),
                                 'firstName': response.firstName,
                                 'lastName': response.lastName,
                                 'email': response.email,
                                 'Image': response.Image
                
                             }
                          });
              }


         }                 
         makePOSTAjaxCall(url, parameters, callback , true);


	}	




}	