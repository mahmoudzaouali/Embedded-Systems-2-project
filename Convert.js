str = msg.payload;
var partsOfStr = str.split(',');

var ad1 = (Number(partsOfStr[0])/150);
if(ad1 > 100){
    ad1 = 100;
    }
if(ad1 < 0){
   ad1 = 0;
   }


msg1 = {payload: ad1.toFixed(1)};

var ad2 = (Number(partsOfStr[1])/10);
if(ad2 > 100){
    ad2 = 0;
    }
if (ad2 < 0){
    ad2 = 100;
    }
    
msg2 = {payload: ad2.toFixed(1)};
return [msg1, msg2];
