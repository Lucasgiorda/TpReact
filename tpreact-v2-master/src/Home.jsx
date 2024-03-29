import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; 
// Supongamos que tienes una lista de posts como un array de objetos.



function Home() {
  const [admin,setAdmin] = useState(false);
  {/*useEffect que recupera la informacion del item posts y se la pone a post con set post*/}
  useEffect(() => {
    {/*carga post y admin*/}
    let PostsGuardados = JSON.parse(localStorage.getItem('posts'));
    let admin2 = JSON.parse(localStorage.getItem('admin'));
    setAdmin(admin2);
    if (PostsGuardados) setPost(PostsGuardados);
  }, []);
  function cerrar(e){
    const nposts = postss.filter((post)=>post.id !=e.target.value);
    setPost(nposts);
    console.log(e.target.value);
    localStorage.setItem('posts', JSON.stringify(nposts));
  }
  const [postss,setPost] = useState([]);
  return (
    <div>
      <h2>Lista de Posts</h2>
      {<Link to="/new-post">Nuevo Post</Link>}
      <ul>
        {/*un map que crea cada post usando la info en post*/}
        {postss.map((post) => (
          <div key={post.id}>
          <li >
            <h3>{post.title}</h3>
            <p>Autor: {post.author}</p>
           <ReactMarkdown>{post.content}</ReactMarkdown>
            {/*link individual de cada pagina 
            usa ruta post y usa el id del post
            para la ruta y este valor mas tarde en post es tomado por useParam*/}
            <Link to={`/post/${post.id}`}>Ver Detalles</Link>
            {admin &&<button value={post.id} onClick={cerrar}>borrar</button> }
          </li>
          </div>
        ))}
      </ul>
      
    </div>
  );
}

export default Home;