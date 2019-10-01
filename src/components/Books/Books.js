import React from "react";
import Firebase from "firebase";
import config from "./config";

class Books extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      recommendedBooks: []
    };
  }

  componentDidMount() {
    this.getBookData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeBookData();
    }
  }

  writeBookData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
  };

  getBookData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let title = this.refs.title.value;
    let author = this.refs.author.value;
    let bId = this.refs.bId.value;

    if (bId && title && author) {
      const { recommendedBooks } = this.state;
      const bookIndex = recommendedBooks.findIndex(data => {
        return data.bId === bId;
      });
      recommendedBooks[bookIndex].title = title;
      recommendedBooks[bookIndex].author = author;
      this.setState({ recommendedBooks });
    } else if (title && author) {
      const bId = new Date().getTime().toString();
      const { recommendedBooks } = this.state;
      recommendedBooks.push({ bId, title, author });
      this.setState({ recommendedBooks });
    }

    this.refs.title.value = "";
    this.refs.author.value = "";
    this.refs.bId.value = "";
  };

  render() {
    const { recommendedBooks } = this.state;
    return (
      <React.Fragment>
          <div className="books-current">
              <h3>Currently Reading:</h3>
              <p className="books-title">On a Marche Sur La Lune</p>
              <p className="books-author">Herge</p>
          </div>
          <div className="books-recommendation">
              <h3>Please Recommend a Book:</h3>
              <form onSubmit = {this.handleSubmit}>
                <input type="hidden" ref="bid"/>
                <label for="bookTitle">Title</label>
                <input type="text" ref="title" name="bookTitle"/>
                <label for="bookAuthor">Author</label>
                <input type="text" ref="author" name="bookAuthor"/>
              </form>
              { recommendedBooks.map(recommendedBook =>
                    <div className="books-recommended">
                        <p className="books-title">{recommendedBook.title}</p>
                        <p className="books-author">{recommendedBook.author}</p>
                    </div>
                ) }
          </div>
      </React.Fragment>
    );
  }
}

export default Books;
