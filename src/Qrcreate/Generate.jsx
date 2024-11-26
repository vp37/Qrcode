import { useState } from "react"


export const Generate = () => {
    let [img,setImg]=useState("");
    let [loading,setLoading]=useState(false)
    let [qrdata,setQrdata]=useState("vigneshprabhu.vercel.app")
    let [qrsize,setQrsize]=useState("150")
     async function generateqr(){
         setLoading(true);
         try {
            let url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setImg(url);
         } catch (error) {
            console.error("Error generating QR code",error);
         }finally{
            setLoading(false);
         }
    }
    function downloadqr(){
        fetch(img).then((response)=>response.blob()).then((blob) => {
            let link=document.createElement("a")
                link.href=URL.createObjectURL(blob)
                link.download="qr.jpg"
                document.body.appendChild(link);
                link.click()
                document.body.removeChild(link);
            
        })
    }


  return (
    <div className="appcontainer">
        <h1>Qr Code Generator</h1>
        {loading && <p>Please Wait Loading.......</p>}
        {img && <img src={img} className="images"  />}
        <div>
        
        <label htmlFor="datainput" className="inputlabel">
             Data for QR code:
        </label>
        <input type="text" value={qrdata} placeholder="Qr Generate" id="datainput" onChange={(e)=>setQrdata(e.target.value)} />
        <label htmlFor="datainput"  className="inputlabel">
             Image size (e.g,150):
        </label>
        <input type="text" value={qrsize} onChange={(e)=>setQrsize(e.target.value)} disabled={loading} placeholder="Image size" id="datainput" />
        <button className="generatebutton" onClick={generateqr}>Generate QR Code</button>
        <button className="download" onClick={downloadqr}>Download Qr Code</button>
        
        
        </div>
    </div>
  )
}
