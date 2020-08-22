<?php
	// Set Access Control on File
	header('Access-Control-Allow-Origin: *');
	
	class LinkedIn_Controller{	
		public $linkedInUrl = 'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,emailAddress,profilePicture(displayImage~:playableStreams))&oauth2_access_token=AQVxl6PwYd7TY16EjW0Zae39q5RhRkXVBTqwoLhUIX6WMDaRb_QlMlW5drHg92BZ781DC39NGtYGu7VEKN5GvxLK-XGyY9hlOScK7se1GWJth1XDj-mQmBHHCnmwOra0-taMXR6nP3WmzgwLN52-iSkCMXU8Ej7zAnwNOmrhpLBQLTiy2mSFcIxUOtZskDdAswJuQQvr41FPK13swJJ7rt9u9noSUUvc74DDXGHDzRT5ZZ2SF341ntRWr35rzUKx0PK0MXYg6rAf0rKaX87Gfd1xnnlJAOTYWoDzhnORnX1sCL40qYF652QYjOPGRY5LzBhcB2KK-MLXIN5mWXqNCqQAgXky5g';		
		
		function __construct(){
			$this->fetchLinkedIn();
		}

		public function fetchLinkedIn(){
			$initCurlObj = curl_init();
			curl_setopt($initCurlObj, CURLOPT_RETURNTRANSFER,true);
			curl_setopt($initCurlObj, CURLOPT_URL, $this->linkedInUrl);
			$strResult = curl_exec($initCurlObj);

			$objResults = json_decode(json_encode($strResult));
			echo '<pre>';
			var_dump(json_decode($objResults->firstName));
			echo '</pre>';

		}		
	}

	$objClass = new LinkedIn_Controller();
	$objClass->fetchLinkedIn();
?>