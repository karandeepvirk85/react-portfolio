<?php
	header("Access-Control-Allow-Origin: *");
	class Email_Controller{	
		function __construct(){
			$arrJsonContent = file_get_contents("php://input");
			@$this->sendEmail($arrJsonContent);
		}
		public function sendEmail($arrRestData){
			$arrData  	  = json_decode($arrRestData,true);
			$strEmail  	  = isset($arrData['email'])  	   	? $arrData['email'] : '';
			$strName 	  = isset($arrData['name'])  		? $arrData['name'] : '';
			$strMessage   = isset($arrData['message'])   	? $arrData['message'] : '';
			if(mail('virkkarandeep85@gmail.com',$strName, $strMessage)){
				echo json_encode(array(
					"sent" => true
				));
			}else{
				echo json_encode(["sent" => false, "message" => "Something went wrong"]);
			}
		}		
	}
	new Email_Controller();
?>