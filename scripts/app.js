var baseData1 = '';
var baseType1 = '';
var baseData2 = '';
var baseType2 = '';

function updateSrc1(){
    baseType1 = document.getElementById('fb1').files[0].type;
    fileSrc = document.getElementById('fb1').files[0].name;
    document.getElementById('fn1').innerHTML = fileSrc;
    getBase64(document.getElementById('fb1').files[0], function(imgData){
        baseData1 = imgData;
    });
}

function updateSrc2(){
    baseType2 = document.getElementById('fb2').files[0].type;
    fileSrc = document.getElementById('fb2').files[0].name;
    document.getElementById('fn2').innerHTML = fileSrc;
    getBase64(document.getElementById('fb2').files[0], function(imgData){
        baseData2 = imgData;
    });
}

function gen(){
    var fname = document.getElementById('fname').value;
    var age = document.getElementById('age').value;
    var cause = document.getElementById('cause').value;
    var hos = document.getElementById('hos').value;
    var dt = document.getElementById('dt').value;
    var amt = document.getElementById('amt').value;
    var ebank = document.getElementById('ebank').value;
    var bank = document.getElementById('bank').value;
    var acc = document.getElementById('acc').value;
    var ifsc = document.getElementById('ifsc').value;
    var emsg = document.getElementById('emsg').value;
    var logoData = 'data:image/png;base64,'+ logo;
    var bgData = 'data:image/png;base64,'+ bg;
    var doc = new jsPDF({
        unit: 'in',
        format: [15, 15]
    });
    
    doc.addImage(bgData, 'png', 0, 0, 15, 15);
    if(baseType1 == 'image/png'){
        doc.addImage(baseData1, 'png', 11.5, 0.25, 3, 3);
    }else if(baseType1 == 'image/jpg'){
        doc.addImage(baseData1, 'jpg', 11.5, 0.25, 3, 3);
    }else if(baseType1 == 'image/jpeg'){
        doc.addImage(baseData1, 'jpeg', 11.5, 0.25, 3, 3);
    }
    if(baseType2 == 'image/png'){
        doc.addImage(baseData2, 'png', 11.5, 4, 3, 5);        
    }else if(baseType2 == 'image/jpg'){
        doc.addImage(baseData2, 'jpg', 11.5, 4, 3, 5);    
    }else if(baseType2 == 'image/jpeg'){
        doc.addImage(baseData2, 'jpeg', 11.5, 4, 3, 5);    
    }
    doc.setFont("times");
    doc.setFontType("italic");
    doc.setFontSize(80);
    doc.text(7.5, 1.5, 'V-Helpers', null, null, 'center');
    doc.addImage(logoData, 'png', 1, 0.25, 2, 2);
    doc.setFont("courier");
    doc.setFontType("bold");
    doc.setFontSize(40);
    doc.text(0.5, 3, "Name: " + fname);
    doc.text(0.5, 4, "Age: " + age);
    doc.text(0.5, 5, "Cause: " + cause);
    doc.text(0.5, 6, "Hospital: " + hos);
    doc.text(0.5, 7, "Posted Date: " + dt);
    doc.setFontSize(50);
    doc.text(0.5, 8, "Amount Needed: " + amt);
    doc.text(0.5, 9, "GPay / Paytm: " + ebank);
    doc.text(0.5, 10, "Bank: " + bank);
    doc.text(0.5, 11, "Acc No: " + acc);
    doc.text(0.5, 12, "IFSC Code: " + ifsc);
    if(emsg.length > 0) {
        doc.text(0.5, 14, emsg);
    }
    doc.save('VHelpers.pdf');
      
}

function getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callback(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 function showAddInputs(){
    document.getElementById('eBut').setAttribute("disabled","disabled");
     document.getElementById('extra').style.display = "inline";
 }
