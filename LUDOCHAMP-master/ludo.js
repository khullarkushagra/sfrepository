function getNames(){
	var p1 = document.getElementById("p1").value;
	var p2 = document.getElementById("p2").value;
	localStorage.setItem("p1",p1);
	localStorage.setItem("p2",p2);
	return false;
}

