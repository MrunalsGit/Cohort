interface InputType{
    placeholder : string,
    onChange : (e : any)=>void,
    width? : string
}

export function Input({placeholder, onChange, width} : InputType){
    return (
        <input placeholder={placeholder} onChange={onChange} style={{
            width : width ? width : "200px",
            margin: "2px 0 10px 0",
            padding : 10
        }}></input>
    )
}