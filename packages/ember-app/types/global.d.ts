// Types for compiled templates
declare module 'ember-app/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';
  const tmpl: TemplateFactory;
  export default tmpl;
}
