import logo from './logo.svg';
import {peoples} from './PeopleList';

import './App.css';
import BirthdayGuy from './BirthdayGuy';

function App() {
  let p;
  return (
    <div className="App">
      
      <h1>Birthday Remainder App</h1>
      <div className='Birthday-Card'>
        {
          console.warn(peoples)
        }

      {
        
     
      /* peoples.filter((people)=>{

          let timeElapsed = Date.now()
          let today = new Date(timeElapsed)
           today=today.toLocaleDateString()
           if(people.birthdate==='15/12/1998')
           {
             console.log('Yo'+people.name)
             
             return people
           }


        })*/
        

      }
      
      {

         peoples.map((people)=>{
         
       // alert(today);
       let timeElapsed = Date.now()
       let today = new Date(timeElapsed)
        today=today.toLocaleDateString()
        if(people.birthdate.split('/')[0]===today.split('/')[0])
        {
          return <BirthdayGuy people={people}/>
        }
         
         
          
        })
        
      }

      </div>
      
      
      
    </div>
  );
}

export default App;
