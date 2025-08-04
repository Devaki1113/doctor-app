import {Component} from "react";
class Login extends Component{
    state={patientName:"",email:"",dateofappointment:"",showUser:false}
    getName=(event)=>{
   this.setState({patientName:event.target.value})
    }

     getEmail=(event)=>{
   this.setState({email:event.target.value})
    }

     getDate=(event)=>{
   this.setState({dateofappointment:event.target.value})
    }
    
    getSuccess=(event)=>{
        event.preventDefault()

        this.setState(prev=>({showUser:!prev.showUser}))
        

    }
    render(){
        const{email,patientName,showUser,dateofappointment}=this.state
        return(
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      {showUser ?(<h1>Details Are Submitted</h1>):
      (<form onSubmit={this.getSuccess} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderColor:"black",borderWidth:1,borderRadius:10,height:400,padding:10}}>
            <h3>Patient Details</h3>
            <div style={{display:"flex",marginBottom:15}}>
            <label htmlFor="name" style={{marginRight:10}}>NAME :</label>
            <input type="text" id="name" placeholder="Name" value={patientName} onChange={this.getName}/> 
            </div>
           <div style={{display:"flex",marginBottom:15}}>
            <label htmlFor="email" style={{marginRight:10}}>EMAIL :</label>
            <input type="text" id="email" placeholder="Email" value={email} onChange={this.getEmail}/> 
            </div>
            <div >
            <label htmlFor="dateOfAppointment" style={{marginRight:10}}>DATE OF APPOINTMENT :</label>
            <input type="date" id="dateOfAppointment" placeholder="Email" value={dateofappointment} onChange={this.getDate}/> 
            </div>
           <button type="submit" style={{marginTop:19,cursor:"pointer"}} >Submit</button>
        </form>)} 
    </div>
        )
    }
}
export default Login