function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 &&
      xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
   career(data.career);
  education(data.education);
skills(data.skills);
})
 var child2=document.querySelector(".child2");
function career(chead){
   var chead=document.createElement("h2");   chead.textContent="Career Objective";
  child2.appendChild(chead);   var chr=document.createElement("hr");
   child2.appendChild(chr);
   var cp=document.createElement("p");
  cp.textContent=c.info;
     child2.appendChild(cp);
 }
 function education(edu){
  var ehead=document.createElement("h2");
   ehead.textContent="educational Details";
  child2.appendChild(ehead);
   var ehr=document.createElement("hr");
   child2.appendChild(ehr);
     let etable=document.createElement("table");
 etable.border="1";
  var tr1="<tr><td>degree</td><td>Institution</td><td>yop</td><td>percentage</td></tr>";
 var tr2="";
   for(i=0;i<edu.length;i++){
    tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].Institution+"</td><td>"+edu[i].yop+"</td><td>"+edu[i].percentage+ "</td></tr>";
 }
 etable.innerHTML=tr1+tr2;
 child2.appendChild(etable);
}
function  skills(skill){
   var shead=document.createElement("h2");
   shead.textContent="Skill development";
   child2.appendChild(shead);
 var shr=document.createElement("hr");
   child2.appendChild(shr);
   var sul=document.createElement("ul");
  child2.appendChild(ul);
   for(i=0;i<skill.length;i++){
  var li=document.createElement("li");
  li.textContent=skill[i].title+":"+skill[i].content;
  ul.appendChild(li);
  }
}
