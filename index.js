//exports.handler = async function (event) {};


var buff = Buffer.from('Matrix') ;
var optimoleKey = buff.toString('base64');
console.log(optimoleKey)
const sharp = require("sharp");
var img1 = (500*500)/(1280*720)*100 ;
var img2 = ((500*500)/(1000*1000)) *100;
var img3 = ((500*500)/(640*640)) *100;
var img4 = ((500*500)/(2500*2500)) *100;
var img5 = ((500*500)/(1920*1276)) *100;
var img6 = ((500*500)/(626*417)) *100;
var img7 = ((500*500)/(705*240)) *100;


function resize(password){

	if (password == optimoleKey){

		sharp("images/image1.jpg").resize(500,500).toFile("optimized/image1.jpg")
		sharp("images/image2.svg").resize(500,500).toFile("optimized/image2.jpg")
		sharp("images/image3.gif").resize(500,500).toFile("optimized/image3.jpg")
		sharp("images/image4.png").resize(500,500).toFile("optimized/image4.jpg")
		sharp("images/image5.png").resize(500,500).toFile("optimized/image5.jpg")
		sharp("images/image6.jpg").resize(500,500).toFile("optimized/image6.jpg")
		sharp("images/image7.jpg").resize(500,500).toFile("optimized/image7.jpg")


		
		var pass = buff.toString('ascii');

		console.log("pass: " + pass + '\n' + "filePath: " + "optimized/image1.jpg" + " ,procent: "+ img1.toFixed(1) + '\n'
					  + "filePath: " + "optimized/image2.jpg" + " ,procent: "+ img2.toFixed(1) + '\n'
					  + "filePath: " + "optimized/image3.jpg" + " ,rocent: "+ img3.toFixed(1) + '\n'
					  + "filePath: " + "optimized/image4.jpg" + " ,procent: "+ img4.toFixed(1) + '\n'
					  + "filePath: " + "optimized/image5.jpg" + " ,procent: "+ img5.toFixed(1) + '\n'
					  + "filePath: " + "optimized/image6.jpg" + " ,procent: "+ img6.toFixed(1) + '\n'
					  + "filePath: " + "optimized/image7.jpg" + " ,procent: "+ img7.toFixed(1) 
		
		
		
		)		

		



	}

			



}

resize('TWF0cml4')





	





  










