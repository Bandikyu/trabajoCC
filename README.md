# TP Integrador CC

[En Replit](https://tp.brunoripoll1.repl.co)

[En GitHubPage](https://bandikyu.github.io/trabajoCC/)

[Repositorio GitHub](https://github.com/Bandikyu/trabajoCC)

---

### ❌ Error al probar el responsive

#### Replicar error:

En la sección **`Comprar Tickets`** cuando se borra cualquiera de los 3 primeros campos, y se **redimensiona** a alguno de los tamaños mobile, el **body queda en la mitad del viewport**. 

#### Evitar o arreglar:
Para no tener este problema **al probar las dimensiones**. **Si se borran** algunos de estos campos, hay que **actualizar la página** antes o después de la redimension 

---

### 📑 Características del trabajo:

#### Primera parte (HTML - CSS - Bootstrap)[^2]
- Use y modifique el `componente carousel` (para agregar todas las imagenes que venian de Bs As en el zip).
- `Scrollspy` (para que el nav haga seguimiento de los titulos).
- Use validaciones del `Form`
- Modifique el estilo de los `input` cuando estan `:focus`.
- Modifique el lugar del `Navbar` (para que en dispositivos mobile quede abajo).
- y agregue algunos detalles con `hover`.

#### Segunda parte (Git - JavaScript)
- **`Las tarjetas`** de los descuentos estan vinculadas a los elementos **`option`** del formulario, si cambia uno cambia el otro.
- El botón de **`Resumen`** esta **deshabilitado** hasta que se coloque la cantidad y la categoría del ticket.
- El `tooltips` de boostrap avisa porque esta desactivado el botón de **`Resumen`**. Y **cuando se habilita el botón el tooltip ya no aparecerá**.
- **Cambia** el botón de **`Resumen` a `Comprar`** cuando le damos click[^1].
- Modificar la categoría renueva el resultado y vuelve el botón a **`Resumen`**.

---
#### 📘 Notas:
[^1]: Mejorar => En lugar de que el boton `Resumen` cambie a `Comprar` cuando se le hace click, que cambie cuando haya un resultado.
[^2]: History => [Old branch](https://github.com/Bandikyu/trabajoCC/tree/HTML-CSS-Boostrap)
