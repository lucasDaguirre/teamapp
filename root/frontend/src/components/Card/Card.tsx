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
  title
}: CardProps) => {
  return (
    <div className="card">
      {(!title) ? null : (
        React.createElement(
          title.size,
          { className: "card-title" },
          title.text
        )
      )}
    </div>
  )
}

export default Card;