import React ,{useState, useEffect, useRef}  from 'react';
import ReactHowler from 'react-howler';
import './App.css';
function App() {
  const [comments,setComments] = useState([]);
  const [message,setMessage] = useState('');
  const [play,setPlay] = useState(false);
  const [song,setSong] = useState('');
  const url = useRef(null);
  useEffect(() => {
      fetch('http://localhost:3333/list')
      .then(res => res.json())
      .then(
        (result) => {
          setComments(result)
        }
      )
      
      
  });
  
  async function handleNewComment(e){
      e.preventDefault();
      const data = {
        "message": message
      }
      console.log(data);
      fetch('http://localhost:3333/post', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(data)
      }).then(setMessage(""))

  }
  function playMusic(texto){
    console.log(texto)
    fetch(`http://localhost:3333/convert/${texto}`)
    .then(setPlay(!play));
  }

  return (
    <div className="App">
      <div className="content">
        <div className="input-text">
            <h1 className="input-title">Comentário</h1>
            <div className="input-form">
              <form onSubmit={handleNewComment}>
                <textarea 
                  className="comment-area"
                  type="text" 
                  id="comment" 
                  name="comment" 
                  placeholder="Entre com o comentário a ser cadastrado" 
                  rows="10" 
                  value = {message}
                  onChange = {e => setMessage(e.target.value)}
                  />
                <button type="submit" >Cadastrar</button>
              </form>
            </div>
        </div>
        <div className="comments">
          <h1>Comentários</h1>
          <div clasName="list-container">
            <ReactHowler 
            
            src={`http://localhost:3333/audio/audio.wav`}
            playing={play}
            loop={false}
            />
            <ul className="comments-list">
              {comments.map(comment => (
                <li key={comment.id}>
                  <p className="comment">{comment.texto}</p>
                  <button type="submit" onClick={()=>{playMusic(comment.texto)}}>Ouvir
                  
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
