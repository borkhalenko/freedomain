/* borkhalenko.freedomain.thehost.com.ua/tmpSite */
window.onload = function () {
	var obj=new Fibo();
	alert(obj.getFibo(5));
};

function Fibo(){
	this.prev=1;
	this.current=1;	
	this.getFibo=function(n){
		currentNumber=0;
		while (currentNumber!=n){
			this.getNextFibo(currentNumber);
			currentNumber++;
		}
		return this.current;
	};
}
Fibo.prototype.getNextFibo=function(){
	if (n==currentNumber){
		return prev;
	}
	if (n==currentNumber+1){
		return current;
	}
	var tmpNext=this.prev+this.current;
	this.prev=this.current;
	this.current=tmpNext;
	return tmpNext;
};