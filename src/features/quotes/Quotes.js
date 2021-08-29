import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuoteCard from "./QuoteCard";
import { downvoteQuote, removeQuote, upvoteQuote } from "./quotesSlice";

function Quotes() {
  const quotes = useSelector(state => state.quotes)
 
  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotes.map?.((q) => (
              <QuoteCard
                key={q.id}
                quote={q}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
