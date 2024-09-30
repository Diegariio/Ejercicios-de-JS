/* ========================================
    Operadores de asignación y comparación
   ======================================== */

   let numero1 = 15;
   let numero2 = 20;
   let numero3 = '25';
   
   //1
   if(numero1 > numero2){
       console.log('Numero1 es mayor a Numero2')
   }else if (numero1 == numero2){
       console.log('Numero1 es igual a Numero2')
   }else {
       console.log('Numero1 no es mayor ni igual, es menor a Numero2');
   }
   
   //2
   if(numero1 < numero2){
       console.log('Numero1 es menor a Numero2')
   }else if (numero1 == numero2){
       console.log('Numero1 es igual a Numero2')
   
   }else {
       console.log('Numero1 no es menor ni igual, es mayor a Numero2');
   }
   
   //3 
   console.log('Numero1 es menor a Numero3: ', numero1 < numero3);
   
   //4 
   console.log('Numero3 es menor a Numero2: ', numero3 < numero2);
   
   //5 
   console.log('Numero3 es escrictamente diferente a Numero1: ', numero1 !== numero3);
   
   //6 
   console.log('Numero1 es estrictamente igual numero 2: ', numero1 === numero2);