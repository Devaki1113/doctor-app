import {Component} from "react";
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



class DoctorsCard extends Component{
    state={user:"",initialDoctorData:doctordata}
    gettingDoctor=(event)=>{
        this.setState({user:event.target.value})

    }
    render(){
        const{user,initialDoctorData}=this.state
        const updated=initialDoctorData.filter(each=>each.name.toLowerCase().includes(user.toLocaleLowerCase()))
        return(
            <>
            <input value={user} onChange={this.gettingDoctor} type="search" placeholder="Search For Doctor" style={{marginTop:50,marginLeft:40}}/>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:200}}>
           {updated.map(each=>
        <Link to={`/doctorDetails/${each.id}`} style={{textDecoration:"none"}}>
           <div >
            
                <img src={each.image} alt={each.name}/>
                <h3>{each.name}</h3>
                <p>{each.specialization}</p>
                <p>{each.availability}</p>
            </div>
            </Link>    
          
          )}
</div>
</>
        )
    }
}
export default DoctorsCard;