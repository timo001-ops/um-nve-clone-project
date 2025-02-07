import { ComponentDidLoad } from '../../stencil-public-runtime';
export declare class SoulPrefetch implements ComponentDidLoad {
  fetchOnLoad: boolean;
  components: string[];
  delay: 0;
  private container;
  render(): any;
  componentDidLoad(): Promise<void>;
  fetchComponents(): Promise<void>;
}
