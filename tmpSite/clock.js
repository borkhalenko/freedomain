/* borkhalenko.freedomain.thehost.com.ua/algorithms/ */
window.onload = function () {
	var myBox=new Box(2,5,10);
	alert(myBox.toString()+" Volume:"+myBox.getCapacity());
	
};

function Box(x,y,z){
	this.length=x;
	this.width=y;
	this.height=z;
	this.toString=function(){
		string="Length:"+this.length+", Width="+this.width+", Height="+this.height;
		return string;
	};	
}
	Box.prototype={
		getCapacity:function(){
		return this.length*this.width*this.height;
		}
	};