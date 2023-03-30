const data = [{no:1, soal:'1 + 1 = ...', opsi : {a:'2', b:'4', c:'6', d:'10'}}, 
{no:2, soal:'2 + 5 = ...', opsi : {a:'6', b:'7', c:'6', d:'10'}},
{no:3, soal:'1 + 3 = ...', opsi : {a:'3', b:'4', c:'6', d:'10'}},
{no:4, soal:'3 + 16 = ...', opsi : {a:'1', b:'4', c:'6', d:'19'}},
{no:5, soal:'2 + 12 = ...', opsi : {a:'2', b:'14', c:'6', d:'10'}}]

let count = 1;

function showQuestion(){
    try {
        let dataTemp;
        for (let i = 0; i < data.length; i++) {
            if (count === data[i].no) {
                dataTemp = data[i];
            }
        }
        let no = dataTemp.no;
        let soal = dataTemp.soal;
        let opsi1 = dataTemp.opsi.a;
        let opsi2 = dataTemp.opsi.b;
        let opsi3 = dataTemp.opsi.c;
        let opsi4 = dataTemp.opsi.d;
        console.log(soal);
    
    
        // console.log(no);
        $('#nomorSoal').html(no);
        $('#soal').html(soal);
        $('#opsi_soal_1').html(opsi1);
        // console.log(opsi1);
        $("input[name='opsi-soal'][value='1']").next().text(opsi1);
        $("input[name='opsi-soal'][value='2']").next().text(opsi2);
        $("input[name='opsi-soal'][value='3']").next().text(opsi3);
        $("input[name='opsi-soal'][value='4']").next().text(opsi4);
        
    } catch (error) {
        // alert("test completed")
        alert("test end")
        window.location.href = '/public/login.html';
    }
    
}

function nextButton() {
    let i = 0;
    console.log("next ");
    count = count + 1
    showQuestion();
    
}

$(document).ready(function(){
    showQuestion(count);
    // nextButton();
});