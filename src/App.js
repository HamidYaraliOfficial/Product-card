import React from 'react';
import './App.scss';

const Image = (props) => {
    return (
        <img src={props.source} className={props.class} alt="oops!!" />
    );
};

const Button = (props) => {
    return (
        <button className={props.class}>{props.text}</button>
    );
};

const Content = (props) => {
    return (
        <div className="card__content">
      <span className="card__texts">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__desc">{props.desc}</p>
        <p className="card__price">{props.price}</p>
      </span>
            <button className="card__like">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            </button>
        </div>
    );
};

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <span className="card__shade" />
                <Image class="card__img" source={this.props.src} />
                <Content
                    title={this.props.title}
                    desc={this.props.desc}
                    price={this.props.price}
                />
                <div>
                    <Button class="card__btn card__btn--green" text="Buy Now" />
                    <Button class="card__btn card__btn--white" text="Add to Cart" />
                </div>
            </div>
        );
    }
}

const items = [
    { src: "https://unsplash.com/photos/NLlWwR4d3qU/download?force=true&w=640", desc: "Lorem ipsum dolor sit amet consectetur.", title: "Brown Wooden Chair", price: "500$" },
    { src: "https://unsplash.com/photos/Z_ToYXAj_fA/download?force=true&w=640", desc: "Lorem ipsum dolor sit amet consectetur.", title: "Gold Wooden Chair", price: "1200$" },
    { src: "https://unsplash.com/photos/Yh7HRBScECs/download?force=true&w=640", desc: "Lorem ipsum dolor sit amet consectetur.", title: "Black Metal Chair", price: "400$" }
];

const Main = () => (
    <section>
        {items.map((item, index) => (
            <Card key={index} src={item.src} title={item.title} desc={item.desc} price={item.price} />
        ))}
    </section>
);

export default Main;