const girls = [
    {
      id: 1,
      img: '../assets/img/girl/baryshnya.jpg',
      title: 'Русская красавица',
      number: 607,
      price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/elza.jpg',
        title: 'Эльза',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/frog.jpg',
        title: 'Лягушка',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/karmen.jpg',
        title: 'Кармен',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/magic.jpg',
        title: 'Хранительница времени',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/piratka.jpg',
        title: 'Пиратка',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/princess.jpg',
        title: 'Принцесса',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/sleep_girl.jpg',
        title: 'Спящая красавица',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/snegurochka.jpg',
        title: 'Снежная королева',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/snow_girl.jpg',
        title: 'Снегурочка',
        number: 607,
        price: 300,
    },
    {
        id: 1,
        img: '../assets/img/girl/vostok.jpg',
        title: 'Восточная танцовщица',
        number: 607,
        price: 300,
    },
  ];
  
  function MyApp() {
    const cardGirls = girls.map((item) => {
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
        <div class="list">{cardGirls}</div>
      </div>
    );
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);