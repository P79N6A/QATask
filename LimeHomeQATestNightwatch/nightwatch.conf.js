module.exports={
		
		 "src_folders" : ["Tests"],
		 'page_objects_path':['Page_Objects'],

		  "webdriver" : {
		    "start_process": true,
		    "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
		    "port": 9515
		  },

		  "test_settings" : {
		    "default" : {
		      "desiredCapabilities": {
		        "browserName": "chrome"
		      }
		    }
		  }
};