class Service {
  // Подписка на события
  on(event, callback) {
    this.listeners[event].push(callback);
  }

  // Отписка от события
  off(event, callback) {
    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  // Публикуем событие (ещё говорят — диспатчим, эмитим)
  emit(event, data) {
    this.listeners[event].forEach(function (listener) {
      listener(data);
    });
  }
}

const service = new Service();

// Функция-обработчик события
const onLoad = function (data) {
  console.log(data);
};

// Подписываемся на событие
service.on("ended", onLoad);
