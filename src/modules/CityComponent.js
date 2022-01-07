import styled from "styled-components";
const Weatherlogo=styled.img`
width:140px;
height:140px;
margin:40px auto;
`;

const ChooseCityLebel=styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
`;

const SearchBox=styled.form`
dislay:flex;
flex-direction:row;
border:black solid 1px;
border-radius:3px;
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;

& input{
  padding:10px;
  font-size:14px;
  border:none;
  outline:none;
  font-weight:bold;
}
& button{
  padding:11px;
  color:white;
  background:black;
  font-size:14px;
  border:none;
  outline:none;
  font-weight:bold;
  cursor:pointer;
}
`;


const CityComponent=(props)=>{
  const {updateCity,fetchWeather}=props;
  return(
<>
<Weatherlogo src="/icon/perfect-day.svg"/>
<ChooseCityLebel>Find Weather Of Your City</ChooseCityLebel>
<SearchBox onSubmit={fetchWeather}>
  <input placeholder="City" onChange={(e)=>updateCity(e.target.value)}/>
  <button type="submit">Search</button>
</SearchBox>
</>
  );
}
export default CityComponent;