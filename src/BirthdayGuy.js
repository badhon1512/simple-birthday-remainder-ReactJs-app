function BirthdayGuy(props)
{
  let date=props.people.birthdate.split('/');
  let timeElapsed = Date.now()
  let today = new Date(timeElapsed)
  today=today.toLocaleDateString()
 let birthyear=today.split('/')
  let age=birthyear[2]-date[2];
 // alert(date[0]);
  return(

    <div className='Birthday_Guy'>
    {
     // alert(props.people.img)
    }
    <img src={props.people.img} alt="picture" />
    <span className='details'>
    <span> {props.people.name}</span>
    
   
    <span className="year"> {age} years old</span>
    </span >
   

      
    
    </div>
  )
}
export default BirthdayGuy;