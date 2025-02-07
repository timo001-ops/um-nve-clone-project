'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');
const utils = require('./utils-b4bbc9bf.js');
const StatusHelper = require('./StatusHelper-83d44969.js');
const SizeHelper = require('./SizeHelper-42d05c58.js');

const soulAvatarCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}.soul-indicator{display:block}.soul-indicator--s{width:var(--soul-line-height-s);height:var(--soul-line-height-s)}.soul-indicator--m{width:var(--soul-line-height-m);height:var(--soul-line-height-m)}.soul-indicator--positive{background-image:url('data:image/svg+xml;utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(122, 39%, 41%)\" stroke=\"hsl(122, 39%, 41%)\" stroke-width=\"1.5\"/><path d=\"M9.97653 17.4225L5 12.3991L6.40845 10.9906L9.97653 14.6056L17.5822 7L18.9906 8.40845L9.97653 17.4225Z\" fill=\"white\"/></g></svg>')}.soul-indicator--positive.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(122, 39%, 41%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M9.97653 17.4225L5 12.3991L6.40845 10.9906L9.97653 14.6056L17.5822 7L18.9906 8.40845L9.97653 17.4225Z\" fill=\"white\"/></g></svg>')}.soul-indicator--warning{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(42, 78%, 60%)\" stroke=\"hsl(42, 78%, 60%)\" stroke-width=\"1.5\"/><path d=\"M12 5L5 17.0909H19L12 5ZM12.7382 15.8182H11.2555V14.2973H12.7382V15.8182ZM11.2555 12.8464V8.39182H12.7382V12.8464H11.2555Z\" fill=\"white\"/></g></svg>')}.soul-indicator--warning.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(42, 78%, 60%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M12 5L5 17.0909H19L12 5ZM12.7382 15.8182H11.2555V14.2973H12.7382V15.8182ZM11.2555 12.8464V8.39182H12.7382V12.8464H11.2555Z\" fill=\"white\"/></g></svg>')}.soul-indicator--critical{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(0, 67%, 44%)\" stroke=\"hsl(0, 67%, 44%)\" stroke-width=\"1.5\"/><path d=\"M10.5 5H13.5L13.5 13.4H10.5L10.5 5ZM10.5 16.2H13.5V19H10.5V16.2Z\" fill=\"white\"/></g></svg>')}.soul-indicator--critical.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(0, 67%, 44%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M10.5 5H13.5L13.5 13.4H10.5L10.5 5ZM10.5 16.2H13.5V19H10.5V16.2Z\" fill=\"white\"/></g></svg>')}.soul-indicator--not-allowed{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(42, 78%, 60%)\" stroke=\"hsl(42, 78%, 60%)\" stroke-width=\"1.5\"/><path d=\"M12 5C10.072 5 8.42332 5.68466 7.05399 7.05399C5.68466 8.42332 5 10.072 5 12C5 13.928 5.68466 15.5767 7.05399 16.946C8.42332 18.3153 10.072 19 12 19C13.928 19 15.5767 18.3153 16.946 16.946C18.3153 15.5767 19 13.928 19 12C19 10.072 18.3153 8.42332 16.946 7.05399C15.5767 5.68466 13.928 5 12 5ZM12 17.6197C10.4664 17.6197 9.14632 17.0665 8.03991 15.9601C6.93349 14.8537 6.38028 13.5336 6.38028 12C6.38028 10.7293 6.7856 9.57903 7.59624 8.5493L15.4507 16.4038C14.421 17.2144 13.2707 17.6197 12 17.6197ZM16.4038 15.4507L8.5493 7.59624C9.57903 6.7856 10.7293 6.38028 12 6.38028C13.5336 6.38028 14.8537 6.93349 15.9601 8.03991C17.0665 9.14632 17.6197 10.4664 17.6197 12C17.6197 13.2707 17.2144 14.421 16.4038 15.4507Z\" fill=\"white\"/></g></svg>')}.soul-indicator--not-allowed.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(42, 78%, 60%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M12 5C10.072 5 8.42332 5.68466 7.05399 7.05399C5.68466 8.42332 5 10.072 5 12C5 13.928 5.68466 15.5767 7.05399 16.946C8.42332 18.3153 10.072 19 12 19C13.928 19 15.5767 18.3153 16.946 16.946C18.3153 15.5767 19 13.928 19 12C19 10.072 18.3153 8.42332 16.946 7.05399C15.5767 5.68466 13.928 5 12 5ZM12 17.6197C10.4664 17.6197 9.14632 17.0665 8.03991 15.9601C6.93349 14.8537 6.38028 13.5336 6.38028 12C6.38028 10.7293 6.7856 9.57903 7.59624 8.5493L15.4507 16.4038C14.421 17.2144 13.2707 17.6197 12 17.6197ZM16.4038 15.4507L8.5493 7.59624C9.57903 6.7856 10.7293 6.38028 12 6.38028C13.5336 6.38028 14.8537 6.93349 15.9601 8.03991C17.0665 9.14632 17.6197 10.4664 17.6197 12C17.6197 13.2707 17.2144 14.421 16.4038 15.4507Z\" fill=\"white\"/></g></svg>')}.soul-indicator--locked{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(211, 12%, 43%)\" stroke=\"hsl(211, 12%, 43%)\" stroke-width=\"1.5\"/><path d=\"M17.1938 11.3905H16.6282V9.35844C16.6282 6.95519 14.626 5 12.1649 5C9.7038 5 7.70159 6.95519 7.70159 9.35844V11.3905H7.35173C6.88132 11.3905 6.5 11.7718 6.5 12.2422V18.1483C6.5 18.6187 6.88132 19 7.35173 19H17.1938C17.6642 19 18.0456 18.6187 18.0456 18.1483V12.2422C18.0456 11.7719 17.6642 11.3905 17.1938 11.3905ZM9.52794 9.35844C9.52794 7.94649 10.7109 6.79781 12.1649 6.79781C13.6189 6.79781 14.8018 7.94649 14.8018 9.35844V11.3905H9.52794V9.35844Z\" fill=\"white\"/></g></svg>')}.soul-indicator--locked.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(211, 12%, 43%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M17.1938 11.3905H16.6282V9.35844C16.6282 6.95519 14.626 5 12.1649 5C9.7038 5 7.70159 6.95519 7.70159 9.35844V11.3905H7.35173C6.88132 11.3905 6.5 11.7718 6.5 12.2422V18.1483C6.5 18.6187 6.88132 19 7.35173 19H17.1938C17.6642 19 18.0456 18.6187 18.0456 18.1483V12.2422C18.0456 11.7719 17.6642 11.3905 17.1938 11.3905ZM9.52794 9.35844C9.52794 7.94649 10.7109 6.79781 12.1649 6.79781C13.6189 6.79781 14.8018 7.94649 14.8018 9.35844V11.3905H9.52794V9.35844Z\" fill=\"white\"/></g></svg>')}.soul-indicator--info{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(205, 76%, 39%)\" stroke=\"hsl(205, 76%, 39%)\" stroke-width=\"1.5\"/><path d=\"M13.5 19H10.5V10.6H13.5V19ZM13.5 7.8H10.5V5H13.5V7.8Z\" fill=\"white\"/></g></svg>')}.soul-indicator--info.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(205, 76%, 39%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M13.5 19H10.5V10.6H13.5V19ZM13.5 7.8H10.5V5H13.5V7.8Z\" fill=\"white\"/></g></svg>')}.soul-indicator--help{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(205, 76%, 39%)\" stroke=\"hsl(205, 76%, 39%)\" stroke-width=\"1.5\"/><path d=\"M13.25 19H11.15V17H13.25V19ZM15.4235 11.25L14.4785 12.17C13.7225 12.9 13.25 13.5 13.25 15H11.15V14.5C11.15 13.4 11.6225 12.4 12.3785 11.67L13.6805 10.41C14.069 10.05 14.3 9.55 14.3 9C14.3 7.9 13.355 7 12.2 7C11.045 7 10.1 7.9 10.1 9H8C8 6.79 9.8795 5 12.2 5C14.5205 5 16.4 6.79 16.4 9C16.4 9.88 16.022 10.68 15.4235 11.25Z\" fill=\"white\"/></g></svg>')}.soul-indicator--help.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(205, 76%, 39%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M13.25 19H11.15V17H13.25V19ZM15.4235 11.25L14.4785 12.17C13.7225 12.9 13.25 13.5 13.25 15H11.15V14.5C11.15 13.4 11.6225 12.4 12.3785 11.67L13.6805 10.41C14.069 10.05 14.3 9.55 14.3 9C14.3 7.9 13.355 7 12.2 7C11.045 7 10.1 7.9 10.1 9H8C8 6.79 9.8795 5 12.2 5C14.5205 5 16.4 6.79 16.4 9C16.4 9.88 16.022 10.68 15.4235 11.25Z\" fill=\"white\"/></g></svg>')}.soul-indicator--waiting{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(211, 12%, 43%)\" stroke=\"hsl(211, 12%, 43%)\" stroke-width=\"1.5\"/><path d=\"M8 5V9.2L10.8 12L8 14.8V19H16.4V14.8L13.6 12L16.4 9.2V5H8ZM15 15.36V17.5705H9.4V15.36L12.2 12.56L15 15.36Z\" fill=\"white\"/></g></svg>')}.soul-indicator--waiting.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(211, 12%, 43%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M8 5V9.2L10.8 12L8 14.8V19H16.4V14.8L13.6 12L16.4 9.2V5H8ZM15 15.36V17.5705H9.4V15.36L12.2 12.56L15 15.36Z\" fill=\"white\"/></g></svg>')}.soul-indicator--experimental{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(294, 48%, 46%)\" stroke=\"hsl(294, 48%, 46%)\" stroke-width=\"1.5\"/><path d=\"M18.3368 16.7L13.6243 10.4194V7.03125L14.7212 5.65812C14.9325 5.39 14.7456 5 14.4043 5H9.59435C9.2531 5 9.06622 5.39 9.27747 5.65812L10.3743 7.03125V10.4194L5.66185 16.7C5.26372 17.2362 5.6456 18 6.31185 18H17.6868C18.3531 18 18.735 17.2362 18.3368 16.7Z\" fill=\"white\"/></g></svg>')}.soul-indicator--experimental.soul-indicator--with-border{background-image:url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z\" fill=\"hsl(294, 48%, 46%)\" stroke=\"hsl(0, 0%, 100%)\" stroke-width=\"1.5\"/><path d=\"M18.3368 16.7L13.6243 10.4194V7.03125L14.7212 5.65812C14.9325 5.39 14.7456 5 14.4043 5H9.59435C9.2531 5 9.06622 5.39 9.27747 5.65812L10.3743 7.03125V10.4194L5.66185 16.7C5.26372 17.2362 5.6456 18 6.31185 18H17.6868C18.3531 18 18.735 17.2362 18.3368 16.7Z\" fill=\"white\"/></g></svg>')}:host{display:block}.soul-avatar{display:inline-flex;align-items:center;vertical-align:middle;width:100%}.soul-avatar__thumbnail{width:var(--_soul-avatar-thumbnail-size, 2rem);height:var(--_soul-avatar-thumbnail-size, 2rem);color:var(--_soul-avatar-thumbnail-color, hsl(0, 0%, 100%));-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:inherit;position:relative;flex-shrink:0}.soul-avatar__icon,.soul-avatar__chars,.soul-avatar__image{display:flex;align-items:center;justify-content:center;width:100%;height:100%;box-shadow:0 0 0 1px hsl(0, 0%, 100%);border-radius:var(--_soul-avatar-thumbnail-border-radius, 50%)}.soul-avatar__image{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;background-color:hsl(0, 0%, 100%)}.soul-avatar__icon,.soul-avatar__chars{background-color:var(--_soul-avatar-thumbnail-background-color, var(--soul-theme-color-primary-500))}.soul-avatar__chars{white-space:nowrap;text-transform:uppercase;overflow:hidden;font-size:var(--_soul-avatar-chars-font-size);line-height:var(--_soul-avatar-chars-line-height)}.soul-avatar__icon soul-icon{--soul-icon-size:var(--_soul-avatar-icon-size, var(--soul-font-size-2-xs))}.soul-avatar__content{display:flex;flex-direction:column;justify-content:center;margin:var(--_soul-avatar-content-margin, 0 0 0 0.25rem);overflow:hidden}.soul-avatar__additional-text,.soul-avatar__status-message{font-size:var(--_soul-avatar-additional-text-font-size);line-height:var(--_soul-avatar-additional-text-line-height);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.soul-avatar__additional-text{color:var(--_soul-avatar-additional-text-color, var(--soul-theme-color-neutral-500))}.soul-avatar__name{color:var(--_soul-avatar-name-color, currentColor);font-size:var(--_soul-avatar-name-font-size);line-height:var(--_soul-avatar-name-line-height);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.soul-avatar__indicator{bottom:20%;right:14%;transform:translate(50%, 50%);position:absolute;width:45%;height:45%}soul-indicator{--soul-indicator-size:100%}.soul-avatar-color--primary{--_soul-avatar-thumbnail-background-color:var(--soul-theme-color-primary-500)}.soul-avatar-color--neutral{--_soul-avatar-thumbnail-background-color:var(--soul-theme-color-neutral-400)}.soul-avatar-color--1{--_soul-avatar-thumbnail-background-color:hsl(183, 94%, 28%)}.soul-avatar-color--2{--_soul-avatar-thumbnail-background-color:hsl(204, 58%, 49%)}.soul-avatar-color--3{--_soul-avatar-thumbnail-background-color:hsl(205, 67%, 45%)}.soul-avatar-color--4{--_soul-avatar-thumbnail-background-color:hsl(221, 50%, 40%)}.soul-avatar-color--5{--_soul-avatar-thumbnail-background-color:hsl(227, 37%, 43%)}.soul-avatar-color--6{--_soul-avatar-thumbnail-background-color:hsl(262, 48%, 46%)}.soul-avatar-color--7{--_soul-avatar-thumbnail-background-color:hsl(317, 100%, 23%)}.soul-avatar-color--8{--_soul-avatar-thumbnail-background-color:hsl(330, 58%, 45%)}.soul-avatar-color--9{--_soul-avatar-thumbnail-background-color:hsl(294, 48%, 46%)}.soul-avatar-color--10{--_soul-avatar-thumbnail-background-color:hsl(0, 67%, 44%)}.soul-avatar-color--11{--_soul-avatar-thumbnail-background-color:hsl(19, 86%, 56%)}.soul-avatar-color--12{--_soul-avatar-thumbnail-background-color:hsl(42, 78%, 60%)}.soul-avatar-color--13{--_soul-avatar-thumbnail-background-color:hsl(122, 39%, 41%)}:host([status=warning]) .soul-avatar__status-message{color:var(--_soul-avatar-status-message-color, hsl(43, 77%, 27%))}:host([status=positive]) .soul-avatar__status-message{color:var(--_soul-avatar-status-message-color, hsl(125, 56%, 29%))}:host([status=waiting]) .soul-avatar__status-message,:host([status=locked]) .soul-avatar__status-message{color:var(--_soul-avatar-additional-text-color, var(--soul-theme-color-neutral-500))}:host([muted]:not([muted=false])) .soul-avatar{--_soul-avatar-thumbnail-background-color:var(--soul-theme-color-neutral-200);--_soul-avatar-additional-text-color:var(--soul-theme-color-neutral-400);--_soul-avatar-status-message-color:var(--soul-theme-color-neutral-400);--_soul-avatar-name-color:var(--soul-theme-color-neutral-400);--_soul-avatar-thumbnail-color:var(--soul-theme-color-neutral-400)}:host([muted]:not([muted=false])) .soul-avatar__image,:host([muted]:not([muted=false])) .soul-avatar__indicator{filter:grayscale(100%);opacity:0.75}:host([type=entity]) .soul-avatar{--_soul-avatar-thumbnail-border-radius:0.25rem}:host([size=s]):host([type=entity]) .soul-avatar{--_soul-avatar-thumbnail-border-radius:0.125rem}:host([size=s]) .soul-avatar{--_soul-avatar-thumbnail-size:1rem;--_soul-avatar-content-margin:0 0 0 0.25rem;--_soul-avatar-chars-font-size:var(--soul-font-size-2-xs);--_soul-avatar-chars-line-height:var(--soul-line-height-2-xs);--_soul-avatar-additional-text-font-size:var(--soul-font-size-xs);--_soul-avatar-additional-text-line-height:var(--soul-line-height-2-xs);--_soul-avatar-name-font-size:var(--soul-font-size-s);--_soul-avatar-name-line-height:var(--soul-line-height-s);--_soul-avatar-icon-size:var(--soul-font-size-2-xs)}:host .soul-avatar,:host([size=m]) .soul-avatar{--_soul-avatar-thumbnail-size:2rem;--_soul-avatar-content-margin:0 0 0 0.5rem;--_soul-avatar-chars-font-size:var(--soul-font-size-s);--_soul-avatar-chars-line-height:var(--soul-line-height-s);--_soul-avatar-additional-text-font-size:var(--soul-font-size-xs);--_soul-avatar-additional-text-line-height:var(--soul-line-height-xs);--_soul-avatar-name-font-size:var(--soul-font-size-s);--_soul-avatar-name-line-height:var(--soul-line-height-s);--_soul-avatar-icon-size:var(--soul-font-size-m)}:host([size=l]) .soul-avatar{--_soul-avatar-thumbnail-size:3rem;--_soul-avatar-content-margin:0 0 0 0.75rem;--_soul-avatar-chars-font-size:var(--soul-font-size-l);--_soul-avatar-chars-line-height:var(--soul-line-height-l);--_soul-avatar-additional-text-font-size:var(--soul-font-size-m);--_soul-avatar-additional-text-line-height:var(--soul-line-height-m);--_soul-avatar-name-font-size:var(--soul-font-size-l);--_soul-avatar-name-line-height:var(--soul-line-height-l);--_soul-avatar-icon-size:var(--soul-font-size-xl)}:host([size=xl]) .soul-avatar{--_soul-avatar-thumbnail-size:6rem;--_soul-avatar-content-margin:0 0 0 1rem;--_soul-avatar-chars-font-size:var(--soul-font-size-3-xl);--_soul-avatar-chars-line-height:var(--soul-line-height-3-xl);--_soul-avatar-additional-text-font-size:var(--soul-font-size-2-xl);--_soul-avatar-additional-text-line-height:var(--soul-line-height-2-xl);--_soul-avatar-name-font-size:var(--soul-font-size-3-xl);--_soul-avatar-name-line-height:var(--soul-line-height-3-xl);--_soul-avatar-icon-size:var(--soul-font-size-3-xl)}";

const SoulAvatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.supportedSizes = ['s', 'm', 'l', 'xl'];
    this.supportedColors = ['auto', 'primary', 'neutral'];
    this.maxColorIndex = 13;
    this.supportedStatuses = ['positive', 'waiting', 'locked', 'warning'];
    this.statusHelper = new StatusHelper.StatusHelper();
    this.sizeHelper = new SizeHelper.SizeHelper();
    this.type = 'user';
    this.size = 'm';
    this.status = undefined;
    this.imageUrl = undefined;
    this.icon = undefined;
    this.chars = undefined;
    this.name = undefined;
    this.additionalText = undefined;
    this.thumbnailOnly = false;
    this.color = 'auto';
    this.accessibilityLabel = undefined;
    this.muted = false;
    this.statusMessage = undefined;
    this.imageError = false;
  }
  componentWillLoad() {
    this.updateAriaLabel();
  }
  sizeChange(newValue) {
    this.sizeHelper.validateSize(this.supportedSizes, newValue);
  }
  statusChange(newValue) {
    this.statusHelper.validateStatus(this.supportedStatuses, newValue);
  }
  colorChange(newValue) {
    this.validateColors(newValue);
  }
  updateAriaLabel() {
    let label = this.accessibilityLabel || this.name || '';
    if (!this.accessibilityLabel) {
      if (utils.isNotEmpty(this.additionalText) && !this.hasStatusWithMessage()) {
        label += `. ${this.additionalText}`;
      }
      if (this.hasStatusWithMessage()) {
        label += `. ${this.statusMessage}`;
      }
    }
    this.ariaLabel = label;
  }
  render() {
    const thumbnailType = this.getThumbnailType();
    const avatarColor = this.getAvatarColor();
    this.imageError = false;
    return (index.h(index.Host, { "aria-label": this.ariaLabel }, index.h("div", { class: `soul-avatar soul-avatar-color--${avatarColor}` }, index.h("div", { class: "soul-avatar__thumbnail soul-tooltip", title: this.thumbnailOnly ? this.ariaLabel : '' }, thumbnailType === 'image' ? index.h("img", { onError: () => this.imageError = true, class: "soul-avatar__image", src: this.imageUrl, alt: "" }) : '', thumbnailType === 'icon' ? index.h("div", { class: "soul-avatar__icon" }, index.h("soul-icon", { name: this.icon })) : '', thumbnailType === 'chars' ?
      index.h("div", { class: "soul-avatar__chars" }, index.h("abbr", null, this.getOrCalculateChars())) : '', this.hasStatus() ?
      index.h("div", { class: "soul-avatar__indicator" }, index.h("soul-indicator", { type: this.status, border: true })) : ''), !this.thumbnailOnly && this.hasTextContent() ?
      index.h("div", { class: "soul-avatar__content", ref: el => this.contentElement = el }, utils.isNotEmpty(this.name) ?
        index.h("span", { class: "soul-avatar__name", onMouseOver: this.onMouseOver.bind(this) }, this.name) : '', utils.isNotEmpty(this.additionalText) && !this.hasStatusWithMessage() ?
        index.h("span", { class: "soul-avatar__additional-text", onMouseOver: this.onMouseOver.bind(this) }, this.additionalText) : '', this.hasStatusWithMessage() ?
        index.h("span", { class: "soul-avatar__status-message", onMouseOver: this.onMouseOver.bind(this) }, this.statusMessage) : '') : '')));
  }
  onMouseOver(e) {
    var _a;
    const target = e.target;
    if (target.scrollWidth > this.contentElement.offsetWidth) {
      target.title = (_a = target.textContent) !== null && _a !== void 0 ? _a : '';
    }
    else {
      target.title = '';
    }
  }
  getAvatarColor() {
    if (this.color === 'primary' || this.color === 'neutral' || this.isColorInRange(this.color)) {
      return this.color;
    }
    return this.getColorIndexFromLetters();
  }
  getColorIndexFromLetters() {
    const chars = this.getOrCalculateChars();
    return utils.isNotEmpty(chars) ? this.getColorIndexFromChars(chars.trim().toUpperCase()) : 'primary';
  }
  getColorIndexFromChars(chars) {
    const firstCharCode = chars.charCodeAt(0);
    return (firstCharCode % this.maxColorIndex) + 1;
  }
  getThumbnailType() {
    if (utils.isNotEmpty(this.imageUrl) && !this.imageError) {
      return 'image';
    }
    if (utils.isNotEmpty(this.icon)) {
      return 'icon';
    }
    return 'chars';
  }
  getOrCalculateChars() {
    return this.chars ? this.chars.trim() : this.getCharsFromContent();
  }
  getCharsFromContent() {
    return this.name ? this.getNameInitials(this.name) : this.getCharsFromAdditionalText();
  }
  getNameInitials(name) {
    const initials = name.split(' ').map(token => token.slice(0, 1));
    return initials.length > 1 ? initials.join('').slice(0, 3) : name.slice(0, 2);
  }
  getCharsFromAdditionalText() {
    return this.additionalText ? this.getNameInitials(this.additionalText) : null;
  }
  validateColors(newValue) {
    if (utils.isDefined(this.color) && !this.supportedColors.includes(newValue) && !this.isColorInRange(newValue)) {
      console.debug(`Color ${newValue} not supported. Supported colors: ${this.supportedColors.join(', ')} and a index between 1 and 13`);
    }
  }
  isColorInRange(color) {
    const colorNumber = parseInt(color);
    return !isNaN(colorNumber) && colorNumber > 0 && colorNumber <= this.maxColorIndex;
  }
  hasTextContent() {
    return utils.isNotEmpty(this.name) || utils.isNotEmpty(this.additionalText) || this.hasStatusWithMessage();
  }
  hasStatus() {
    return utils.isDefined(this.status) && this.statusHelper.isValidStatus(this.supportedStatuses, this.status);
  }
  hasStatusWithMessage() {
    return this.hasStatus() && utils.isNotEmpty(this.statusMessage);
  }
  static get watchers() { return {
    "size": ["sizeChange"],
    "status": ["statusChange"],
    "color": ["colorChange"],
    "accessibilityLabel": ["updateAriaLabel"],
    "name": ["updateAriaLabel"],
    "additionalText": ["updateAriaLabel"],
    "thumbnailOnly": ["updateAriaLabel"]
  }; }
};
SoulAvatar.style = soulAvatarCss;

exports.soul_avatar = SoulAvatar;

//# sourceMappingURL=soul-avatar.cjs.entry.js.map