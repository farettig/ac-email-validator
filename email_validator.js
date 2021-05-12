

let regexFull = /[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+(?:\.[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+)*\.{0,1}@[a-z0-9\x{00a1}\-\x{ffff}-]+(?:\.[a-z0-9\x{00a1}\-\x{ffff}-]+)*(?:\.[a-z]{2,})\S/;



let regex1 = /[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+(?:\.[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+)*\.{0,1}/;



let regex2 = /(?:[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+(?:\.[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+)*\.{0,1})@([a-z0-9\x{00a1}\-\x{ffff}-]+)/;



let regex3 = /@(?:[a-z0-9\x{00a1}\-\x{ffff}-]+)(?:\.[a-z0-9\x{00a1}\-\x{ffff}-]+)*(\.[a-z]{2,})/;





function myFunction() {

	var elementValue = document.getElementById("email").value;

    document.getElementById("myAnchor").innerHTML = elementValue;

  

  if (regexFull.exec(elementValue))

  {

    document.getElementById("finalValid").style.color = "blue"; 

    document.getElementById("finalValid").innerHTML = "Your email is valid";

    

  }else{

    document.getElementById("finalValid").style.color = "red"; 

    document.getElementById("finalValid").innerHTML = "Your email is not valid";

  }



  

  if (regex1.test(elementValue))

  {

    let array1;

    array1 = regex1.exec(elementValue)

    document.getElementById("regex1_results").innerHTML = `${array1[0]}`;

    document.getElementById("regex1_results").style.color = "blue"; 

    }

    else

    {

      document.getElementById("regex1_results").style.color = "red"; 

    }

  

  if (regex2.test(elementValue))

  {

    let array2;

    array2 = regex2.exec(elementValue)

    document.getElementById("regex2_results").innerHTML = `${array2[1]}`;

    document.getElementById("regex2_results").style.color = "blue"; 

  }

  else

  {

    document.getElementById("regex2_results").style.color = "red"; 

  } 

  if (regex3.test(elementValue))

  {

    let array3;

    array3 = regex3.exec(elementValue)

    document.getElementById("regex3_results").innerHTML = `${array3[1]}`;

    document.getElementById("regex3_results").style.color = "blue"; 

  }

  else

  {

    document.getElementById("regex3_results").style.color = "red"; 

  }

   

   

}

