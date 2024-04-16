export function Tombol_1({isiPesan, namaTombol}: any){
    function handleClick(){
        alert("Tombol telah ditekan");
    }
          
    function handleMouseOver(){
        alert("Eits, mau mencet tombol ya?");
    }
    
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            // onMouseOver={handleMouseOver}
            onMouseLeave={()=>{
                alert("Loh, kok sudah pergi")
            }}
        >
            ini tombol
        </button>
    );
  }