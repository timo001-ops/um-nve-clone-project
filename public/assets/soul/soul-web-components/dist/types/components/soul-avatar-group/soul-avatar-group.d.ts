export declare class SoulAvatarGroup {
  maxVisibleAvatars: number;
  size: 's' | 'm' | 'l' | 'xl';
  private counter;
  private slot;
  private supportedSizes;
  private VISIBLE_AVATAR_CLASS;
  private HIDDEN_AVATAR_CLASS;
  maxVisibleAvatarsChanged(): void;
  sizeChange(newValue: string): void;
  render(): any;
  private updateAvatarGroup;
  private updateCounter;
  private updateAvatarItems;
  private validateSize;
  private setAvatarVisibility;
  private standardizeAvatar;
}
