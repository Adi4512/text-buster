import React , {useState} from 'react'



export default function TextForm(props) {

    
     
    const handleUpClick =()=>{
      
      let newText=text.toUpperCase();
      setText(newText);
        
    }

    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick=()=>{
      let newText="";
      setText(newText);
  }
 
    const handleExtraSpaces = () => {
      let newText = text.replace(/\s+/g, ' ');
      setText(newText);
    }
    


    const handleOnChange=(event)=>{
       setText(event.target.value);
    }

    const [text,setText]=useState('Enter Text here');

    const wordCount=text.trim().split(/\s+/).filter(Boolean).length;





    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
  <h2>{props.heading}</h2> 
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey':'white', color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>To UpperCase</button>
<button className="mx-2 btn btn-primary" onClick={handleDownClick}>To LowerCase</button>
<button className="mx-2 btn btn-primary" onClick={handleClearClick}>Clear</button>
<button className="mx-2 btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{wordCount} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text above"}</p>

    </div>
    </>
  )
 }