

function isOperator(value){

	if(value == '+'){
		operator = '+';
		return true;
	}

	else if(value == '-'){
		operator = '-';
		return true;
	}

	else if(value == '*'){
		operator = '*';
		return true;
	}

	else if(value == '/'){
		operator = '/';
		return true;
	}

	else if(value == '%'){
		operator = '%';
		return true;
	}

	return false;

}


function doCalculations(){

	var value = this.getAttribute("id");

	if(value == "AC"){
		content.innerText = "";
	}


	else if(value == '+-'){
		content.innerText = -content.innerText;
	}

	else if(value == '.'){
		content.innerText+= "."; 
	}


	else if(isOperator(value)){
		op1 = parseFloat(content.textContent);
	 	content.innerText = "";
	}


	else if(value == '='){
		op2 = parseFloat(content.textContent);

		if(operator == '/' && op2 == 0){
			result = "Error";
		}

		else if(operator == '%'){
			result = eval(op1 + " " + '/' + '100');
		}

		else{

			result = eval(op1 + " " + operator + " " + op2);
		}	

		if(isNaN(result)){
			result = "Error";
		}

		
		content.innerText = result;
	}

	else{
		content.innerText+=value;
	}
}


var operator = null;
var op1 = null;
var op2 = null;
var result = null;

var content = document.getElementById('content');
var btn = document.getElementsByClassName('btn');


for(var i=0; i < btn.length; i++){

	btn[i].addEventListener('click',doCalculations);
	
} 