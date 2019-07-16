module.exports = {
    url: 'https://limehome-qa-task.herokuapp.com/',
    elements: {
    	
        TextLastName: {
        	selector:"//input[@formcontrolname='lastName']",
        	 locateStrategy: 'xpath'
        },        
        TextBookingReference:
        {
        	selector:"//input[@formcontrolname='bookingReference']",
        	locateStrategy: 'xpath'
        },
        submitButton: 
        {
        	selector:"//button[@class='mat-button']",
        	locateStrategy: 'xpath'
        },
        TextFormLastName:
        {
        	selector:"//div[@class='booking-details ng-star-inserted']//div[@class='col-form-4'][2]//input[1]",
        	locateStrategy: 'xpath'
        }
        
    },
    commands: [{
    	
        setval(element,value) {
            return this            	
                .setValue(element, value);
        },
        clickbutton(element) {
            return this
                .click(element);
        }
    }]
};