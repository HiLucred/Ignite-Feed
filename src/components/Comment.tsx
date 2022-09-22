import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCounts, setLikeCounts] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCounts((state) => {
      return state + 1
    })
  }

  return (
    <div>
      <div className={styles.comment}>
        <Avatar
          src="https://github.com/hilucred.png"
          hasBorder={false}
          alt={""}
          
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Gabriel Pedroso</strong>
                <time
                  title="11 de Maio ás 08:13h"
                  dateTime="2022-05-11 08:13:30"
                >
                  Cerca de 2h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCounts}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
