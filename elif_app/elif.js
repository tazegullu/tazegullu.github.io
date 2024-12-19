function  Calculate(){
    let kg = document.getElementById("kg").value;
    let mg = document.getElementById("mg").value;
    let mgin5ml = document.getElementById("mgin5ml").value;

    let total = kg*mg;
    let totalOlcek = total * 5 / mgin5ml;
    let kacOlcek = total / mgin5ml;

    if(kg != "" && mg!="" && mgin5ml!=""){
        document.getElementById("total").innerText = "Toplam MG: " + total;
        document.getElementById("totalOlcek").innerText = "Toplam İlaç ML: " + totalOlcek;
        document.getElementById("kacOlcek").innerText = "Ölçek Sayısı: " + kacOlcek;
    }
    else{
        document.getElementById("total").innerText = "";
        document.getElementById("totalOlcek").innerText = "";
        document.getElementById("kacOlcek").innerText = "";
    }
}