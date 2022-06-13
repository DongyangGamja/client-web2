import { useState } from "react"
import "./Banner.scss"
export default function Banner2(){
    const [isImg1, setIsImg1]=useState("0");
    const [isImg2, setIsImg2]=useState("0");
    const [isImg3, setIsImg3]=useState("0");
    const [isImg4, setIsImg4]=useState("0");
    

    return(
            <div id="Hover_imgs">
                <div id="Hover_items"
                 onMouseOver={()=> setIsImg1("1")} 
                 onMouseOut={()=> setIsImg1("0")}>
                     {isImg1 ==="1" ? 
                     <img src="../../../img/hover_img1.png" width="100%" ></img> : <img src="../../../img/unhover_img1.png" width="100%" ></img>}
                     </div>
                <div id="Hover_items" 
                 onMouseOver={()=> setIsImg2("1")}
                 onMouseOut={()=> setIsImg2("0")}> 
                    {isImg2 ==="1" ? 
                    <img src="../../../img/hover_img2.png" width="100%" ></img> : <img src="../../../img/unhover_img2.png" width="100%" ></img>}
                    </div>
                <div id="Hover_items" 
                 onMouseOver={()=> setIsImg3("1")}
                 onMouseOut={()=> setIsImg3("0")}> 
                    {isImg3 ==="1" ? 
                    <img src="../../../img/hover_img3.png" width="100%" ></img> : <img src="../../../img/unhover_img3.png" width="100%" ></img>}
                    </div>
                <div id="Hover_items" 
                 onMouseOver={()=> setIsImg4("1")}
                 onMouseOut={()=> setIsImg4("0")}> 
                    {isImg4 ==="1" ? 
                    <img src="../../../img/hover_img4.png" width="100%" ></img> : <img src="../../../img/unhover_img4.png" width="100%" ></img>}
                    </div>
                    <p id="Mth">Make The World Healthy</p>
            </div>
        
    )
        
        

}
