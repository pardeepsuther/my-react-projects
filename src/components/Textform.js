import React, {useState} from 'react'



export default function Textform(props) {
    
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = ()=>{
        //console.log("upperCace was clicked");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been converted to UpperCase","success")
    }
    const handlelowClick = ()=>{
        //console.log("upperCace was clicked");
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been converted to LowerCase","success")
    }
    const handleRemoveSpaceClick = ()=>{
        //console.log("upperCace was clicked");
        let newText = text.replace(/\s+/g,' ');
        setText(newText)
        props.showAlert("Extra spaces has been removed","success")
    }
    const handleClearTextClick = ()=>{
        //console.log("upperCace was clicked");
        //let newText = text.replace(/\s+/g,' ');
        setText("")
        props.showAlert("Text has been cleared","success")
    }
    const handleOnChange = (event)=>{
       // console.log("upperCace was clicked");
        setText(event.target.value)
    }
    return (
    <div className="my-10" style={{background: props.mode==='dark'?'black':'white',text: props.mode==='dark'?'white':'dark' ,colorScheme: props.mode==='dark'?'dark':'white'}}  >
        <div className='mx-3'>
            <h3 style={{color: props.mode==='dark'?'white':'black'}}>Enter Text Here to Analyse</h3>
            <textarea className="form-control" style={{color: props.mode==='dark'?'white':'black',background: props.mode==='dark'?'#28282B':'white'}} id="textArea1" onChange={handleOnChange} value={text} rows="5"></textarea>
        </div>
        <button className={`btn btn-primary border-${props.mode==='dark'?'white' : ''} ${props.mode==='dark'?'btn-dark' : ''} mx-3 my-3`} onClick={handleUpClick}>Change to UpperCase</button>
        <button className={`btn btn-primary border-${props.mode==='dark'?'white' : ''} ${props.mode==='dark'?'btn-dark' : ''}  `} onClick={handlelowClick}>Change to LowerCase</button>
        <button className={`btn btn-primary border-${props.mode==='dark'?'white' : ''} ${props.mode==='dark'?'btn-dark' : ''}  mx-3`} onClick={handleRemoveSpaceClick}>Remove extra spaces</button>
        <button className={`btn btn-primary border-${props.mode==='dark'?'white' : ''} ${props.mode==='dark'?'btn-dark' : ''}  `} onClick={handleClearTextClick}>Clear TextArea</button>
        <div className="container">
            <h3 style={{color: props.mode==='dark'?'white':'black'}}>Your Text Summery</h3>
            <p style={{color: props.mode==='dark'?'white':'black'}}><strong>{text.split(/\s+/).filter(word => word !== '').length}</strong> Words AND<strong> {text.length}</strong> Characters</p>
            <p style={{color: props.mode==='dark'?'white':'black'}}><strong>{(text.split(/\s+/).filter(word => word !== '').length*0.008).toFixed(2)}</strong> mints to read</p>
            {/* <p style={{color: props.mode==='dark'?'white':'black'}}>{text===""?0:text.trim().split(" ").length*0.008} mints to read</p> */}
        </div>
    </div>
    
  )
}
