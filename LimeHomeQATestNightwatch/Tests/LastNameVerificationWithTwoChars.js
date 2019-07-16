/** 
	 * Test Case 2
	 * This Test case will verify if Last Name having 2 chars then Name should be visible in next page & URL
 */
module.exports={
		
		'Last Name Verification with two chars':function(browser)
		{
			
			const driver=browser.page.LimeHomePages();
			var inputlastname='Vi';
			
			driver
				.navigate()				
				.pause(2000)
				.waitForElementVisible('@TextLastName')
				.setval('@TextLastName',inputlastname)
				.pause(200)
				.waitForElementVisible('@TextBookingReference')
				.setval('@TextBookingReference','Booking123')
				.pause(200)
				.clickbutton('@submitButton')
				.pause(2000)
				.waitForElementVisible('@TextFormLastName')
				.assert.urlContains(inputlastname)
				.assert.attributeContains('@TextFormLastName', 'ng-reflect-model', inputlastname,"Last Name didn't appeared")
				.end();
			
		}
	
};