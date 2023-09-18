/*constante con un número de 4 digitos para la clave */
const clave = 1234;
/*funcion para comprobar si la contraseña es correcta*/
function Revisar (){
    var usuario = document.getElementById("id1").value;
    
    /*seccion para la clave correcta */
    if (usuario==clave){
        alert("Clave correcta");
        
        var cantidad =  prompt("Ingrese el monto a retirar")

        if( cantidad<=0){
            alert("Cantidad no valida, Operacion finalizada")
            
        }
        else{
            alert("Transaccion exitosa, operacion finalizada")
        }
            
    }
/*seccion para la clave incorrecta */
    else{
            var i 
            var scond
            var corrc
/*coclo for para permitir tres intentos como maximo antes de bloquear la tarjeta */
    for (i=0;i<=2;i++) { 
           scond =prompt("Clave incorrecta, Ingrese la clave correcta")
           /*verificacion de los intentos */
        if(scond == 1234){
            
            corrc =prompt("Clave correcta, ingrese el monto a retirar")
            alert("Cantidad retirada="+corrc)
            alert("Operacion exitosa")
    break
        }
        /*sentencia para bloquear la tarjeta cuando se excedan los tres intentos */
    if(i == 1){
        document.write("Clave incorrecta \n Cantidad de intentos excedida, su tarjeta ha sido bloqueada")
        break
    }
    }
}
}
