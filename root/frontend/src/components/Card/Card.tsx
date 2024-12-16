import React from 'react';
import './Card.scss';

type CardProps = {
  title?: {
    text: string;
    size: "h1" | "h2" | "h3";
  };
  content: React.ReactNode;
}

const Card = ({
  title,
  content
}: CardProps) => {
  return (
    <div className="card">
      <div>
        {(!title) ? null : (
          React.createElement(
            title.size,
            { className: "card-title" },
            title.text
          )
        )}
      </div>
      <div>
        {(content)}
      </div>
    </div>
  )
}

export default Card;