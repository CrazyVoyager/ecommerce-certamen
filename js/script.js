fetch('backend/productos.json')
  .then(response => response.json())
  .then(productos => {
    const lista = document.getElementById('lista-productos');
    const buscador = document.getElementById('buscador');

    function mostrar(listaFiltrada) {
      lista.innerHTML = '';
      listaFiltrada.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.nombre} - $${p.precio}`;
        lista.appendChild(li);
      });
    }

    mostrar(productos);

    buscador.addEventListener('input', () => {
      const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(buscador.value.toLowerCase())
      );
      mostrar(filtrados);
    });
  });
