'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import React from 'react';

function Comment({ comment }: { comment: string }) {
  // by default most text will be hidden
  const [isExpanded, setIsExpanded] = useState(false);
  // involk everytime click on btn
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  // check length or if its expanded to shorten comment
  const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;
  // want to short if not expanded/long comment is true
  // if true we'll display the entire comment
  return (
    <div>
      <p className='text-sm'>{displayComment}</p>
      {longComment && (
        <Button
          variant='link'
          className='pl-0 text-muted-foreground'
          onClick={toggleExpanded}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
}

export default Comment;
