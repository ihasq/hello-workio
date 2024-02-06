const { Workio } = await import('./Workio.js');

const ExampleWorker = new Workio((myName) => {
  function echo(yourName) {
    return `Hello ${yourName} from ${myName}!`;
  }
  return { echo, close }; // expose as return value
});

const instance = new ExampleWorker('Workio');

document.body.textContent = await instance.echo('Worker');

await instance.close();
