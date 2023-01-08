
const boys = [
  {
    id: 1,
    img: '../assets/img/boy/ded.jpg',
    title: 'Дед Мороз',
    number: 607,
    price: 300,
  },
  {
    id: 2,
    img: '../assets/img/boy/princ.jpg',
    title: 'Принц',
    number: 607,
    price: 300,
  },
  {
    id: 3,
    img: '../assets/img/boy/samuray.jpg',
    title: 'Самурай',
    number: 607,
    price: 300,
  },
  {
    id: 4,
    img: '../assets/img/boy/wolf.jpg',
    title: 'Волк',
    number: 607,
    price: 300,
  },
];

function MyApp() {
  const cardBoys = boys.map((item) => {
    return (
      <div key={item.id} class="list__item">
        <div class="item__img">
          <img  src={item.img} class="img" alt={item.title} />
        </div>

        <div class="list__item-content">
          <h2 class="list__item-content-title  ">{item.title}</h2>
          <span class="list__item-content-price">{item.price} руб./сутки</span>
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
