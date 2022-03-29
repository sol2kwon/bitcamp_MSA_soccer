import react,{useState} from "react";

export default function Grade(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name,kor,eng,math,total,avg,pon} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const {value,name} = e.target;
    setInputs({
        ...inputs,[name]:value
    })
    }
    const handleClick =(e)=>{
        e.preventDefault(
        setResult(`${name}님의 점수는 국어:${kor} 영어:${eng} 수학:${math} 총점:${total} 입니다.`))
    }
    const totalgrade =()=>{
        setInputs({
            ...inputs,
            total: Number(kr)+Number(en)+Number(math)
        })
    }
return (<layout>
<h1>Grade</h1>
<from>
<label>이름</label>
<input type="text" onChange={handleChange} name="name"/><br/>

<label>국어</label>
<input type="text" onChange={handleChange} name="kor"/><br/>

<label>영어</label>
<input type="text" onChange={handleChange} name="eng"/><br/>

<label>수학</label>
<input type="text" onChange={handleChange} name="math"/><br/>

<button onClick = {hadleClick}>성적조회</button>
<div>결과 :{result}</div>
</from>
</layout>)
}
