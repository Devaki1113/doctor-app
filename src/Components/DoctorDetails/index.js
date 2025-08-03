import {Component} from "react"

class DoctorDetails extends Component{
    state={datafetched:[]}
    componentDidMount(){
        this.getData()
    }
    getData=async ()=>{
        
        
       const response=await fetch("/doctors.json")
       const data=await response.json()
       this.setState({datafetched:data})
   
    }
    
    
    render(){
        const{datafetched}=this.state
        const{match}=this.props
        const{params}=match
        const{id}=params
        console.log(datafetched)
        
       const data=datafetched.filter(each=>(each.id)===Number(id))
   
       
        
        return(
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:100}}>
          {data.length>0?
           (<><div style={{display:"flex"}}> 
        <div style={{marginRight:20,marginTop:40}}>
           <img src={data[0].image} alt={data[0].name}/>
           </div>
           <div>
                <h3>{data[0].name}</h3>
                <p>{data[0].specialization}</p>
                <p>Location : Hyderabad</p>
                <p>10 Years Of Experience</p>
                <a href="/loginform">
                <button type="button" style={{cursor:"pointer"}}>Book Appointment</button></a>
          </div> 
        </div></>):<h1>Loading...</h1>
           
    }
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