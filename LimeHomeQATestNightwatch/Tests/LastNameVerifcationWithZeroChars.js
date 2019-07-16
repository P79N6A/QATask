/** 
	 * Test Case 3
	 * This Test case will verify if Last Name having 2 chars then Name should be visible in next page & URL
 */
module.exports={
		
		'Last Name Verification with zero chars':function(browser)
		{
			
			const driver=browser.page.LimeHomePages();
			var inputlastname=' ';
			
			driver
				.navigate()				
				.pause(2000)
				.waitForElementVisible('@TextLastName')
				.setval('@TextLastName',inputlastname)
				.pause(200)
				.waitForElementVisible('@TextBookingReference')
				.setval('@TextBookingReference','Booking123')
				.pause(200)
				.assert.attributeContains('@submitButton', 'ng-reflect-disabled', 'true',"Page navigated to next form")
				.assert.attributeContains('@TextLastName', 'aria-invalid', 'true',"Page navigated to next form")
				.end();
			
		}
	
};