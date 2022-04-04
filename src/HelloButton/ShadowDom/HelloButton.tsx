import Component from '@enbock/ts-jsx/Component';
import {ShadowDomElement} from '@enbock/ts-jsx/ShadowDom';

export default class HelloButton extends Component {
    private boundedHello: () => void = this.sayHello.bind(this);

    public render(): ShadowDomElement | ShadowDomElement[] {
        return <button onClick={this.boundedHello}>Click me</button>;
    }

    private sayHello(): void {
        alert('Hello');
    }
}
