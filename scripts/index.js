
let serrectNumber=1+Math.ceil(Math.random()*99);

while(true){
    let input =prompt(" Moi ban lua chon");
    let inputNumber=parseInt(input);
    if(inputNumber==serrectNumber){
        alert("Ban da doan dung");
        break;
    }
    else{ 

        if(inputNumber<serrectNumber){
            alert("So bi mat lon hon so ban nhap");
        }
        else{
            alert("So bi mat nho hon so ban nhap");
        }
        
    }
    
}
