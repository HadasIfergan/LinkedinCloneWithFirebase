import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@material-ui/icons/Create';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import Subscriptions from '@material-ui/icons/Subscriptions';
import ViewDay from '@material-ui/icons/ViewDay';
import Event from '@material-ui/icons/Event';
import { db } from './firebase';
import firebase from 'firebase';



function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
        
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

      // useeffect- hook which allow me to fireoff code when the feed comp loads and when the comp re-renders 
      // from the db give me a snapshot of the posts collection , everytime the post gets added, delete, etc- I'll get a snapshot, that's a real time listener 
      //  everytime the post change I'm gonna update myPost piece of state. in my firebase collection I have many docs 
      //  map through the docs inside the collection, and for every single doc inside that collection I'll return the id.doc,doc.data.
     

//onClick function so it has an event 
  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Hadas Ifergan',
      description: 'hadas705@gmail.com',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
    //so the feed input will be clear everytime
  }; 


  return (
  <div className="feed">
      <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
              <form>
                  <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                  <button onClick={sendPost} type="submit">Send</button>
                  <input type='text' />
                  <button type='submit'>Send</button>
              </form>
          </div>

          <div className="feed__inputOptions">
            <InputOption Icon={InsertPhoto} title='Photo' color='#70B5F9'/>

            <InputOption Icon={Subscriptions} title='Video' color='#E7A33E'/>

            <InputOption Icon={Event} title='Event' color='#C0CBCD'/>

            <InputOption Icon={ViewDay} title='Write article' color='#7FC15E'/>
            
          </div>
      </div>

     
      {posts.map(({ id, data: { name, description, message, photoUrl} }) => (
        <Post 
        //key from our db for each post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

  </div>
  );
}

export default Feed;