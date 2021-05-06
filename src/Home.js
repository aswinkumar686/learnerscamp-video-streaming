import React,{useEffect, useState} from 'react'
import fire from "./config/fire";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";

function Home({user}) {

    const [count, setCount] = useState(0)

    const logout=()=> {
        fire.auth().signOut();
      }
     
    const  handleEnded = () => {
        updateCount();
        setCount(count+1)
        
        
    };
    const updateCount= ()=>{
      const countRef = fire.database().ref(user.uid);
      countRef.update({
        count:count+1,
      })
    }
    useEffect(() => {
      if(user){
      const countRef = fire.database().ref(user.uid)
      countRef.on("value",(snapshot)=>{
        
        const val = snapshot.val()
        console.log(val)
        for (let id in val){
            setCount(val['count'])
            console.log(val['count'])
        };

      });
    }
    }, [count])

    return (
        <>
             <h1>You are logged in !!!</h1>
        <button onClick={logout}>Logout</button>
        <p>count {count}</p>
        <div>
          <video
            onEnded={handleEnded}
            src={video1}
            width="200px"
            style={{ height: "20vh", marginRight: "10px" }}
            controls
          ></video>
          <video
            onEnded={handleEnded}
            src={video2}
            width="200px"
            style={{ height: "20vh", marginRight: "10px" }}
            controls
          ></video>
          <video
            onEnded={handleEnded}
            src={video3}
            width="200px"
            style={{ height: "20vh", marginRight: "10px" }}
            controls
          ></video>
          <video
            onEnded={handleEnded}
            src={video4}
            width="200px"
            style={{ height: "20vh", marginRight: "10px" }}
            controls
          ></video>
          
        </div>
        </>
    )
}

export default Home
