

var products = [{image: '../images/products/img1.jpg' , 
                 name: "Valve Index" , 
                 price: "$999.99",
                 desc: "Includes the controllers and base stations \n Screen resolution: 1440x1600 OLED @ 120HZ"},
                 {image: '../images/products/img2.jpg' , 
                 name: "Tesla Model 3" , 
                 price: "$35,000",
                 desc: "4 door, 130MPGe, 5 seat sedan, Base model"},
                 {image: '../images/products/img3.jpg' , 
                 name: "Oculus Quest 64gb" , 
                 price: "$399.00",
                 desc: "Standalone headest that is great for protability, 1440x1600 LED @ 72HZ"},
                 {image: '../images/products/img4.jpg' , 
                 name: "IRobot ROomba 960 Sereis" , 
                 price: "$399.99",
                 desc: "5x the power as other elading brands, multi room coverage"},
                 {image: '../images/products/img5.jpg' , 
                 name: "DJI mavic Mini" , 
                 price: "$399.00",
                 desc: "2.7k camera with 3-axis gimbal, GPS, 30 Min flight time"},
                 {image: '../images/products/img6.jpg' , 
                 name: "Tesla Cyber Truck" , 
                 price: "$50,000",
                 desc: "I mean, this thing speaks for itself"},
                 {image: '../images/products/img7.jpg' , 
                 name: "Tesla Solar Roof" , 
                 price: "$7.00/sq. ft",
                 desc: "Be clean and let the sun power your house for little more than regular shingles"},
                 {image: '../images/products/img8.jpg' , 
                 name: "Rivian R1T" , 
                 price: "$69,000",
                 desc: "THis electric truck lasts 400 miles and is out for pre order for $1000"},]


window.onload = function(){
    for (var i = 0; i < products.length; i++) {
        var div = document.createElement('div')
        div.style.cssText = 'margin: 15px; padding: 15px; border: 2px solid black; border-radius: 15px; width: 250px; text-align: center; '
        var img = "<img class='prodImg' src='"+ products[i].image + "' style='width: 200px'" + " />"
        div.innerHTML += img
        div.innerHTML += "<hr>"
        div.innerHTML += "<h2>" + products[i].name + "</h2>";
        div.innerHTML += ("<h3>" + products[i].price + "</h3>")
        div.innerHTML += ("<p>" + products[i].desc + "</p>")
        document.getElementById("pbox").appendChild(div)
    }
}


