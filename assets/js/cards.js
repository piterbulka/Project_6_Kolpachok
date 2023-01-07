const boys = [
  {
    id: 1,
    img: '../assets/img/boy/ded.jpg',
    title: 'Гладиатор',
    number: 607,
    price: 1900,
  },
  {
    id: 2,
    img: 'https://ronitto.ru/wp-content/uploads/2021/09/607-400x602.jpg',
    title: 'test',
    number: 607,
    price: 1900,
  },
  {
    id: 3,
    img: 'https://ronitto.ru/wp-content/uploads/2021/09/607-400x602.jpg',
    title: 'testtes',
    number: 607,
    price: 1900,
  },
  {
    id: 4,
    img: 'https://ronitto.ru/wp-content/uploads/2021/09/607-400x602.jpg',
    title: 'test10000',
    number: 607,
    price: 1900,
  },
];

function MyApp() {
  const cardBoys = boys.map((item) => {
    return (
      <div key={item.id} class="list__item">
        <div class="item__img">
          <img width="400" height="602" src={item.img} class="img" alt={item.title} />
        </div>

        <div class="list__item-content">
          <h2 class="woocommerce-loop-product__title">{item.title}</h2>

          <span class="costume-number">Номер костюма: {item.number}</span>

          <span class="price">{item.price} руб./сутки</span>
        </div>
      </div>
    );
  });

  return (
    <div class="container">
      <div class="list">{cardBoys}</div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
