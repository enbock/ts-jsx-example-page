import ShadowRenderer from '@enbock/ts-jsx/ShadowRenderer';
import HelloButton from './HelloButton/ShadowDom/HelloButton';

const node: HTMLElement = ShadowRenderer.render(<HelloButton/>);
document.body.append(node);
