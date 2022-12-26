import React, { useState } from 'react'

export default function TextForm(props) {

    
    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const toUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const toLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${text}`);
    }

    const toTitleCase = () => {
        let newText = text;
        const words = newText.split(" ");
        for(let i=0; i<words.length; i++)
        {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1, words[i].length);
        }
        newText = words.join(" ");
        setText(newText);
    }

  const [text, setText] = useState('');

  
  return (
    <div className={`pt-1`} /*style={`backgroundColor: ${props.mode==='dark'?'#800080':'white'}`}*/>
        {/* <div> */}
            <div className="mb-3 mt-3 container">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows /> */}
                <textarea className={`form-control rounded text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`} placeholder='Enter your text here.' rows="8" value={text} onChange={textOnChange} />
                <div id="emailHelp" className={`form-text text-${props.mode==='light'?'dark':'light'}`}>We'll never share your data with anyone else.</div>
            </div>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-2 btn-${props.mode}`} onClick={toUpCase}>Upper Case</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-2 btn-${props.mode}`} onClick={toLoCase}>Lower Case</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-2 btn-${props.mode}`} onClick={copyToClipboard}>Copy</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-2 btn-${props.mode}`} onClick={toTitleCase}>Title Case</button>
        {/* </div> */}
        <div className='container'>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} minutes to read</p>
            <h4 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h4>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
        </div>
    </div>
  )
}
