import react,{useState} from "react";

export default function Login(){
    const[inputs,setInputs] = useState({})
    const[result,setResult] = useState('')
    const{name,id,pw} = inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const {value,name}=e.target;
        setInputs({
            ...inputs,[name]:value})
    }
    
    const handleClick =(e)=>{
        e.preventDefault()
        setResult(`${name}님의 아이디는${id} 비밀번호는 ${pw}`)

    }
    return( <layout><h1>로그인</h1>
    <from>
    <label><b>이름</b></label>
    <input type="text" onChange={handleChange} name = "name"/><br/>

    <label><b>아이디</b></label>
    <input type="text" onChange={handleChange} name = "id"/><br/>

    <label><b>비밀번호</b></label>
    <input type="text" onChange={handleChange} name = "pw"/><br/>
    
    <button onClick={handleClick}>로그인</button>
    <div>결과:{result}</div>
    </from>
    </layout>)
}
    
    
