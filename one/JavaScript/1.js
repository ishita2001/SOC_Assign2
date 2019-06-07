var imageNum=0;
        var images=document.getElementsByClassName("image");
        
        function ahead(){
            imageNum+=1;
            if(imageNum==images.length){
                images[imageNum-1].style.display="none";
                imageNum=0;
                images[imageNum].style.display="inline";
            }
            else{
                images[imageNum-1].style.display="none";
                images[imageNum].style.display="inline";
            }
        }

        function back(){
            imageNum-=1;
            if(imageNum==-1){
                images[imageNum+1].style.display="none";
                imageNum=3;
                images[imageNum].style.display="inline";
            }
            else{
                images[imageNum+1].style.display="none";
                images[imageNum].style.display="inline";
            }
        }