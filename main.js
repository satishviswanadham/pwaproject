function Loadjson(file,callback){
var x = new XMLHttpRequest();
x.overrideMimeType("application/json");
x.open("GET",file,true);
x.onreadystatechange=function(){
  if(x.readyState===4 && x.status == "200"){
    callback(x.responseText);
  }
};
x.send(null);
}
Loadjson("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
})

var child1 = document.querySelector(".child1");

function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent=det.name;
  child1.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent=det.phoneno;
  child1.appendChild(phoneno);

  var email = document.createElement("a");
  email.href="satishviswa8424@gmail.com";
  email.textContent=det.email;
  child1.appendChild(email);

  var Address = document.createElement("h2");
  Address.textContent=det.Address;
  child1.appendChild(Address);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  v
}
