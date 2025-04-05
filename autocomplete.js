let availablekeywords = [  
    'Html', 
    'Css',
    'Easy tutorials',
    'Web design tutorials',
    'Javascript',
    'Where to learn coding online',
    'Where to learn web design',
    'Where to learn web design',
    'How to create a website',
];
const resultsBox =document.querySelector(".result-box");
const inputBox =document.getElementById("input-box");
  
  
inputBox.onkeyup = function(){
  let result = [];                                        
  let input = inputBox.value;
  if (input.lenght){
           result = availablekeywords.filter((keyword)=>  {
        return  keyword.toLowerCase().includes(input.toLowerCase());    
      
    });   
   newFunction(result);     

  }
display(result);
}
  
function newFunction(result) {
  console.log(result);
}

function display(result){
  
  const content = result.map((list)=> {    
    return "<li>" + list + "</li>"; 
  });
resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";

}

