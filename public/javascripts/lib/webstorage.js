function Storage(){
	this.supportWebStorage=window.sessionStorage;
}

Storage.prototype.getItem=function(name){
	//webstorage获取
	if(this.supportWebStorage){
		return window.sessionStorage.getItem(name);
	}
	//cookie获取
	else{
		if (document.cookie.length>0){
  			c_start=document.cookie.indexOf(name + "=");
  			if (c_start!=-1){ 
    			c_start=c_start + name.length+1; 
    			c_end=document.cookie.indexOf(";",c_start);
    			if (c_end==-1) c_end=document.cookie.length;
    			return unescape(document.cookie.substring(c_start,c_end));
    		}	 
  		}
		return "";
	}
};

Storage.prototype.setItem=function(name,value){
	//webstorage设置
	if(this.supportWebStorage){
		window.sessionStorage.setItem(name,value);
	}
	//cookie获取
	else{
		document.cookie=name+ "=" +escape(value)；
	}
};