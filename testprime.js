<!DOCTYPE>
<html>
<!-- 
 1. 
   change line 28 in the js
     var amIdude = 'i\'m a dude';
   so that the page shows the following text:
     just because you're a dude doesn't make you a bro - man.

 2. Instead of JavaScript, refactor the below code to use jQuery

-->
<head>
 <title></title>
</head>
<body>

 <input type="text" id="isPrime" placeholder="Check If Prime">
 <button id="primeCheck">Prime?</button>
 <input type="text" id="low" placeholder="Prime Numbers Starting Here">
 <input type="text" id="high" placeholder="Prime Numbers Ending Here">
 <button id="primeOutput">Prime</button>
 <input type="text" id="highNumber" placeholder="Top Number">
 <input type="text" id="sum1" placeholder="First Multiple">
 <input type="text" id="sum2" placeholder="Second Multiple">
 <button id="sumOutput">Sum</button>
 <div id="display"></div>
 <div id="displayArray"></div>
 <button id='fib'>Fibonacci</button>
 <button id='factor'>largest Factor</button>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript">
 window.onload = function(){
   var primeNumbers = []
   $('#fib').on('click',function(){
     fibonacci()
   });
   $('#factor').on('click',function(){
     largestPrimeFactor()
   });
   $('#sumOutput').on('click',function(){
     $('#display').empty()
     sumOfMultiples($('#sum1').val(),$('#sum2').val(),$('#highNumber').val())
   });
   $('#primeCheck').on('click',function(){
     $('#display').empty()
     isPrime($('#isPrime').val())
   });
   $('#primeOutput').on('click',function(){
     $('#displayArray').empty()

     for(j = $('#low').val(); j <= $('#high').val();j++){
       if(isPrime(j) == true){
         primeNumbers.push(j + " ")
       }
     $('#display').empty()

     }
     $('#displayArray').html(primeNumbers)

     // for(i=0;i<primeNumbers.length;i++){

     // }
   });

   function isPrime(num){
     var check = 0
     var prime = 0
     for(i = num; i > 0; i--){
       check = num % i
       if(check === 0)
         prime++
     }
     if(prime === 2){
       $('#display').html('True')
       return true
     }
     else{
       $('#display').html('False')
       return false
     }
   }

   function sumOfMultiples(val1,val2,topNum){
     var sum = 0
     for(x=1 ; x < topNum; x++){
       if(x % val1 === 0 || x % val2 === 0){
         sum = sum + x
       }
     }
     $('#display').html(sum)
   }

   function fibonacci(){
     fibonacci = [1,2]
     var sumFib = 0
     for(q=2; fibonacci[q-1] < 4000000 ; q++){
       if((fibonacci[q-2] + fibonacci[q-1]) > 4000000){
       }
       else{
         fibonacci.push(fibonacci[q-2] + fibonacci[q-1])
       }
     }
     for(var i =0;i < fibonacci.length;i++){
       if(fibonacci[i] % 2 === 0){
         sumFib = sumFib + fibonacci[i]
       }
     }
     $('#display').html(sumFib)
       
   }

   function largestPrimeFactor(){
     var factors = []
     var save
     var largestFactorNum = 600851475143
     for(var i=600851475143;i > 0;i--){
       console.log(i)
       if(largestFactorNum % i === 0 && isPrime(i)){
         save = i
         i = 0
       }
     }
     console.log(save)
   }


 }


</script>
 <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

</body>
</html>