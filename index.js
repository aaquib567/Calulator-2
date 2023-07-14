function Solve(val){
	var v = document.getElementById('res');
	v.value += val;
}
function Clear(){
	var input = document.getElementById('res');
	input.value = '';
}
function Result(){
	var num1= document.getElementById('res').value;
	var num2=eval(num1);
	document.getElementById('res').value=num2;
}