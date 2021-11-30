import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

const style = /*css*/`
* {
  font-size: 200%;
}

span {
  width: 4rem;
  display: inline-block;
  text-align: center;
}

button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  background-color: seagreen;
  color: white;
}
`;

@define({ tag: "my-counter", shadow: true, styles: [style] })
export class MyCounter extends Component {

  count = super.reactive(0);

  render() {
    return html`
      <button onclick=${() => this.count--}>-</button>
      <span>${this.count}</span>
      <button onclick=${() => this.count++}>+</button>
    `;
  }
}