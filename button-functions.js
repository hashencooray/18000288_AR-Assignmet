  
      function changeObjectToCube() {  
        var box= document.querySelector("#box")
        var cylinder= document.querySelector("#cylinder")
        var cone= document.querySelector("#cone")
      box.setAttribute("visible",true);
      cylinder.setAttribute("visible",false);
      cone.setAttribute("visible",false);
      
              }

        function changeObjectToCylinder() {  
                var box= document.querySelector("#box")
                var cylinder= document.querySelector("#cylinder")
                var cone= document.querySelector("#cone")
              box.setAttribute("visible",false);
              cylinder.setAttribute("visible",true);
              cone.setAttribute("visible",false);
              
                      }

    function changeObjectToCone() {  
        var box= document.querySelector("#box")
        var cylinder= document.querySelector("#cylinder")
        var cone= document.querySelector("#cone")
      box.setAttribute("visible",false);
      cylinder.setAttribute("visible",false);
      cone.setAttribute("visible",true);
      
              }     