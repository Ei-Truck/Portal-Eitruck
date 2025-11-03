import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";

export default function Home(){
    return (
        <>
            <Navbar/>
            <div style={{display: "flex", height: "92vh"}}>
                <div><Sidebar/></div>
                <iframe title="adm_dashboard" width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiZTU3MjUzMjgtNjU3NC00NDMyLWI2YWYtMWNkYTE2OTJjYmY2IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9" frameborder="0" allowFullScreen="true" style={{transform: "scale(0.9)"}}></iframe>
            </div>
            
            
        </>
    )
}