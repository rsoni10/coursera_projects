var names = ["radha" , "aana" , "Alex" , "Jhon" , "Ram" , "josh" ,"rekha" , "parul" ,"jasmin"];
//Yaakov,John,Jen,Jason,Paul,Frank, Larry,Paula,Laura, Jim
  
 
  // document.getElementById("arr").innerHTML = `<p>${names }</p>`
  for([k,v] of Object.entries(names)){
      if(v.charAt(0) == "j" || v.charAt(0) == "J") {
        
        document.getElementById("arr").innerHTML += `<p>Goodbye ${v} </p>`;
        console.log(`Goodbye ${v}`); 
      }
      document.getElementById("arr").innerHTML += `<p>Hello ${v} </p>`;
      console.log(`Hello ${v}`); 
  }
  
 