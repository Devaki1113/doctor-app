import {Component} from "react"
import {Link} from "react-router-dom"
const doctordata=[
    {
    id:1,
    name:"Dr.sanjana",
    specialization:"cardiologist",
    image:"https://randomuser.me/api/portraits/women/93.jpg",
    availability:"Available-today",
    Years:5,
    Consultation:600
},
 {
    id:2,
    name:"Dr.lokesh",
    specialization:"Dermatologist",
    image:"https://randomuser.me/api/portraits/men/47.jpg",
    availability:"Fully booked",
     Years:10,
    Consultation:700
},
 {
    id:3,
    name:"Dr.Meera",
    specialization:"Dentist",
    image:"https://randomuser.me/api/portraits/women/32.jpg",
    availability:"On leave",
     Years:5,
    Consultation:700
},


]

class DoctorDetails extends Component{
   
    
    
    
    render(){
        
        const{match}=this.props
        const{params}=match
        const{id}=params
        console.log(doctordata)
        
       const data=doctordata.filter(each=>(each.id)===Number(id))
   
       
        
        return(
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:100}}>
          
           <><div style={{display:"flex"}}> 
        <div style={{marginRight:40,marginTop:40}}>
           <img src={data[0].image} alt={data[0].name}/>
           </div>
           <div>
                <h3>{data[0].name}</h3>
                <p>{data[0].specialization}</p>
                <p>Location : Hyderabad</p>
                <p>{data[0].Years} Years Of Experience</p>
                <p>{data[0].Consultation} Consultation Fee</p>
                <Link to="/loginform">
                <button type="button" style={{cursor:"pointer"}}>Book Appointment</button></Link>
          </div> 
        </div></>
           
    
         </div>
        )
    }
}
export default DoctorDetails
/*
 <h3>{data[0].name}</h3>
           <img src={data[0].image} alt={data[0].name}/>
           <p>{data[0].specialization}</p>
           <button type="button">Book Appointment</button>
           */