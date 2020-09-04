
function tabcontent(){
	document.getElementById("content").style["display"]="inline-block";
}
function addtopic(x){
	x.innerHTML="Add Topic +";
	x.style["font-weight"]="500";
	x.style["border-radius"]="1.2em";
}
function removetopic(x){
	x.innerHTML="+";
	x.style["font-weight"]="600";
	x.style["border-radius"]="50%;";
}
function closemodal(){
	document.getElementById("modal1").style["display"]="none";
}
function closemodal1(){
	document.getElementById("modal2").style["display"]="none";
}
function tabcontent(){
	document.getElementById("modal1").style["display"]="flex";
}
function tabcontent1(){
	document.getElementById("modal2").style["display"]="flex";
}
function addcontent(){
	document.getElementById("modal2").style["display"]="none";
	var content=document.getElementById("ta").value;
	document.getElementById("ta").value = "";
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("timeline").innerHTML=this.responseText+document.getElementById("timeline").innerHTML;
      }
    };
    xmlhttp.open("GET","getuser.php?q="+content,true);
    xmlhttp.send();

}

function deletepost(id){
	var ctid="com"+id;
	document.getElementById(ctid).style["display"]="none";
	var delid=id.toString();
	document.getElementById(delid).style["display"]="none";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","delete.php?q="+delid,true);
    xmlhttp.send();
}

function editpost(id){
	var edid=id.toString();
	console.log(id);
	console.log(edid);
	document.getElementById("modal2").style["display"]="flex";
	document.getElementById("editbtn").innerHTML="EDIT";
	document.getElementById("editbtn").onclick=function() { editing(edid)};
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ta").value=this.responseText;
      }
    };
	xmlhttp.open("GET","modal.php?q="+edid,true);
    xmlhttp.send();

	
}

function editing(id){
	var content=document.getElementById("ta").value;
	document.getElementById("modal2").style["display"]="none";
	document.getElementById("editbtn").innerHTML="ADD";
	document.getElementById("editbtn").onclick=function() {addcontent()};
	document.getElementById("ta").value="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("topic"+id).innerHTML=this.responseText;
      }
    };
	xmlhttp.open("GET","edit.php?q="+id+"&p="+content,true);
    xmlhttp.send();
}

function discard(){
	document.getElementById("modal2").style["display"]="none";
	document.getElementById("ta").value="";
}

function comment(id){
	var ctid="com"+id;
	var noid="no"+id;
	var csid="cs"+id;
	var content=document.getElementById(csid).value;
	console.log(content);
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(ctid).innerHTML=this.responseText+document.getElementById(ctid).innerHTML;
      }
    };
    xmlhttp.open("GET","addcomment.php?q="+content+"&p="+id,false);
    xmlhttp.send();
    document.getElementById(csid).value = "";
    var xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(noid).innerHTML=this.responseText;
      }
    };
    xmlhttp1.open("GET","commentno.php?q="+id,true);
    xmlhttp1.send();
}

function showcomments(id){
	var ctid="com"+id;
	if(document.getElementById(ctid).style["display"]=="none"){
		document.getElementById(ctid).style["display"]="block";
	}
	else{
		document.getElementById(ctid).style["display"]="none";
	}

	
}

function likes(id){
	var likeid="like"+id;
	var dislikeid="dislike"+id;
	if(document.getElementById(dislikeid).style["color"]=="rgb(13, 153, 215)"){
		dislikes(id);
	}
	if(document.getElementById(likeid).style["color"]=="rgb(13, 153, 215)"){
		document.getElementById(likeid).style["color"]="rgb(147, 149, 152)";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
	      if (this.readyState == 4 && this.status == 200) {
	        document.getElementById(likeid).innerHTML=this.responseText;
	      }
	    };
	    xmlhttp.open("GET","removel.php?q="+id,true);
	    xmlhttp.send();
	}
	else{
		document.getElementById(likeid).style["color"]="rgb(13, 153, 215)";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
	      if (this.readyState == 4 && this.status == 200) {
	        document.getElementById(likeid).innerHTML=this.responseText;
	      }
	    };
	    xmlhttp.open("GET","addl.php?q="+id,true);
	    xmlhttp.send();
	}	
}

function dislikes(id){
	var likeid="like"+id;
	var dislikeid="dislike"+id;
	if(document.getElementById(likeid).style["color"]=="rgb(13, 153, 215)"){
		likes(id);
	}
	if(document.getElementById(dislikeid).style["color"]=="rgb(13, 153, 215)"){
		document.getElementById(dislikeid).style["color"]="rgb(147, 149, 152)";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
	      if (this.readyState == 4 && this.status == 200) {
	        document.getElementById(dislikeid).innerHTML=this.responseText;
	      }
	    };
	    xmlhttp.open("GET","removed.php?q="+id,true);
	    xmlhttp.send();
	}
	else{
		document.getElementById(dislikeid).style["color"]="rgb(13, 153, 215)";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
	      if (this.readyState == 4 && this.status == 200) {
	        document.getElementById(dislikeid).innerHTML=this.responseText;
	      }
	    };
	    xmlhttp.open("GET","addd.php?q="+id,true);
	    xmlhttp.send();
	}	
}