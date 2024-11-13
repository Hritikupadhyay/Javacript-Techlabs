function init() {
    let name = "Mozilla"; 
    function displayName() {
      
      console.log(name); 
    }
    name = "Welcome"
    return displayName;
  }
 const c =  init();
  c()