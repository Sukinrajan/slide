var counter=1;
		setInterval(function(){
			document.getElementById('rd'+counter).checked=true;
			counter++;//counter = counter+1;
			if(counter>3){
				counter=1;
			}
		},3000);


        let x = 10;

       