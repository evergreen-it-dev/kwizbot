import control from '../control';
import utils from '../utils';

/**
 * action
 */
export default class controlAction extends control {

  /**
   * class configuration
   */
  static get definition() {
    return {
        icon:'A',
        label:'Action',
        action: '',
      // mi18n custom mappings (defaults to camelCase type)
      mi18n: {
       }
    };
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
      return {
          field: this.markup('p', utils.parsedHtml(this.action), this.config),
          layout: 'noLabel'
      };
  }
}

// register this control for the following types & text subtypes
control.register(['action'], controlAction);

