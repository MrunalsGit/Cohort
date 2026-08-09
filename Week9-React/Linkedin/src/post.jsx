
export function PostComponent({name,subtitle,time,image,description}){
  return (
    <>
      <div style={{width:350, backgroundColor:"#b2bec3", borderRadius:20, border:"1px solid black", margin:"10px 0", padding:"5px 5px 30px 1px" }}>
        <div style={{
          display:"flex"
        }}>
          <img src={image} style={{
            width:45, height:45,padding:15, borderRadius:40, 
          }} />

          <div style={{paddingTop:15, fontSize:14}}>
            <b >{name}</b>
            <div >{subtitle}</div>
            {time && <div style={{display:"flex"}}>
              <div>{time} </div>
              <img style={{marginLeft:5, height:15,width:15,borderRadius:20}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2Lnlpr8o1CxF57PAH2Bg6I_MXrvC4kSYevlojvaBrw&s=10"/>
            </div>}
          </div>
        </div>

        <div style={{padding:"5px 5px 5px 16px"}}>
          {description}
        </div>
      </div>
    </>
  )
}