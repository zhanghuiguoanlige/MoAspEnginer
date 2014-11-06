﻿/*
** File: safecode.js
** Usage: a method to create safecode.Use 0-9a-zA-Z.
** About: 
**		support@mae.im
*/

function $safecode(sessionKey,opt){
	var cfg = {
		length : 4,
		odd : 0,
		padding : 0,
		data : ""
	};
	F.extend(cfg,opt||{});
	function getrndcolor(){
		return [F.random(0,128),F.random(0,128),F.random(0,128)];
	}
	Response.Buffer = true;
	Response.Expires = -1;
	Response.AddHeader("Pragma", "no-cache");
	Response.AddHeader("cache-ctrol", "no-cache");
	Response.ContentType = "Image/bmp";
	var I, ii, iii,cCode="0123456789aAcCeEmMnNrRsSuUvVwWxXzZjJbBdDfFhHkKtTgGpPqQyY",bgColor=[0xff,0xff,0xff],vNumberData=[],vCode=[], vCodes="";
	vNumberData.push("1110001111110111011111011101111101110111110111011111011101111101110111110111011111100011111111111111");
	vNumberData.push("1111011111111001111111110111111111011111111101111111110111111111011111111101111111100011111111111111");
	vNumberData.push("1110001111110111011111011101111111110111111110111111110111111110111111110111111111000001111111111111");
	vNumberData.push("1110001111110111011111111101111111001111111111011111111101111111110111110111011111100011111111111111");
	vNumberData.push("1111101111111100111111101011111101101111110110111110111011111100001111111110111111110001111111111111");
	vNumberData.push("1100000111110111111111011111111100001111110111011111111101111101110111110111011111100011111111111111");
	vNumberData.push("1111000111111011011111011111111101001111110011011111011101111101110111110111011111100011111111111111");
	vNumberData.push("1100000111110110111111111011111111101111111101111111110111111111011111111101111111110111111111111111");
	vNumberData.push("1110001111110111011111011101111110101111111000111111011101111101110111110111011111100011111111111111");
	vNumberData.push("1110001111110111011111011101111101110111110110011111100101111111110111110110111111000111111111111111");
	vNumberData.push("1111111111111111111111100011111101110111111100011111101101111101110111111000001111111111111111111111");
	vNumberData.push("1111011111111101111111101011111110101111111010111111100011111101110111110111011110001000111111111111");
	vNumberData.push("1111111111111111111111100001111101110111110111111111011111111101110111111000111111111111111111111111");
	vNumberData.push("1110000111110111011110111111111011111111101111111110111111111011111111110111011111100011111111111111");
	vNumberData.push("1111111111111111111111100011111101110111110000011111011111111101110111111000111111111111111111111111");
	vNumberData.push("1000000111110111011111011111111101101111110000111111011011111101111111110111011110000001111111111111");
	vNumberData.push("1111111111111111111110000011111101010111110101011111010101111101010111100101001111111111111111111111");
	vNumberData.push("1000100011110010011111001001111100100111110101011111010101111101010111110101011110010100111111111111");
	vNumberData.push("1111111111111111111110010011111100110111110111011111011101111101110111100011001111111111111111111111");
	vNumberData.push("1000100011110011011111001101111101010111110101011111010101111101100111110110011110001101111111111111");
	vNumberData.push("1111111111111111111111001001111110011111111011111111101111111110111111110000111111111111111111111111");
	vNumberData.push("1000001111110111011111011101111100001111110101111111011011111101101111110111011110001100111111111111");
	vNumberData.push("1111111111111111111111100001111101110111111001111111111011111101110111110000111111111111111111111111");
	vNumberData.push("1110000111110111011111011111111110111111111100111111111101111111110111110111011111000011111111111111");
	vNumberData.push("1111111111111111111110011001111101110111110111011111011101111101110111111000001111111111111111111111");
	vNumberData.push("1000100011110111011111011101111101110111110111011111011101111101110111110111011111100011111111111111");
	vNumberData.push("1111111111111111111110001000111101110111110111011111101011111110101111111101111111111111111111111111");
	vNumberData.push("1000100011110111011111011101111110101111111010111111101011111110101111111101111111110111111111111111");
	vNumberData.push("1111111111111111111110010100111101010111110101011111010101111110101111111010111111111111111111111111");
	vNumberData.push("1001010011110101011111010101111101010111110101011111001001111110101111111010111111101011111111111111");
	vNumberData.push("1111111111111111111110010001111101101111111001111111100111111101101111100010011111111111111111111111");
	vNumberData.push("1001000111110110111111011011111110011111111001111111100111111101101111110110111110001001111111111111");
	vNumberData.push("1111111111111111111111000001111101101111111101111111110111111110110111110000011111111111111111111111");
	vNumberData.push("1100000111110110111111111011111111011111111101111111110111111110111111111011011111000001111111111111");
	vNumberData.push("1111111111111111111111100011111111101111111110111111111011111111101111111110111111111011111100011111");
	vNumberData.push("1100000111111101111111110111111111011111111101111111110111111111011111111101111110110111111000111111");
	vNumberData.push("1001111111110111111111011111111100001111110111011111011101111101110111110111011111000011111111111111");
	vNumberData.push("1000001111110111011111011101111100001111110111011111011101111101110111110111011110000011111111111111");
	vNumberData.push("1111100111111111011111111101111110000111110111011111011101111101110111110111011111100000111111111111");
	vNumberData.push("1000011111110110111111011101111101110111110111011111011101111101110111110110111110000111111111111111");
	vNumberData.push("1111000111111011011111101111111000001111111011111111101111111110111111111011111111000011111111111111");
	vNumberData.push("1000000111110111011111011111111101101111110000111111011011111101111111110111111110001111111111111111");
	vNumberData.push("1001111111110111111111011111111101001111110011011111011101111101110111110111011110001100111111111111");
	vNumberData.push("1000100011110111011111011101111101110111110000011111011101111101110111110111011110001000111111111111");
	vNumberData.push("1001111111110111111111011111111101000111110110111111010111111100011111110110111110001001111111111111");
	vNumberData.push("1000100111110110111111010111111100111111110001111111010111111101101111110110111110001001111111111111");
	vNumberData.push("1111111111111011111111101111111000001111111011111111101111111110111111111011111111110011111111111111");
	vNumberData.push("1100000111110101011111110111111111011111111101111111110111111111011111111101111111100011111111111111");
	vNumberData.push("1111111111111000011111011011111101101111111001111111011111111100001111110111011111100011111111111111");
	vNumberData.push("1110001111110110111110111111111011111111101111111110110001111011101111110110111111100111111111111111");
	vNumberData.push("1111111111100000111111011101111101110111110111011111011101111100001111110111111110001111111111111111");
	vNumberData.push("1000001111110111011111011101111101110111110000111111011111111101111111110111111110001111111111111111");
	vNumberData.push("1111111111111000011111011101111101110111110111011111011101111110000111111111011111111000111111111111");
	vNumberData.push("1110011111110110111110111101111011110111101111011110111101111010010111110110111111100011111111100111");
	vNumberData.push("1111111111100010001111011101111110101111111010111111110111111111011111111011111110001111111111111111");
	vNumberData.push("1000100011110111011111101011111110101111111101111111110111111111011111111101111111100011111111111111");
	if(cfg.data==""){
		for(var i=0;i<=cfg.length-1;i++){
			vCode.push(F.random(0,55));
			vCodes += cCode.substr(vCode[vCode.length-1],1);
		}
	}else{
		cfg.length = cfg.data.length;
		vCodes = cfg.data;
		for(var i=0;i<=cfg.length-1;i++){
			vCode.push(cCode.indexOf(vCodes.substr(i,1)));
		}
	}
	F.session(sessionKey,vCodes);
	var padding = cfg.padding;
	var output=[66,77,230,4,0,0,0,0,0,0,54,0,0,0,40,0,0,0,cfg.length * 10 + padding*2,0,0,0,10+padding*2,0,0,0,1,0,24,0,0,0,0,0,176,4,0,0,18,11,0,0,18,11,0,0,0,0,0,0,0,0,0,0];
	for(var i=9+padding*2;i>=0;i--){
		for(var ii=0;ii<=cfg.length-1;ii++){
			if(ii==0){
				for(var m=0;m<padding;m++){
					output = output.concat(bgColor);
				}
			}
			for(var iii=0;iii<10;iii++){
				if(F.random(1,100) < cfg.odd){
					output = output.concat(getrndcolor());
				}else{
					if(i>=padding && i<10+padding && vNumberData[vCode[ii]].substr((i-padding) * 10 + iii, 1) == "0"){
						output = output.concat(getrndcolor());
					}else{
						output = output.concat(bgColor);
					}
				}
			}
			if(ii==cfg.length-1){
				for(var m=0;m<padding;m++){
					output = output.concat(bgColor);
				}
			}
		}
	}
	F.echo(F.base64.toBinary(F.base64.e(output)),F.TEXT.BIN);
}
exports.safecode = $safecode;