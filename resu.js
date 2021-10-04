
function func() {            
    var box = document.getElementById('box1');   
    var box2 = document.getElementById('box2');
    var p= document.getElementById('pointer');
    var c= document.getElementById('sec-3');
    if (box.style.display === "") {  
    box.style.display = "block"      
    box2.style.display="" 
    p.style.display="none"
    c.style.cssText = 'padding-bottom:100px'
    }
    }    

function func2() {            
    var box2 = document.getElementById('box2');   
    var box = document.getElementById('box1');
    var p= document.getElementById('pointer');
    var c= document.getElementById('sec-3');
    if (box2.style.display === "") {  
    box2.style.display = "block"  
    box.style.display="" 
    p.style.display="none"
    c.style.cssText = 'padding-bottom:150px'
    }
    } 

function func3() {

}
function func4() {
    
}