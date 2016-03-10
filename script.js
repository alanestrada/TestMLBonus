function validarForm(){
var numero=document.formulario.numero.value;
if (!/^([0-9])*$/.test(numero))
 {alert("Tiene que escribir un número entero >= 2 digitos");
  limpiar();}
  else
   {if(numero.length<2)
    {alert("Tiene que escribir un número entero >= 2 digitos");
    limpiar();
    }
   else
	{   
	 if (esprimo(numero)== true)
	   {rotados=0;
		j=0;
		while(j<numero.toString().length && (numero%2!=0) && (esprimo(numero)==true))
		 {numero=circular(numero.toString());
		  rotados++;
		  j++;}
		if(rotados==numero.toString().length)
         {alert("Es un número primo circular");
		   limpiar();}
        else
          {alert("No es un número primo circular");	
		   limpiar();}		  
	    }
	 else
       { alert("No es un número primo"); 
	     limpiar();}
    }
	}
}
function esprimo(num){
 verif=0;
if(num<10)
 return false;
else
  {var i=2;
  for(i=2;i<=Math.sqrt(num);i++){
   if (num%i==0){
       return false;
	   verif=1;}   
   }
   if(verif==0)
   return true;
  }
}     

function circular(num){
var primero = num.substring(1);
var ultimo = num.charAt(0);
num=primero.concat(ultimo);
return num;
}  
function valida(e){
tecla=(document.all) ? e.keyCode : e.which; 
  if(tecla == 13) 
    validarForm();
} 
function limpiar(){
document.getElementById("numero").value="";
document.getElementById("numero").focus();
}