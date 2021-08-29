import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";

const initialState = {
  content: "",
  author: "",
  votes: 0,
  id: 0,
}
function QuoteForm() {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }

  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const newQuote = {
      ...formData,
      votes: 0,
      id: uuid()
    };
    // Pass quote object to action creator
    dispatch(addQuote(newQuote));
    // Update component state to return to default state
    setFormData(initialState)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
