
let regexFull = /([\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+)(\.[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+)*(?:\.{0,1})@([a-z0-9\x{00a1}\-\x{ffff}-]+)(?:\.[a-z0-9\x{00a1}\-\x{ffff}-]+)*(\.[a-z]{2,})/;

//before @ symbol
let regex_user = /[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+(?:\.[\+_a-z0-9\x{00a1}\-\x{ffff}\-'!#$%&*=?^_`{|}~-]+)*\.{0,1}/;
//domain (group1)
let regex_domain = /(?:\@)([a-z0-9\x{00a1}\-\x{ffff}-]+)/;
//tld (group1)
let regex_tld = /@(?:[a-z0-9\x{00a1}\-\x{ffff}-]+)(?:\.[a-z0-9\x{00a1}\-\x{ffff}-]+)*(\.[a-z]{2,})/;

function regex(){
  let entry;
  let match_full; 
  let match_username; 
  let match_domain; 
  let match_tld; 

	entry = document.getElementById("email_entry").value;
  match_full = entry.match(regexFull);
  match_username = entry.match(regex_user);
  match_domain = entry.match(regex_domain);
  match_tld = entry.match(regex_tld);
  document.getElementById("mirror").innerHTML = entry;


  // Final validation
  
  if (match_full && entry == match_full[0]){
    document.getElementById("finalValid").style.color = "blue"; 
    document.getElementById("finalValid").innerHTML = "Your email is valid";

  }else{
    document.getElementById("finalValid").style.color = "red"; 
    document.getElementById("finalValid").innerHTML = "Your email is not valid";

  }


  // username before @ symbol
  if(match_username){
    document.getElementById("username_results").innerHTML = `${match_username[0]}`;
    document.getElementById("username_results").style.color = "blue";
  }
  else{
    document.getElementById("username_results").innerHTML = '';
  }


  // Domain
 if(match_domain && match_domain[1]){
    document.getElementById("domain_results").innerHTML = `${match_domain[1]}`;
    document.getElementById("domain_results").style.color = "blue";
  }
  else{
    document.getElementById("domain_results").innerHTML = '';
  }

  // TLD
  if(match_tld){
    document.getElementById("tld_results").innerHTML = `${match_tld[1]}`;
    document.getElementById("tld_results").style.color = "blue";
  }
  else{
    document.getElementById("tld_results").innerHTML = '';
  }





   

}

