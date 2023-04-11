import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const contadorRef = useRef(null);
  console.log('Pai renderizou');

  //Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((result2) => setPosts(result2));
  }, []);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, [value]);

  useEffect(() => {
    // Quando for alterado o valor de useRef()
    // não causa uma nova reinderizacao
    contadorRef.current++;
  });

  const handleOnclick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h6>Renderizou: {contadorRef.current}x</h6>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {/* Pode memorizar um componente ou valores */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleOnclick} />
          ))
        );
      }, [posts])}

      {posts.length <= 0 && <p>Não há registros</p>}
    </div>
  );
}

export default App;
