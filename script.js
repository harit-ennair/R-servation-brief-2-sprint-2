
const tabs = document.querySelectorAll('.tab');
const radios = document.querySelectorAll('input[name="step"]');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        tabs.forEach((tab, tabIndex) => {
            if (tabIndex === index) {
                tab.style.zIndex = '10';
            } else {
                tab.style.zIndex = '1';
            }
        });
    });
});

function add() {
    var mynom = document.getElementById('nom').value;
    var myemail = document.getElementById('email').value;
    var mydepart = document.getElementById('depart').value;
    var myarriver = document.getElementById('arriver').value;
    var mydate = document.getElementById('date').value;
}

document.getElementById('nom').addEventListener('input', toggleNextButton);
document.getElementById('email').addEventListener('input', toggleNextButton);

function toggleNextButton() {
    mynom = document.getElementById('nom').value;
    myemail = document.getElementById('email').value;
    if (mynom === '' || myemail === '') {
        document.getElementById("NEXT").style.display = 'none';
    } else {
        document.getElementById("NEXT").style.display = 'block';
    }
}

document.getElementById('depart').addEventListener('input', toggleNextButton1);
document.getElementById('arriver').addEventListener('input', toggleNextButton1);
document.getElementById('date').addEventListener('input', toggleNextButton1);



    let currentDate= new Date();
function toggleNextButton1() {
    mydepart = document.getElementById('depart').value;
    myarriver = document.getElementById('arriver').value;
    mydate = document.getElementById('date').value;

    const selectDate = new Date(mydate);

    if (mydepart === '' || mydepart === 'La gare de départ' ||
        myarriver === '' || myarriver === 'La gare d arriver' ||
        myarriver === mydepart  ||
        mydate === '' || selectDate < currentDate
    
    

    ) {
        document.getElementById("NEXT1").style.display = 'none';
    } else {
        document.getElementById("NEXT1").style.display = 'block';
    }
}

const flights = document.querySelectorAll('.flight');

flights.forEach(flight => {
    flight.addEventListener('click', function () {
        flights.forEach(f => f.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById("NEXT2").style.display = 'block';
        selectedDeparture = this.querySelector('.departure-time').textContent;
        selectedArrival = this.querySelector('.arrival-time').textContent;
    });
});

let cont1 = document.getElementById("cont1")
let cont2 = document.getElementById("cont2")
let prixt = 0
let counte = 0
let count = 0
let prix1 = 0
let prix2 = 0
let prixt2
let cheke = 0
var selectedDeparture
var selectedArrival

function updatePrices() {
    prix1 = counte * 500
    prix2 = count * 100
    prixt = prix1 + prix2

    document.getElementById('prix1').textContent = prix1
    document.getElementById('prix2').textContent = prix2
    document.getElementById('prixt').textContent = prixt

    if ((count + counte) == cheke) {
        document.getElementById('NEXT3').style.display = "block"
    } else {
        document.getElementById('NEXT3').style.display = "none"
    }
}

function incremente() {
    if (counte + count < 16) {
        counte++
        cont1.innerText = counte
        updatePrices()
    }
}

function decremente() {
    if (counte > 0) {
        counte--
        cont1.innerText = counte
        updatePrices()
    }
}

function increment() {
    if (counte + count < 16) {
        count++
        cont2.innerText = count
        updatePrices()
    }
}

function decrement() {
    if (count > 0) {
        count--
        cont2.innerText = count
        updatePrices()
    }
}

function add2() {
    document.getElementById('prixt2').textContent = prixt
}


let checkboxes = document.querySelectorAll('.chek');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            cheke++;
        } else {
            cheke--;
        }
        if ((count + counte) == cheke) {
            document.getElementById('NEXT3').style.display = "block"
        } else {
            document.getElementById('NEXT3').style.display = "none"
        }
    });
});

function add2() {    
    let j=0
    
    for (let i = 0; i < counte; i++) {
        let a=`${i}`
         
        document.getElementById("ticket").innerHTML += `
                <div style="height: 850px;  display: flex; justify-content: center; align-items: center;">
                  <div class="card content">
                    <div style="width: auto;" class="user-info">
                      <p style="font-size: x-large;color:rgb(0, 0, 0);">Adult ticket</p>
                      <p style="margin: 10px;">Nom et prénom : <br> <span id="spannom">${mynom}</span></p>
                      <p style="margin: 10px;">E-mail : <br> <span id="spanemail">${myemail}</span></p>
                      <p style="margin: 10px;">La gare de départ : <br> <span id="spandepart">${mydepart}</span> <span id="spantimed">${selectedDeparture}</span></p>
                      <p style="margin: 10px;">La gare d arriver : <br> <span id="spanarriver">${myarriver}</span> <span id="spantimea">${selectedArrival}</span></p>
                      <p>Date de réservation : <br> <span id="spandate">${mydate}</span></p>
                      <p>Prix : 500DH</p>
                      <p class="TNum">ticket N°:${i+1}</p>
                      <p >-------------------------------------</p>
                    </div>
                    <div class="qr-code">
                      <p>Code QR </p>
                      <img class='QR'  />
                      
                    </div>
                  </div>
                </div>
                `
                let TNum=document.querySelectorAll('.TNum');
                let QRImg=document.querySelectorAll('.QR');
                for(let j=0;j<QRImg.length;j++){
                QRCode.toDataURL(TNum[j].textContent).then(dataUrl=>{
                    QRImg[j].src=dataUrl;
                    console.log(QRImg);
                    
                      })      
                }
  
    }

    for (let i = 0; i < count; i++) {
        document.getElementById("ticket").innerHTML += `
            <div style="height: 850px;  display: flex; justify-content: center; align-items: center;">
              <div class="card content">
                <div style="width: auto;" class="user-info">
                      <p style="font-size: x-large;color:rgb(0, 0, 0);">Enfant ticket</p>
                      <p style="margin: 10px;">Nom et prénom : <br> <span id="spannom">${mynom}</span></p>
                      <p style="margin: 10px;">E-mail : <br> <span id="spanemail">${myemail}</span></p>
                      <p style="margin: 10px;">La gare de départ : <br> <span id="spandepart">${mydepart}</span> <span id="spantimed">${selectedDeparture}</span></p>
                      <p style="margin: 10px;">La gare d arriver : <br> <span id="spanarriver">${myarriver}</span> <span id="spantimea">${selectedArrival}</span></p>
                      <p>Date de réservation : <br> <span id="spandate">${mydate}</span></p>
                      <p>Prix : 100DH</p>
                        <p class="TNum">ticket N°:${i+1+counte}</p>
                      <p >-------------------------------------</p>
                    </div>
                    <div class="qr-code">
                      <p>Code QR </p>
                      <img class='QR'  />
                      
                    </div>
                  </div>
                </div>
                `
                }
                let TNum=document.querySelectorAll('.TNum');
                let QRImg=document.querySelectorAll('.QR');
                for(let j=0;j<QRImg.length;j++){
                QRCode.toDataURL(TNum[j].textContent).then(dataUrl=>{
                    QRImg[j].src=dataUrl;
                    console.log(QRImg);
                    
                      })      
                }
            
}

document.getElementById('NEXT4').addEventListener('click', function() {
    printTicket();

});


function printTicket(){

    window.print();
}


