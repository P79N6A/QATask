/** 
	 * Test Case 4
	 * This Test case will verify if Last Name having 5 chars then Name should be visible in next page & URL
 */
module.exports={
		
		'Longest Last Name Verification':function(browser)
		{
			
			const driver=browser.page.LimeHomePages();
			var inputlastname='Wolfeschlegelsteinhausenbergerdorf';
			
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
				.assert.attributeContains('@TextFormLastName', 'value', inputlastname,"Last Name didn't appeared")
				
				.end();
			
		}
	
};