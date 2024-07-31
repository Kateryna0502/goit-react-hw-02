const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neuntral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>
          <b>Total</b>: {total}
              </li>
              <li>Whiskey: {positive}</li>
      </ul>

      
    </div>
  );
};

export default Feedback;

