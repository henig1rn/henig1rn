let $ = function (id) { return document.getElementById(id); };

//Hamburger menu
var toggle = 1;
function navBTN() {
  if (toggle == 1){
      $("nav").style.marginTop = '50px'
      $("navBlock").style.borderRadius = " 0 0 0 0"
      toggle = 0
      
  }else if (toggle == 0){
      $("nav").style.marginTop = '-565px'
      $("navBlock").style.borderRadius = "0 0 0 15px"
      toggle = 1

  }
};

//register
function register(){

  var fName = $("fName").value
  var lName = $("lName").value
  var phone = $("phone").value
  var zip = $("zip").value
  var email = $("email").value
  var pass = $("pass").value
  //set to storage
  localStorage.setItem("firstName", fName)
  localStorage.setItem("lastName", lName)
  localStorage.setItem("cellPhone", phone)
  localStorage.setItem("zipCode", zip)
  localStorage.setItem("eMail", email)
  localStorage.setItem("password", pass)
};

function getReg(){
  $("firstName").innerText = "First Name: " + localStorage.getItem("firstName")
  $("lastName").innerText = "Last Name: " + localStorage.getItem("lastName")
  $("phoneNumber").innerText = "Phone Number: " + localStorage.getItem("cellPhone")
  $("zipCode").innerText = "Zip Code: " + localStorage.getItem("zipCode")
  $("eMail").innerText = "E-Mail: " + localStorage.getItem("eMail")
  $("password").innerText = "Password: " + localStorage.getItem("password").charAt(0) + "*****"
};

//admin page

function login(){
  if($("userL").value == "ryan" && $("passL").value == "password"){
    $("adminP").style.display="block"
  }else{
    alert("Your username or passord is wrong")
  }
};
// Add to table
function addT(){
  var table = $("table")
  var item = $("addI").value
  var price = "$" + $("addP").value
  var quantity = $("addQ").value
  
  var tr = document.createElement('tr')
  tr.innerHTML = "<td>" + item + "</td>" + "<td>" + price + "</td>" + "<td>" + quantity + "</td>"
  table.appendChild(tr)
  
  clear()
}
// clear table
function clear(){
  $("addI").value = ""
  $("addP").value = ""
  $("addQ").value = ""
}

//order
function order(){
  var total = 0
  var c = 0
  var indexC = $("indexC").checked;
  var indexQ = $("indexQ").value;
  localStorage.setItem("indexCh", indexC)
  localStorage.setItem("indexQh", indexQ)

  if(indexC == true){
    $("indexQ").disabled = false
    total += (999.99 * indexQ)
    c  += parseInt(indexQ)
  }else{
    $("indexQ").disabled = true
  }

  var model3C = $("model3C").checked;
  var model3Q = $("model3Q").value;
  localStorage.setItem("model3Ch", model3C)
  localStorage.setItem("model3Qh", model3Q)
  if(model3C == true){
    $("model3Q").disabled = false
    total += (35000 * model3Q)
    c  += parseInt(model3Q)
  }else{
    $("model3Q").disabled = true
  }

  var questC = $("questC").checked;
  var questQ = $("questQ").value;
  localStorage.setItem("questCh", questC)
  localStorage.setItem("questQh", questQ)
  if(questC == true){
    $("questQ").disabled = false
    total += (399 * questQ)
    c  += parseInt(questQ)
  }else{
    $("questQ").disabled = true
  }

  var roombaC = $("roombaC").checked;
  var roombaQ = $("roombaQ").value;
  localStorage.setItem("roombaCh", roombaC)
  localStorage.setItem("roombaQh", roombaQ)
  if(roombaC == true){
    $("roombaQ").disabled = false
    total += (399.99 * roombaQ)
    c  += parseInt(roombaQ)
  }else{
    $("roombaQ").disabled = true
  }

  var droneC = $("droneC").checked;
  var droneQ = $("droneQ").value;
  localStorage.setItem("droneCh", droneC)
  localStorage.setItem("droneQh", droneQ)
  if(droneC == true){
    $("droneQ").disabled = false
    total += (399.99 * droneQ)
    c  += parseInt(droneQ)
  }else{
    $("droneQ").disabled = true
  }

  var cyberC = $("cyberC").checked;
  var cyberQ = $("cyberQ").value;
  localStorage.setItem("cyberCh", cyberC)
  localStorage.setItem("cyberQh", cyberQ)
  if(cyberC == true){
    $("cyberQ").disabled = false
    total += (50000 * cyberQ)
    c  += parseInt(cyberQ)
  }else{
    $("cyberQ").disabled = true
  }

  var roofC = $("roofC").checked;
  var roofQ = $("roofQ").value;
  localStorage.setItem("roofCh", roofC)
  localStorage.setItem("roofQh", roofQ)
  if(roofC == true){
    $("roofQ").disabled = false
    total += (7 * roofQ)
    c  += parseInt(roofQ)
  }else{
    $("roofQ").disabled = true
  }

  var truckC = $("truckC").checked;
  var truckQ = $("truckQ").value;
  localStorage.setItem("truckCh", truckC)
  localStorage.setItem("truckQh", truckQ)
  if(truckC == true){
    $("truckQ").disabled = false
    total += (69000 * truckQ)
    c  += parseInt(truckQ)
  }else{
    $("truckQ").disabled = true
  }
  
  var saved = 0
  if($("code").value != ""){
    if($("code").value == "ryan"){
      saved = total * .1
      total -= saved
      localStorage.setItem("saved", saved)
      alert("The code, " + $("code").value +", saved you $" + parseInt(saved).toFixed(2) )
    }else{
      alert("The code, " + $("code").value +", did not work try another one")
    }
  }else{
    saved = 0
    localStorage.setItem("saved", saved)
  }
  localStorage.setItem("orderTotal", total)
  $("cart").innerText = c
  $("total").innerText = "Total: $" + total.toFixed(2)
}

//invoice
function getInvoice(){
    var vC = localStorage.getItem("indexCh")
    var vQ = localStorage.getItem("indexQh")
    if(vC == "true"){
      $("vN").innerText = "Valve Index"
      $("vQ").innerText = vQ
      $("vT").innerText = (vQ * 999.99).toFixed(2)
    }

    var tC = localStorage.getItem("model3Ch")
    var tQ = localStorage.getItem("model3Qh")
    if(tC == "true"){
      $("tN").innerText = "Tesla Model 3"
      $("tQ").innerText = tQ
      $("tT").innerText = (tQ * 35000).toFixed(2)
    } 

    var qC = localStorage.getItem("questCh")
    var qQ = localStorage.getItem("questQh")
    if(qC == "true"){
      $("qN").innerText = "Oculus Quest 64GB"
      $("qQ").innerText = qQ
      $("qT").innerText = (qQ * 399).toFixed(2)
    }

    var rC = localStorage.getItem("roombaCh")
    var rQ = localStorage.getItem("roombaQh")
    if(rC == "true"){
      $("rN").innerText = "Roomba 960 Series"
      $("rQ").innerText = rQ
      $("rT").innerText = (rQ * 399.99).toFixed(2)
    }

    var dC = localStorage.getItem("droneCh")
    var dQ = localStorage.getItem("droneQh")
    if(dC == "true"){
      $("dN").innerText = "DJI Mavic Mini"
      $("dQ").innerText = dQ
      $("dT").innerText = (dQ * 399).toFixed(2)
    }

    var cC = localStorage.getItem("cyberCh")
    var cQ = localStorage.getItem("cyberQh")
    if(cC == "true"){
      $("cN").innerText = "Tesla Cyber Truck"
      $("cQ").innerText = cQ
      $("cT").innerText = (cQ * 50000).toFixed(2)
    }

    var sC = localStorage.getItem("roofCh")
    var sQ = localStorage.getItem("roofQh")
    if(sC == "true"){
      $("sN").innerText = "Tesla Solar Roof"
      $("sQ").innerText = sQ
      $("sT").innerText = (sQ * 7).toFixed(2)
    }

    var xC = localStorage.getItem("truckCh")
    var xQ = localStorage.getItem("truckQh")
    if(xC == "true"){
      $("xN").innerText = "Rivian R1T"
      $("xQ").innerText = xQ
      $("xT").innerText = (xQ * 69000).toFixed(2)
    }
    
    var save = localStorage.getItem("saved")
    if(save != 0){
      $("saved").innerText = "Your coupon saved you: $" +  parseInt(save).toFixed(2)
    }

    $("inTotal").innerText = "Total: $" + parseInt(localStorage.getItem("orderTotal")).toFixed(2)
  
}

//utility
function getPPI(){
  //ppi
  var diag = Math.sqrt(($("width").value * $("width").value) + ($("height").value * $("height").value) )
  var total = (diag/$("diagonal").value)
  //total pixels
  var totalP = $("width").value * $("height").value
  $("ppiTotal").innerText ="PPI: " + total.toFixed(2)
  $("totalP").innerText ="Total Pixels: " + totalP.toFixed(2)
}

function getLoan(){
  var amount = $("amount").value
  var n = $("years").value *12
  var i = ($("rate").value / 100)/12
  var pow = Math.pow((1+i), n )
  var one = amount *  i * pow
  var two = pow - 1
  var total = one/two

  $("monthlyT").innerText = "Monthly Payment: $" + total.toFixed(2)
  $("interest").innerText = "Total Interest: $" + ((total * n) - amount).toFixed(2)
}