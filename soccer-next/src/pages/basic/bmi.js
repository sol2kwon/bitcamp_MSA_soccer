import react, {useState} from 'react';

export default function Bmi(){

const [inputs,setInputs] = useState({})
const [result,setResult] = useState('')
const {name,weight,height} = inputs;


const handleChange =(e)=>{
    e.preventDefault()
    const{value,name} = e.target;
    setInputs({...inputs,[name]:value})
}
const hadleClick = (e)=>{
    e.preventDefault()
    setResult(`${name}님의 BMI 결과는 ${(weight *10000/height/height).toFixed(2)}입니다.`)

}

return <div>
<h1>BMI</h1>

<form>
    <label><b>이름</b></label>
    <input type ="text" onChange = {handleChange} name = "name"/><br/>

    <label><b>몸무게</b></label>
    <input type ="text" onChange = {handleChange} name = "weight"/><br/>

    <label><b>키</b></label>
    <input type ="text" onChange = {handleChange} name = "height"/><br/>

    <button onClick = {hadleClick}>계산하기</button>
</form>
<div>BMI 결과:{result}</div>
</div>

}