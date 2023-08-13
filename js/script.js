function hitungLuas() {
    var alas = document.getElementById("input_alas").value
    var tinggi = document.getElementById("input_tinggi").value

    var luas = 1/2 * alas * tinggi

    document.getElementById("input_luas").value = luas
    
}

function tampilkanRumus(typeRumus) {
    if (typeRumus == "luas"){
        document.querySelector("div#keliling_segitiga").style.display="none"      
        document.querySelector("div#luas_segitiga").style.display="block"
    } 
    else if (typeRumus == "keliling"){        
        document.querySelector("div#luas_segitiga").style.display="none"
        document.querySelector("div#keliling_segitiga").style.display="block"
    } 
}