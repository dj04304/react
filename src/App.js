import logo from './logo.svg';
import './App.css';


function Nav(props) {

  const list = props;

  console.log("props", list);

  const lis = []

  const test = props.topics.length;

  console.log("test", test);

  for(let i =0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
          <a id={t.id} href={"/read/"+t.id} onClick={(e) => {
              e.preventDefault();
              props.onClickMode(e.target.id);
          }}>{t.title}</a>
        </li>)
  }

  return <nav>
    <ol>
        {lis}
    </ol>
  </nav>
  
}

function Article(props) {
  
  return <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </article>

}

function Header(props) {
  console.log("props", props, props.title)
  
  return <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
}

function SignInBtn() {
  return <button>로그인 버튼</button> 
}


function App() {
  const topics = [
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."}

  ]


  return (
    <div className="App">
        <Header title="WEB" onChangeMode={() => {
          alert("Header");
        }}></Header>
        <Nav topics={topics} onClickMode={(id) => {
          alert(id);
        }}></Nav>
        <Article title="Welcome" body="Hello, Web"></Article>
        <Article title="HI" body="Hello, Test"></Article>
        <SignInBt></SignInBt>
    </div>
  );
}

export default App;
