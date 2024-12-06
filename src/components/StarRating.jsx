import Star from "./Star.jsx";
import { useState } from "react";

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
}

const starContainerStyle = {
  display: 'flex',
}



export default function StarRating(
  {
    maxRating = 5,
    color = '#fcc419',
    size = 48,
    className = "",
    defaultRating = 0,
    onSetRating
  }
) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: '1',
    margin: 0,
    color,
    fontSize: `${size / 1.5}px`,
  }

  const handleRating = (newRating) => {
    setRating(newRating);
    onSetRating && onSetRating(newRating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {
          Array(maxRating).fill(null).map((_, index) => (
            <Star key={index}
                  onRate={() => handleRating(index + 1)}
                  onHoverIn={() => setTempRating(index + 1)}
                  onHoverOut={() => setTempRating(0)}
                  full={tempRating ? tempRating > index : rating > index}
                  size={size}
                  color={color}
            />
          ))
        }
      </div>
      <p style={textStyle}>{ tempRating || rating || "" }</p>
    </div>
  )
}
