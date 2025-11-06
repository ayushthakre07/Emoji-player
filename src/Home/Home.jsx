import "./Home.css"
import { useState } from "react";
import EmojiButton from "../EmojiButton/EmojiButton"
import ColorButton from "../Colorbutton/ColorButton"
import { IterationCcw,IterationCw } from 'lucide-react';
function Home() {
    const[emoji,setEmoji]=  useState("📌");

    const[sliderValue,setSliderValue]= useState(50);

    const[bgcolor,setBgcolor]= useState("#ffffffff");

    const[angle,setAngle]= useState(0);

  return (
 <div className="min-h-screen w-full bg-white relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(233, 235, 238, 0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(216, 218, 221, 0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 10% 100%, rgba(191, 101, 101, 0.3), transparent),
        radial-gradient(circle 500px at 100% 100%, rgba(6, 52, 152, 0.3), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 0% 0%, 0% 0%",
    }}
  ></div>

  <div className="app-container">
  <h1 className="header">
    Playing With Emoji Using {""}
    <span className="span">UseState</span>
  </h1>
  <p className="app-description">
This is a simple React App that demonstrates how to use the {""}
<code>useState</code> hook to manage state in a functional component.
  </p>

  <div className="emoji-container" style={{fontSize:`${sliderValue}px`, backgroundColor:bgcolor }}>

    <span style={{transform:`rotate(${angle}deg)`}} className="emoji">
    {emoji }
    </span>
    </div>
<div className="slider-container">
   {sliderValue}
 <input type="range"
  min= "0"
  max= "100" 
   onChange={(e)=>{
setSliderValue(Number(e.target.value));
 }}
 value={sliderValue}/>
 </div>
<div className="reset-container">
 <button onClick={()=>{ setAngle(angle + 30);}} className="reset-button"><IterationCw/> Rotate Right</button>

  <button onClick={()=>{ setAngle(angle + -30);}} className="reset-button"> Rotate Right <IterationCcw/></button>
  </div>

  <div className="emoji-picker">
<EmojiButton emoji={"😀"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🤔"} setEmoji={setEmoji}/>
<EmojiButton emoji={"👻"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🌞"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🐶"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🕊️"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🐣"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🧸"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🍕"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🌭"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🚗"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🚙"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🌋"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🏔️"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🌛"} setEmoji={setEmoji}/>
<EmojiButton emoji={"🌈"} setEmoji={setEmoji}/>

  </div>
   <div className="color-picker">
<ColorButton bgcolor={"#AF3E3E"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#56cd80ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#DA6C6C"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#690f84ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#B0DB9C"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#1d5505ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#73b955ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#264645ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#867070"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#992a5eff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#3fbfa7ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#fb4e4eff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#7286D3"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#8EA7E9"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#bd8b66ff"} setBgcolor={setBgcolor}/>
<ColorButton bgcolor={"#640606ff"} setBgcolor={setBgcolor}/>

  </div>
  </div>
</div>
  );
}

export default Home
