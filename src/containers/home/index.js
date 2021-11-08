import React from 'react';
import Reach from 'react';
import "./home.css";

class Home extends React.Component {
    render() {
        return(
            // inline styling w JSX
            // <section style={{backgroundColor: 'blue', color: 'yellow'}}>
            //     <h1 style={styles.titleText}>This is my home page</h1>
            //     <p id="home-para" className="para-style">
            //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic doloribus omnis quam, minima eos voluptas a voluptates vitae velit illo repudiandae fuga assumenda modi dolor necessitatibus, iste fugiat sit beatae laboriosam nihil aliquid. Sint deleniti cumque autem at cupiditate. Facilis, deleniti! Veniam, vero minus. Repudiandae sunt sapiente assumenda deleniti odio?
            //     </p>
            // </section>

            <section id="home">
                <h1 style={styles.titleText}>This is my home page</h1>
                <p id="home-para" className="para-style">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic doloribus omnis quam, minima eos voluptas a voluptates vitae velit illo repudiandae fuga assumenda modi dolor necessitatibus, iste fugiat sit beatae laboriosam nihil aliquid. Sint deleniti cumque autem at cupiditate. Facilis, deleniti! Veniam, vero minus. Repudiandae sunt sapiente assumenda deleniti odio?
                </p>
            </section>
        );
    }
}

// internal styling
// we can save multiple stylings in an object which we can then apply to different html tags
const styles = {
    titleText: {
        fontSize: 50,
        fontWidth: 'bold',
        letterSpacing: '10px',
    },

};

export default Home;