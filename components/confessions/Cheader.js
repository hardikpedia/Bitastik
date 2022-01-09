import React from "react";
import Image from "next/image";
import whisper from "./love-letterrr.png";
import secret from "./theek.png";
function Cheader({data}) {
    
    return (
        <nav>
        <div className="icon"><span ><Image src={secret} height={48} width={48}></Image></span>CONFESSIONS</div>
        <div className="search_box">
          <form >
            <textarea type="search" placeholder={`What's in your mind ${data.displayName} ?`} />
            <button type="submit" class="wow" style={{  
  backgroundImage: `url(${whisper})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}/>
          
          </form>
        </div>
       
      </nav>
    );
  }
  
  export default Cheader;
  