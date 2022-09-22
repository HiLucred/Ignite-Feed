/* COMPONENTS */
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

/* CSS */
import styles from "./App.module.css";
import "./global.css";

/* POSTS */
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/hilucred.png",
      name: "Gabriel Pedroso",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-09 15:26:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Back End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-13 15:26:00"),
  },
];

//Isso aqui é a Interface
export function App() {
  return (
    <div>
      {/* CABEÇAÇHO DA PÁGINA "IGNITE FEED" */}
      <Header />

      {/* CONTAINER COM O CONTEÚDO DA PÁGINA */}
      <div className={styles.wrapper}>
        {/* BARRA LATERAL COM AS INFORMAÇÕES DO USUÁRIO */}
        <Sidebar />

        {/* CONTEÚDO DA PÁGINA */}
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
