const container = document.querySelector("#container")
let setOpacity = 0;
changeColor("black");
makeGrid(10);
function makeGrid(number){
    for (i=0; i<number*number; i++){
        let squares= document.createElement('div');
        squares.style.width = (1000/number) + "px";
        squares.style.height = (1000/number) + "px";
        squares.classList.add("squares");
        container.appendChild(squares);
    }
}

function clearGrid(){
    document.querySelectorAll(".squares").forEach(square =>{
        square.style.setProperty ("background-color", "white");

    })
   
}

function changeColor(color){
    var colorChoice = document.querySelectorAll(".squares");
    
    if(color === "black"){
        
        colorChoice.forEach(square =>{

            square.addEventListener('mouseover', function(e){
                square.style.setProperty ("background-color", "black");
                square.style.setProperty("opacity", 1);
                
            })
        })
    }

    if(color==="random"){
        colorChoice.forEach(square =>{
            square.addEventListener('mouseover', function(e){
                var letters = '0123456789ABCDEF';
                var rColor = '#';
                for (var i = 0; i < 6; i++){
                    rColor += letters[Math.floor(Math.random() * 16)];
                }
                square.style.setProperty("background-color", rColor);
                square.style.setProperty("opacity", 1);
            })
        })
    }
    if(color === "erase"){
        colorChoice.forEach(square =>{
            square.addEventListener('mouseover', function(e){
                square.style.removeProperty("background-color");    
            })
        })

    }
    //To fix the shader
    if(color === "shader"){
        
        colorChoice.forEach(square =>{
            square.addEventListener('mouseover', function(e){
                
                let opacity = Number(e.target.style.opacity);
                if(opacity < 1){
                    e.target.style.setProperty ("background-color", "black");
                    opacity +=0.1;
                    e.target.style.opacity = opacity;
                

                }else if(opacity == 1){
                    e.target.style.setProperty ("background-color", "black");
                    e.target.style.setProperty("opacity", setOpacity);
                    if(setOpacity >= 1){
                        setOpacity = 0;
                    }
                    setOpacity+=0.1;
                    e.target.style.opacity =setOpacity;     
                
                }
            })

        })

    }
}

function resize(){
    document.querySelectorAll(".squares").forEach(function(square){
        square.parentNode.removeChild(square);
    })
    let newSize = prompt("Enter the number of boxes per side you would like to have(between 1-100)")
    makeGrid(newSize);

}



