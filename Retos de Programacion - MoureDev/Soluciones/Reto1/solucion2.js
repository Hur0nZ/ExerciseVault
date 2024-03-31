function remplazar(){
    for(let i = 1; i <= 100; i++){
        let bolean = true; 
        if(i % 3 == 0 && i % 5 == 0){
            bolean = false
            console.log('fizzbuzz');
        }
        if(i % 3 == 0 && bolean == true){
            bolean = false
            console.log('fizz')
        }
        if(i % 5 == 0 && bolean == true){
            bolean = false
            console.log('buzz')
        }else if(bolean==true){
            console.log(i)
        }
    }
}
remplazar();