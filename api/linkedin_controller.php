<?php
	// Set Access Control on File
	header('Access-Control-Allow-Origin: *');
	class LinkedIn_Controller{	
	
		public static $accessToken = 'AQVxl6PwYd7TY16EjW0Zae39q5RhRkXVBTqwoLhUIX6WMDaRb_QlMlW5drHg92BZ781DC39NGtYGu7VEKN5GvxLK-XGyY9hlOScK7se1GWJth1XDj-mQmBHHCnmwOra0-taMXR6nP3WmzgwLN52-iSkCMXU8Ej7zAnwNOmrhpLBQLTiy2mSFcIxUOtZskDdAswJuQQvr41FPK13swJJ7rt9u9noSUUvc74DDXGHDzRT5ZZ2SF341ntRWr35rzUKx0PK0MXYg6rAf0rKaX87Gfd1xnnlJAOTYWoDzhnORnX1sCL40qYF652QYjOPGRY5LzBhcB2KK-MLXIN5mWXqNCqQAgXky5g';		
	
		function __construct(){
			static::fetchLinkedIn();
		}

		public static function fetchLinkedIn(){
			var_dump("hello");
		}		
	} 
	new LinkedIn_Controller();
?>