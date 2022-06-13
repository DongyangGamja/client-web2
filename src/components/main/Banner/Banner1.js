import { useState } from "react"
import "./Banner.scss"
export default function Banner1(){
    
    const [isImg, setIsImg]=useState("0");
    return(

        <div>
            <img id="main_img1" src="img/Main2_img.png" width="100%"></img>
            <button id="More_info"
                 onMouseOver={()=> setIsImg("1")} 
                 onMouseOut={()=> setIsImg("0")}>
                     {isImg ==="1" ? 
                     <img src="img/more_info2.png" width="100%" ></img> : <img src="img/more_info.png" width="100%" ></img>}   
                </button>
            
        </div>
        
        )
        
        

}
