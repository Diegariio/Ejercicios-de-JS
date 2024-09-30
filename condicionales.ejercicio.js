/* ========================================
                Condicionales
   ======================================== */

   numero1 = 10;
   numero2 = 20;
   numero3 = 30;
   
   //1.
   if(numero1 > numero2 && numero1 > numero3){
       console.log('El numero mayor entre los 3 es: ', numero1 );
   }else if (numero2 > numero1 && numero2 > numero3) {
       console.log('El numero mayor entre los 3 es: ', numero2 );
   }else if(numero3 > numero1 && numero3 > numero2){
       console.log('El numero mayor entre los 3 es: ', numero3 );
   }
   
   //2.
   
   if(numero1 < numero2 && numero1 < numero3){
       console.log('El numero menor entre los 3 es: ', numero1 );
   }else if (numero2 < numero1 && numero2 < numero3) {
       console.log('El numero menor entre los 3 es: ', numero2 );
   }else if(numero3 < numero1 && numero3 < numero2){
       console.log('El numero menor entre los 3 es: ', numero3 );
   }
   
   //3
   if(numero1 % 2 == 0){
       console.log("Numero1 es par");
   } else { 
       console.log("Numero1 es impar");
   }
   
   //4
   if(numero2 % 2 == 0){
       console.log("Numero2 es par");
   } else { 
       console.log("Numero2 es impar");
   }
   
   //5
   if(numero3 % 2 == 0){
       console.log("Numero3 es par");
   } else { 
       console.log("Numero3 es impar");
   }
   //6
   if(numero1 % 5 == 0){
       console.log("Numero1 es multiplo de 5 ");
   } else { 
       console.log("Numero1 no es multiplo de 5");
   }
   
   //7
   if(numero2 % 2 == 0){
       console.log("Numero2 es multiplo de 5 ");
   } else { 
       console.log("Numero2 no es multiplo de 5");
   }
   
   //8
   if(numero3 % 2 == 0){
       console.log("Numero3 es multiplo de 5");
   } else { 
       console.log("Numero3 no es multiplo de 5");
   }